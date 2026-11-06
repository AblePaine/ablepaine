// AblePaine newsletter signup — the same Kit capture rail the flagship
// sites run (DoughMatrix / MicroRadicle / Saponis): a browser POST of
// `email_address` to the shared umbrella form's public endpoint
// (app.kit.com/forms/<id>/subscriptions, no-cors — the signup lands; the
// response body is unreadable cross-origin by design).
//
// UMBRELLA_FORM_ID is the shared maker/studio list Brad approved
// 2026-10-20. If AblePaine gets a dedicated Kit form later, swap this
// one constant.
const UMBRELLA_FORM_ID = "10079829";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function renderNewsletter() {
  const slot = document.getElementById("newsletter-slot");
  if (!slot) return;

  const form = document.createElement("form");
  form.className = "newsletter-form";
  form.noValidate = true;
  form.innerHTML = `
    <label for="newsletter-email">Email address</label>
    <input id="newsletter-email" type="email" autocomplete="email"
           placeholder="you@example.com" required />
    <button type="submit">Subscribe</button>
    <p class="newsletter-msg" role="status" aria-live="polite"></p>`;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = form.querySelector("input");
    const button = form.querySelector("button");
    const msg = form.querySelector(".newsletter-msg");
    const address = (input.value || "").trim();

    msg.textContent = "";
    msg.className = "newsletter-msg";
    if (!EMAIL_RE.test(address)) {
      msg.textContent = "Hmm, that address doesn\u2019t look right — check it and try again.";
      msg.classList.add("err");
      return;
    }

    button.disabled = true;
    input.disabled = true;
    try {
      await fetch(`https://app.kit.com/forms/${UMBRELLA_FORM_ID}/subscriptions`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email_address: address }).toString(),
      });
      slot.innerHTML = '<p class="newsletter-done">You\u2019re on the list — welcome aboard.</p>';
    } catch {
      button.disabled = false;
      input.disabled = false;
      msg.textContent = "Hmm, that didn\u2019t go through — check the address and try again.";
      msg.classList.add("err");
    }
  });

  slot.appendChild(form);
}

document.addEventListener("DOMContentLoaded", renderNewsletter);

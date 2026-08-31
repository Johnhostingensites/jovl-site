(() => {
  "use strict";

  const navToggle = document.querySelector("[data-nav-toggle]");
  const mainNav = document.querySelector("[data-main-nav]");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      mainNav.classList.toggle("open", !open);
      document.body.classList.toggle("menu-open", !open);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        mainNav.classList.remove("open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(Math.max(2026, new Date().getFullYear()));
  });

  document.querySelectorAll("[data-faq]").forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      document.querySelectorAll("[data-faq].open").forEach((openItem) => {
        if (openItem === item) return;
        openItem.classList.remove("open");
        const openButton = openItem.querySelector(".faq-question");
        const openAnswer = openItem.querySelector(".faq-answer");
        if (openButton) openButton.setAttribute("aria-expanded", "false");
        if (openAnswer) openAnswer.style.height = "0px";
      });

      item.classList.toggle("open", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.style.height = !isOpen ? `${answer.scrollHeight}px` : "0px";
    });
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealNodes.length) {
    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  /* A quiet JOVL-coloured haze follows the normal mouse across the whole site. */
  const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (precisePointer.matches && !reducedMotion.matches) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let running = false;

    const render = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        requestAnimationFrame(render);
      } else {
        running = false;
      }
    };

    document.addEventListener(
      "pointermove",
      (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
        glow.classList.add("is-visible");
        if (!running) {
          running = true;
          requestAnimationFrame(render);
        }
      },
      { passive: true }
    );

    document.addEventListener("pointerleave", () => glow.classList.remove("is-visible"));
    document.addEventListener("pointerenter", () => glow.classList.add("is-visible"));
  }

  /* Keep the form native and reliable; only improve the subject and submit state. */
  document.querySelectorAll("[data-native-form]").forEach((form) => {
    form.addEventListener("submit", () => {
      const company = form.querySelector("[name='Bedrijf']")?.value.trim();
      const subject = form.querySelector("[name='_subject']");
      const submitButton = form.querySelector("button[type='submit']");

      if (subject) {
        subject.value = company
          ? `Nieuwe website-aanvraag van ${company}`
          : "Nieuwe website-aanvraag via jovl.nl";
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Bezig met versturen…";
      }
    });
  });
})();

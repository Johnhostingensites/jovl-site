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

  const websiteForm = document.querySelector("[data-website-form]");
  if (websiteForm) {
    websiteForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const submitButton = websiteForm.querySelector("button[type='submit']");
      const status = websiteForm.querySelector("[data-form-status]");
      const endpoint = websiteForm.getAttribute("data-endpoint")?.trim();
      const formData = new FormData(websiteForm);
      const originalButtonText = submitButton?.textContent || "Verstuur mijn antwoorden";

      if (!endpoint) {
        if (status) {
          status.textContent = "Het formulier is nog niet gekoppeld. Mail je antwoorden naar john@jovl.nl.";
          status.classList.add("show");
        }
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Bezig met versturen…";
      }
      if (status) {
        status.classList.remove("show");
        status.textContent = "";
      }

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        let result = {};
        try {
          result = await response.json();
        } catch (_) {
          // Some form services can return an empty success response.
        }

        if (!response.ok || result.success === false) {
          throw new Error(result.message || "De vragenlijst kon niet worden verstuurd.");
        }

        websiteForm.reset();
        if (status) {
          status.textContent = "Dank je. Je antwoorden zijn verstuurd. Ik neem contact met je op.";
          status.classList.add("show");
        }
      } catch (error) {
        if (status) {
          status.textContent =
            "Versturen lukt nu niet. Mail je antwoorden rechtstreeks naar john@jovl.nl.";
          status.classList.add("show");
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      }
    });
  }
})();

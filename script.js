// MENU RESPONSIVO
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const visible = nav.style.display === "flex";
      nav.style.display = visible ? "none" : "flex";
      toggle.setAttribute("aria-expanded", String(!visible));
    });
  }

  // Cerrar menú al hacer click fuera
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 820) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.style.display = "none";
      }
    }
  });
});

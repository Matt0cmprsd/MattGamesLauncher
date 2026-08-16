// Matt Games Launcher — interactions

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.style.display === "flex";
      links.style.display = open ? "none" : "flex";
      links.style.flexDirection = "column";
      links.style.position = "absolute";
      links.style.top = "76px";
      links.style.left = "0";
      links.style.right = "0";
      links.style.background = "var(--bg)";
      links.style.borderBottom = "1px solid var(--border)";
      links.style.padding = "16px 32px";
      links.style.gap = "16px";
    });
  }

});

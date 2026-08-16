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

  // Requirements tabs (download page)
  const tabs = document.querySelectorAll(".req-tab");
  const panels = document.querySelectorAll(".req-panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      const target = document.querySelector(`.req-panel[data-panel="${tab.dataset.tab}"]`);
      if (target) target.classList.add("active");
    });
  });
});

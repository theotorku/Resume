const toggle = document.getElementById("theme-toggle");
const saved = localStorage.getItem("theme");

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} theme`);
  toggle.textContent = dark ? "Dark" : "Light";
}

setTheme(saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);
toggle.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  setTheme(dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
});
document.getElementById("year").textContent = new Date().getFullYear();

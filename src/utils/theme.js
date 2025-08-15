const THEME_KEY = "selected-theme";

export function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  sessionStorage.setItem(THEME_KEY, theme);
}

export function getSavedTheme() {
  return sessionStorage.getItem(THEME_KEY) || "github";
}

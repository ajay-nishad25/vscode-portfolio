const THEME_KEY = "selected-theme";

export function setTheme(theme) {
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
    sessionStorage.setItem(THEME_KEY, theme);
  }
}

export function getSavedTheme() {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(THEME_KEY) || "github";
  }
  return "github";
}

export function getLanguageColor(language) {
  switch (language?.toLowerCase()) {
    case "javascript":
      return "#f1e05a"; // Yellow
    case "python":
      return "#3572A5"; // Blue
    case "java":
      return "#b07219"; // Brown
    case "c":
      return "#555555"; // Dark Grey
    case "c++":
      return "#f34b7d"; // Pinkish
    case "c#":
      return "#178600"; // Green
    case "php":
      return "#4F5D95"; // Purple
    case "html":
      return "#e34c26"; // Orange
    case "css":
      return "#563d7c"; // Purple
    case "typescript":
      return "#2b7489"; // Blue-Green
    case "ruby":
      return "#701516"; // Dark Red
    case "go":
      return "#00ADD8"; // Light Blue
    case "kotlin":
      return "#A97BFF"; // Purple-ish
    case "swift":
      return "#ffac45"; // Orange-Yellow
    case "shell":
      return "#89e051"; // Light Green
    case "rust":
      return "#dea584"; // Beige
    default:
      return "#cccccc"; // Grey fallback
  }
}

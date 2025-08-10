# Copilot Instructions for vscode-portfolio

## Project Overview
This is a React-based portfolio web app that mimics the look and feel of VS Code. It uses React functional components, React Bootstrap for layout, and custom CSS for styling. The UI is split into sidebar navigation (Explorer, Search, etc.) and main content tabs, with a focus on a desktop-like experience.

## Key Architectural Patterns
- **Component Structure:**
  - Main pages are in `src/pages/` (e.g., `File.js`, `Search.js`).
  - Editor tab content is in `src/components/EditorTabs/` (e.g., `Index.js`, `AboutTech.js`).
  - Utility hooks (e.g., `useMediaQuery.js`) are in `src/utils/`.
  - Styles are in `src/styles/` and imported per component.
- **Responsive Design:**
  - Mobile detection uses the custom `useMediaQuery` hook.
  - Sidebar (`Explorer`) is hidden on mobile (`isMobile`), only main content is shown.
  - Desktop layout uses Bootstrap grid (`Row`, `Col`) with fixed sidebar width.
- **Session Persistence:**
  - Open tabs and active tab are stored in `sessionStorage` for persistence across reloads.
- **Icons:**
  - Uses `react-icons` for VS Code-like icons in tabs and sidebar.

## Developer Workflows
- **Start Dev Server:**
  - `npm start` (uses `react-scripts`)
- **Build:**
  - `npm run build`
- **Test:**
  - `npm test` (Jest + React Testing Library)
- **Linting:**
  - ESLint config extends `react-app` defaults.

## Project-Specific Conventions
- **Tab Management:**
  - Tabs are managed via state and sessionStorage in `File.js`.
  - Tab content is mapped by filename to React components.
- **Sidebar Visibility:**
  - Sidebar is conditionally rendered based on `isMobile`.
  - To show sidebar on mobile, remove the `!isMobile` condition in page components.
- **Styling:**
  - Custom CSS classes (e.g., `div-flex-column`, `explorer-bg`) are used for layout and theming.
  - Bootstrap classes are combined with custom styles.

## Integration Points
- **External Libraries:**
  - `react-bootstrap` for layout.
  - `react-icons` for UI icons.
  - `@uiw/react-codemirror` and related packages for code editor features (if used).

## Example Patterns
- **Responsive Sidebar:**
  ```js
  {!isMobile && (
    <Col ...>
      {/* Sidebar content */}
    </Col>
  )}
  ```
- **Tab Content Mapping:**
  ```js
  const fileComponents = {
    "Index.js": <Index />,
    // ...
  };
  ```
- **Session Storage for Tabs:**
  ```js
  useEffect(() => {
    sessionStorage.setItem("openTabs", JSON.stringify(openTabs));
  }, [openTabs]);
  ```

## Key Files & Directories
- `src/pages/File.js` — Main file explorer and tab logic
- `src/pages/Search.js` — Search sidebar UI
- `src/components/EditorTabs/` — Tab content components
- `src/utils/useMediaQuery.js` — Responsive detection
- `src/styles/` — Custom CSS

---
If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.

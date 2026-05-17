import "styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/theme.css";
import StoreProvider from "./StoreProvider";
import NextLayout from "./NextLayout";

export const metadata = {
  title: "ajay-nishad25/portfolio",
  description: "VS Code themed portfolio showcasing my projects and skills.",
  keywords: ["vscode portfolio", "ajay nishad", "developer portfolio"],
};

const themeScript = `
  (function() {
    try {
      var theme = sessionStorage.getItem('selected-theme') || 'github';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <StoreProvider>
          <NextLayout>{children}</NextLayout>
        </StoreProvider>
      </body>
    </html>
  );
}

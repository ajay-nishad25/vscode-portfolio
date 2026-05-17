import "styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/theme.css";
import StoreProvider from "./StoreProvider";
import NextLayout from "./NextLayout";

export const metadata = {
  title: "Ajay Nishad | VS Code Themed Developer Portfolio",
  description:
    "Full Stack Developer portfolio of Ajay Nishad, built with Next.js and React. Experience a unique VS Code themed interactive developer portfolio showcasing projects, skills, and open-source contributions.",
  keywords: [
    "VS Code based portfolio",
    "vs code portfolio",
    "vscode theme portfolio",
    "Ajay Nishad",
    "Ajay Nishad portfolio",
    "full stack developer portfolio",
    "react developer portfolio",
    "next.js portfolio",
    "frontend developer",
    "software engineer portfolio",
    "web developer portfolio",
    "MERN stack developer",
    "Next.js developer India",
    "React.js developer",
    "interactive developer portfolio",
    "developer portfolio template",
    "VS Code style website",
    "creative portfolio design",
    "Python Django developer",
    "JavaScript developer portfolio",
  ],
  openGraph: {
    title: "Ajay Nishad | VS Code Themed Developer Portfolio",
    description:
      "Full Stack Developer portfolio of Ajay Nishad, built with Next.js and React.",
    type: "website",
    url: "https://vscode-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Nishad | VS Code Themed Developer Portfolio",
    description:
      "Full Stack Developer portfolio of Ajay Nishad, built with Next.js and React.",
  },
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

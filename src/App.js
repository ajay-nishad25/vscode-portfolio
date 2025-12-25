import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "Routes";
import { setTheme, getSavedTheme } from "utils/theme";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Snowfall from "react-snowfall";

function App() {
  useEffect(() => {
    setTheme(getSavedTheme());
  }, []);

  const snowEndDate = new Date("2026-01-05T23:59:59");
  const shouldShowSnow = new Date() <= snowEndDate;

  return (
    <BrowserRouter>
      {/* Snowfall effect */}
      {shouldShowSnow && (
        <Snowfall
          snowflakeCount={100}
          speed={[0.3, 1]}
          wind={[-0.2, 0.2]}
          radius={[0.5, 2]}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}
      <Routes />
      <Analytics />
    </BrowserRouter>
  );
}
export default App;

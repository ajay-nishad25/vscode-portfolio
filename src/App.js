import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "Routes";
import { setTheme, getSavedTheme } from "utils/theme";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    setTheme(getSavedTheme());
  }, []);
  return (
    <BrowserRouter>
      <Routes />
      <Analytics />
    </BrowserRouter>
  );
}
export default App;

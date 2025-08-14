import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "Routes";
import { setTheme, getSavedTheme } from "utils/theme";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTheme(getSavedTheme());
  }, []);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
export default App;

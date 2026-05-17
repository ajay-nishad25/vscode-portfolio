"use client";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useEffect } from "react";
import { setTheme, getSavedTheme } from "utils/theme";

export default function StoreProvider({ children }) {
  useEffect(() => {
    setTheme(getSavedTheme());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}

import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function CodeEditor({ value, height = "95vh", lang }) {
  // Choose language extension based on `lang` prop; expand as needed
  let extensions = [];
  if (lang === "js") extensions = [javascript()];
  // Add other languages if needed (e.g. css(), html(), etc.)

  return (
    <CodeMirror
      value={value}
      height={height}
      theme="dark"
      extensions={extensions}
      readOnly={false}
      basicSetup={{
        lineNumbers: true,
      }}
    />
  );
}

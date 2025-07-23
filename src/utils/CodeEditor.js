import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { markdown } from "@codemirror/lang-markdown";
import { html } from "@codemirror/lang-html";
import "styles/codeEditor.css";

export default function CodeEditor({ value, height = "95vh", lang }) {
  let extensions = [];
  if (lang === "js") extensions = [javascript()];
  if (lang === "css") extensions = [css()];
  if (lang === "md" || lang === "markdown") extensions = [markdown()];
  if (lang === "html") extensions = [html()];

  return (
    <CodeMirror
      value={value}
      height={height}
      theme={vscodeDark}
      extensions={extensions}
      readOnly={false}
      basicSetup={{
        lineNumbers: true,
      }}
      style={{ fontSize: "12px", border: "none" }}
    />
  );
}

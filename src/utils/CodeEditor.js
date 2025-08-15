import React, { useMemo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { markdown } from "@codemirror/lang-markdown";
import { html } from "@codemirror/lang-html";
import { EditorView } from "@codemirror/view";
import "styles/codeEditor.css";

export default function CodeEditor({ value, height = "95vh", lang }) {
  let langExt = [];
  if (lang === "js") langExt = [javascript()];
  if (lang === "css") langExt = [css()];
  if ((lang === "md") | (lang === "markdown")) langExt = [markdown()];
  if (lang === "html") langExt = [html()];

  // Only background overrides (keep vscodeDark colors)
  const bgOverride = useMemo(
    () =>
      EditorView.theme(
        {
          ".cm-editor, .cm-scroller": {
            backgroundColor: "var(--main-bg) !important",
          },
          ".cm-gutters": {
            backgroundColor: "var(--main-bg) !important",
            borderRight: "1px solid var(--border-color) !important",
          },
        },
        { dark: true },
      ),
    [],
  );

  return (
    <CodeMirror
      value={value}
      height={height}
      // put vscodeDark inside extensions so our override comes AFTER it
      extensions={[...langExt, vscodeDark, bgOverride]}
      readOnly={false}
      basicSetup={{ lineNumbers: true }}
      style={{ fontSize: "12px", border: "none" }}
      autoFocus={false}
    />
  );
}

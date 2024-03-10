"use client";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { EditorState } from "lexical";
import { useEffect, useRef, useState } from "react";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
// import { Editor } from "@lexical/react/LexicalContentEditable.prod";
import Form from "./Form";
import "./styles.css";

function MyOnChangePlugin({
  onChange,
}: {
  onChange: (state: EditorState) => void;
}) {
  // Access the editor through the LexicalComposerContext
  const [editor] = useLexicalComposerContext();

  // Wrap our listener in useEffect to handle the teardown and avoid stale references.
  useEffect(() => {
    // most listeners return a teardown function that can be called to clean them up.
    return editor.registerUpdateListener(({ editorState }) => {
      // call onChange here to pass the latest state up to the parent.
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
}

export default function LexicalEditor() {
  const [input, setInput] = useState("");
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "devlog",
        onError: (e) => console.log("error", e),
      }}
    >
      <div className="editor-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="title"
          type="text"
          required
          className="w-full focus:outline-none p-2"
        />

        <ToolbarPlugin />
        <HistoryPlugin />
        {/* <AutoFocusPlugin /> */}
        {/* <MyOnChangePlugin
          onChange={(state: EditorState) => {
            // console.log("change", JSON.stringify(state));
          }}
        /> */}
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={null}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <Form input={input} />
      </div>
    </LexicalComposer>
  );
}

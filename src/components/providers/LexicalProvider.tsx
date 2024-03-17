import ToolbarPlugin from "@/components/lexical/plugins/ToolbarPlugin"
import "@/components/lexical/styles.css"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import React, { PropsWithChildren } from "react"
// eslint-disable-next-line no-unused-vars
interface Props extends PropsWithChildren {}

export default function LexicalProvider(props: Props) {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "devlog",
        onError: (e) => {
          console.log(`Lexical Error: \t`, e)
        },
      }}
    >
      <div className="editor-container">
        <ToolbarPlugin />
        <HistoryPlugin />

        {/* The children node will have access to editor's state */}
        {props.children}
      </div>
    </LexicalComposer>
  )
}

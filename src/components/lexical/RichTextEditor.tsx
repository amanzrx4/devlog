"use client"
import LexicalProvider from "@/components/providers/LexicalProvider"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { PropsWithChildren } from "react"
import "./styles.css"

interface Props extends PropsWithChildren {}
export type InputState = {
  title: string
  tagIds: string
  categoryId: string
}
export default function RichTextEditor({ children }: Props) {
  return (
    <LexicalProvider>
      <div className="editor-inner">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      {children}
    </LexicalProvider>
  )
}

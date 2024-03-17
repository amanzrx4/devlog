"use client"
import LexicalProvider from "@/components/providers/LexicalProvider"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { PropsWithChildren } from "react"
import "./styles.css"

interface Props extends PropsWithChildren {
  // categories: Category[]
  // tags: Tag[]
  // input: InputState
  // // eslint-disable-next-line no-unused-vars
  // setInput: (args: Partial<InputState>) => void
}
export type InputState = {
  title: string
  tagIds: string
  categoryId: string
}
export default function RichTextEditor({ children }: Props) {
  return (
    <LexicalProvider>
      {/* <div className="editor-container"> */}
      <div className="editor-inner">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={null}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      {children}
      {/* </div> */}
    </LexicalProvider>
  )
}

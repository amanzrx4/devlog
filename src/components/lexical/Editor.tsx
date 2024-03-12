"use client"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { Category, Tag } from "@prisma/client"
import { EditorState } from "lexical"
import { PropsWithChildren, useEffect } from "react"
import ToolbarPlugin from "./plugins/ToolbarPlugin"
import "./styles.css"
// eslint-disable-next-line no-unused-vars
function MyOnChangePlugin({
  onChange,
}: {
  // eslint-disable-next-line no-unused-vars
  onChange: (state: EditorState) => void
}) {
  // Access the editor through the LexicalComposerContext
  const [editor] = useLexicalComposerContext()

  // Wrap our listener in useEffect to handle the teardown and avoid stale references.
  useEffect(() => {
    // most listeners return a teardown function that can be called to clean them up.
    return editor.registerUpdateListener(({ editorState }) => {
      // call onChange here to pass the latest state up to the parent.
      onChange(editorState)
    })
  }, [editor, onChange])
  return null
}

interface Props extends PropsWithChildren {
  categories: Category[]
  tags: Tag[]
  input: InputState
  setInput: (args: Partial<InputState>) => void
}
export type InputState = {
  title: string
  tagIds: string
  categoryId: string
}
export default function LexicalEditor({
  categories,
  tags,
  children,
  setInput,
  input,
}: Props) {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "devlog",
        onError: (e) => console.log("error", e),
      }}
    >
      <div className="editor-container">
        <input
          onChange={(e) => setInput({ title: e.target.value })}
          placeholder="title"
          type="text"
          required
          className="w-full focus:outline-none p-2"
        />

        <select
          name="category"
          className="w-full p-2"
          onChange={(e) => setInput({ categoryId: e.target.value })}
        >
          <option value="">--Please choose a category--</option>

          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.categoryName}
            </option>
          ))}
        </select>

        <select
          name="tags"
          className="w-full p-2"
          onChange={(e) => setInput({ tagIds: e.target.value })}
        >
          <option value="">--Please select some tags--</option>

          {tags.map((t) => (
            <option key={t.id} value={t.id}>
              {t.tagName}
            </option>
          ))}
        </select>

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
        {children}
      </div>
    </LexicalComposer>
  )
}

"use client"

import LexicalEditor, { InputState } from "@/components/lexical/Editor"
import { Category, Tag } from "@prisma/client"
import { useReducer } from "react"
import Form from "./lexical/Form"

interface Props {
  categories: Category[]
  tags: Tag[]
}

export default function EditorComponent({ categories, tags }: Props) {
  const inputState: InputState = {
    title: "",
    tagIds: "",
    categoryId: "",
  }

  const reducer = (prev: InputState, next: Partial<InputState>): InputState => {
    return { ...prev, ...next }
  }

  const [input, setInput] = useReducer(reducer, inputState)
  return (
    <div>
      <LexicalEditor
        input={input}
        setInput={setInput}
        categories={categories}
        tags={tags}
      >
        <Form inputState={input} />
      </LexicalEditor>
    </div>
  )
}

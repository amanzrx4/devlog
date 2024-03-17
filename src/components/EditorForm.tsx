"use client"
import RichTextEditor, { InputState } from "@/components/lexical/RichTextEditor"
import { Category, Tag } from "@prisma/client"
import { useReducer } from "react"
import Form from "./lexical/Form"

interface Props {
  categories: Category[]
  tags: Tag[]
}

export default function EditorForm({ categories, tags }: Props) {
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
      <RichTextEditor>
        <div className="flex flex-col gap-2.5">
          <input
            onChange={(e) => setInput({ title: e.target.value })}
            placeholder="title"
            type="text"
            required
            className="w-full p-2"
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

          <Form inputState={input} className="mt-2.5" />
        </div>
      </RichTextEditor>
    </div>
  )
}

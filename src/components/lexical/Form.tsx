"use client"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { useRouter } from "next/navigation"
import { createPost } from "../../../actions"
import { InputState } from "./RichTextEditor"
import clsx from "clsx"
import React, { ComponentPropsWithoutRef } from "react"

interface Props extends ComponentPropsWithoutRef<"div"> {
  inputState: InputState
}

export default function Form(props: Props) {
  const [editor] = useLexicalComposerContext()
  const { push } = useRouter()

  let { className, inputState, ...rest } = props
  className = clsx("", className)

  const onClick = async () => {
    const content = JSON.stringify(editor.getEditorState().toJSON())
    const { title, categoryId, tagIds } = inputState

    await createPost({
      categoryId,
      content,
      title,
      tagIds: [tagIds],
    })
      .then(() => {
        push("/")
      })
      .catch((e) => {
        console.log("e", e)
      })
  }

  return (
    <div {...rest} className={className}>
      <button
        disabled={!inputState}
        className="bg-gray-400 p-2 py-1 hover:bg-gray-500 disabled:opacity-70"
        onClick={onClick}
      >
        submit
      </button>
    </div>
  )
}

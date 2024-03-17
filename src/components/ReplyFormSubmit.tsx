"use client"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"
import { addReply } from "../../actions"

interface Props extends ComponentPropsWithoutRef<"div"> {
  postId: number
}

export default function ReplyFormSubmit(props: Props) {
  const [editor] = useLexicalComposerContext()
  const content = editor.getEditorState()

  let { className, postId, ...rest } = props
  className = clsx("", className)

  const onClick = async () => {
    const content = JSON.stringify(editor.getEditorState().toJSON())

    await addReply(postId, { content }).catch((e) => {
      console.log("e", e)
    })
  }

  return (
    <div {...rest} className={className}>
      <button
        disabled={!content}
        className="bg-gray-400 p-2 py-1 hover:bg-gray-500 disabled:opacity-70"
        onClick={onClick}
      >
        submit
      </button>
    </div>
  )
}

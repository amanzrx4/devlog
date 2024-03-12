"use client"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { useRouter } from "next/navigation"
import { createPost } from "../../../actions"

import { InputState } from "./Editor"

interface Props {
  inputState: InputState
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function Form(props: Props) {
  const [editor] = useLexicalComposerContext()
  const { push } = useRouter()

  const onClick = async () => {
    const content = JSON.stringify(editor.getEditorState().toJSON())
    const { title, categoryId, tagIds } = props.inputState

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
        // toast("e.message", { duration: 500000000 })
      })
  }

  return (
    <button
      disabled={!props.inputState}
      className="bg-gray-400 p-2 py-1 hover:bg-gray-500 disabled:opacity-70"
      onClick={onClick}
    >
      submit
    </button>
  )
}

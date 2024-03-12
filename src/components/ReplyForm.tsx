"use client"

import { useRef } from "react"
import { addReply } from "../../actions"

interface Props {
  postId: number
}
export default function ReplyForm({ postId }: Props) {
  const ref = useRef<HTMLTextAreaElement | null>(null)
  const onClick = async () => {
    await addReply(postId, {
      content: ref.current?.value!,
    }).catch((e) => {
      console.log("error here", e)
    })
  }
  return (
    <div className="flex items-center gap-4">
      <textarea ref={ref} />
      <button
        className="bg-gray-400 p-2 py-1 hover:bg-gray-500 disabled:opacity-70"
        onClick={onClick}
      >
        submit
      </button>
    </div>
  )
}

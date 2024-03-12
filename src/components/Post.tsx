import useParseLexicalToHtml from "@/hooks/useParseLexicalToHtml"
import ReplyForm from "./ReplyForm"
import Reply from "./Reply"
import { Thread } from "./ThreadsList"
import { fetchRepliesForPost } from "../../actions"

interface Props extends Thread {}

export default async function Post({ title, content: description, id }: Props) {
  const { html } = useParseLexicalToHtml(description)
  const replies = await fetchRepliesForPost(id)
  console.log("repleis", replies)
  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <div>
          <h1 className="font-bold">
            <span className="font-normal">{title}</span>
          </h1>
          <div
            className="inline-block"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center my-8">
        <ReplyForm postId={id} />
      </div>

      <div className="flex items-center justify-center my-8 flex-col gap-2">
        {replies.map((r) => (
          <Reply key={r.id} {...r} />
        ))}
      </div>

      <ReplyForm postId={id} />
    </div>
  )
}

import ReplyFormSubmit from "@/components/ReplyFormSubmit"
import RichTextEditor from "@/components/lexical/RichTextEditor"

interface Props {
  postId: number
}

export default function ReplyFormC(props: Props) {
  return (
    <div>
      <RichTextEditor>
        <ReplyFormSubmit postId={props.postId} />
      </RichTextEditor>
    </div>
  )
}

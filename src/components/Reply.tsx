import useParseLexicalToHtml from "@/hooks/useParseLexicalToHtml"
import { Reply } from "@prisma/client"

interface Props extends Reply {}

export default function Reply(props: Props) {
  const { html } = useParseLexicalToHtml(props.content)
  return (
    <div>
      <h4 dangerouslySetInnerHTML={{ __html: html }}></h4>
    </div>
  )
}

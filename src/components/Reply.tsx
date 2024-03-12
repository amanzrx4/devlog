import { Reply } from "@prisma/client"

interface Props extends Reply {}

export default function Reply(props: Props) {
  return <div>{props.content}</div>
}

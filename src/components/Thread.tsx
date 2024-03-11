import Link from "next/link"
import { Thread } from "./ThreadsList"
type Props = Omit<Thread, "description">

export default function Thread({ title, id }: Props) {
  const href = `/post/${id}`
  return (
    <Link href={href}>
      <div className="bg-sky-200 p-2 my-2 cursor-pointer w-full hover:bg-sky-300">
        <h1 className="font-bold">
          <span className="font-normal">{title}</span>
        </h1>
      </div>
    </Link>
  )
}

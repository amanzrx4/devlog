import useParseLexicalToHtml from "@/hooks/useParseLexicalToHtml"
import { Thread } from "./ThreadsList"

interface Props extends Thread {}

export default function Post({ title, description }: Props) {
  const { html } = useParseLexicalToHtml(description)
  return (
    <div className="flex items-center justify-center my-8">
      <div>
        <h1 className="font-bold">
          <span className="font-normal">{title}</span>
        </h1>
        <div
          className="inline-block"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  )
}

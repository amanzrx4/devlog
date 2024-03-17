import { $generateHtmlFromNodes } from "@lexical/html"
import { createHeadlessEditor } from "@lexical/headless"
import "@/utils/domPollyfill"



export default function useParseLexicalToHtml(lexicalNodesString: string) {
  let html = ""

  /**
   * temporary fix to ensure backward compatibility
   */
  if (!lexicalNodesString.includes("{")) {
    return {
      html: lexicalNodesString,
    }
  }
  const editor = createHeadlessEditor({ editable: false })

  editor.setEditorState(editor.parseEditorState(lexicalNodesString))

  editor.update(() => {
    html = $generateHtmlFromNodes(editor, null)
  })
  return { html }
}

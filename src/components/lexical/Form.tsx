import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { createPost } from "../../../actions";
import { useRouter } from "next/navigation";

interface Props {
  input: string;
}

export default function Form(props: Props) {
  const [editor] = useLexicalComposerContext();
  const { push } = useRouter();

  const onClick = async () => {
    const content = JSON.stringify(editor.getEditorState().toJSON());
    const title = props.input;

    if (!title) return;

    await createPost(title, content)
      .then(() => {
        push("/");
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  return (
    <button
      disabled={!props.input}
      className="bg-gray-400 p-2 py-1 hover:bg-gray-500 disabled:opacity-70"
      onClick={onClick}
    >
      submit
    </button>
  );
}

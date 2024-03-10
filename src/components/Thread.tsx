import Link from "next/link";
import { Thread } from "./ThreadsList";
type Props = Omit<Thread, "description">;

export default function Thread({ title, id }: Props) {
  return (
    <Link href={`/post/${id}`}>
      <h1 className="font-bold">
        <span className="font-normal">{title}</span>
      </h1>
    </Link>
  );
}

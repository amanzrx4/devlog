import { fetchPostsPartial } from "../../actions";
import Thread from "./Thread";

export interface Thread {
  id: number;
  title: string;
  description: string;
}

interface Props {
  threads?: Thread[];
}

export default async function ListThreads(_props: Props) {
  const posts = await fetchPostsPartial();

  return posts.map((t) => <Thread key={t.title} {...t} />);
}

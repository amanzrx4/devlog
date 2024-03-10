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

  return posts.map((t) => (
    <div key={t.title} className="bg-sky-200 p-2 my-2 cursor-pointer">
      <Thread {...t} />
    </div>
  ));
}

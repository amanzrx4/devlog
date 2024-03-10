import React from "react";
import Thread from "./Thread";
import { threads as sampleThreads } from "@/fixtures/threads";
import { fetchPost, fetchPosts, fetchPostsPartial } from "../../actions";
import useParseLexicalToHtml from "@/hooks/useParseLexicalToHtml";

export interface Thread {
  id: number;
  title: string;
  description: string;
}

interface Props {
  threads?: Thread[];
}

export default async function ListThreads({ threads = sampleThreads }: Props) {
  const posts = await fetchPostsPartial();

  return posts.map((t) => (
    <div key={t.title} className="bg-sky-200 p-2 my-2 cursor-pointer">
      <Thread {...t} />
    </div>
  ));
}

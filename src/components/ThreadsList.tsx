import React from "react";
import Thread from "./Thread";
import { threads as sampleThreads } from "@/fixtures/threads";

export interface Thread {
  id: string;
  title: string;
  description: string;
}

interface Props {
  threads?: Thread[];
}

export default function ListThreads({ threads = sampleThreads }: Props) {
  return threads.map((t) => (
    <div key={t.title} className="bg-sky-200 p-2 my-2 cursor-pointer">
      <Thread {...t} />
    </div>
  ));
}

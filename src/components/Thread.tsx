import React from "react";
import { Thread } from "./ThreadsList";

type Props = Thread;

const s = () => {
  const s = {
    sfd: 123,
  };
};
export default function Thread({ description, title }: Props) {
  return (
    <div>
      <h1 className="font-bold">
        title: <span className="font-normal">{title}</span>
      </h1>
      <h1 className="font-bold">
        description: <span className="font-normal">{description}</span>
      </h1>
    </div>
  );
}

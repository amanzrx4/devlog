import { notFound } from "next/navigation";
import { fetchPost } from "../../../../actions";
import PostComp from "@/components/Post";

interface NextQueryUrl<
  P = Record<string, unknown>,
  S = Record<string, unknown>
> {
  params: P;
  searchParams: S;
}

interface Props extends NextQueryUrl<{ id: string }> {}

export default async function Post(props: Props) {
  const postId = parseInt(props.params.id);

  if (isNaN(postId)) {
    return notFound();
  }
  const post = await fetchPost(parseInt(props.params.id));
  if (!post) {
    return notFound();
  }

  return <PostComp {...post} />;
}

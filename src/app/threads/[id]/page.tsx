interface NextQueryUrl<
  P = Record<string, unknown>,
  S = Record<string, unknown>
> {
  params: P;
  searchParams: S;
}

interface Props extends NextQueryUrl<{ id: string }> {}

export default function Thread(props: Props) {
  return <div>thread with id: </div>;
}

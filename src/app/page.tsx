import ThreadsList from "@/components/ThreadsList"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen p-24 w-full">
      <Navbar />
      <ThreadsList />
      <button className="underline">
        <Link href="post/create">create post</Link>
      </button>
    </main>
  )
}

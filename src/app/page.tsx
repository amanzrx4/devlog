import ThreadsList from "@/components/ThreadsList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen p-24 w-full">
      <Navbar />
      <ThreadsList />
    </main>
  );
}

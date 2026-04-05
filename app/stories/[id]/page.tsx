import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryDetailClient from "@/components/StoryPage/StoryDetailClient";
import { stories, getStory } from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((s) => ({ id: String(s.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const story = getStory(Number(id));
  if (!story) return {};
  return {
    title: `${story.title} — Альпклуб МАИ`,
    description: story.excerpt,
  };
}

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const story = getStory(Number(id));
  if (!story) notFound();

  return (
    <>
      <Header />
      <main>
        <StoryDetailClient story={story} />
      </main>
      <Footer />
    </>
  );
}

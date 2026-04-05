import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingDetailClient from "@/components/TrainingPage/TrainingDetailClient";
import { trainings, getTraining } from "@/lib/trainings";

export function generateStaticParams() {
  return trainings.map((t) => ({ id: String(t.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const training = getTraining(Number(id));
  if (!training) return {};
  return {
    title: `${training.title} — Альпклуб МАИ`,
    description: training.description,
  };
}

export default async function TrainingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const training = getTraining(Number(id));
  if (!training) notFound();

  return (
    <>
      <Header />
      <main>
        <TrainingDetailClient training={training} />
      </main>
      <Footer />
    </>
  );
}

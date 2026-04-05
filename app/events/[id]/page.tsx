import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventDetailClient from "@/components/EventPage/EventDetailClient";
import { events } from "@/lib/events";
import { getEventDetail } from "@/lib/eventDetails";

export function generateStaticParams() {
  return events.map((e) => ({ id: String(e.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find((e) => e.id === Number(id));
  if (!event) return {};
  return {
    title: `${event.title} — Альпклуб МАИ`,
    description: event.description,
  };
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find((e) => e.id === Number(id));
  if (!event) notFound();
  const detail = getEventDetail(event.id);

  return (
    <>
      <Header />
      <main>
        <EventDetailClient event={event} detail={detail} />
      </main>
      <Footer />
    </>
  );
}

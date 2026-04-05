import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventsClient from "@/components/EventsPage/EventsClient";

export const metadata = {
  title: "Все мероприятия — Альпклуб МАИ",
  description: "Восхождения, скальные лагеря, ледолазание и треккинг. Выберите своё мероприятие.",
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <EventsClient />
      </main>
      <Footer />
    </>
  );
}

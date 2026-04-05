import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import About from "@/components/About";
import Team from "@/components/Team";
import Training from "@/components/Training";
import Stories from "@/components/Stories";
import JoinBanner from "@/components/JoinBanner";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Events />
        <About />
        <Team />
        <Training />
        <Stories />
        <JoinBanner />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

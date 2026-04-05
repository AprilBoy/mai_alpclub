import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamDetailClient from "@/components/TeamPage/TeamDetailClient";
import { team, getMember } from "@/lib/team";

export function generateStaticParams() {
  return team.map((m) => ({ id: String(m.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = getMember(Number(id));
  if (!member) return {};
  return {
    title: `${member.name} — Альпклуб МАИ`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = getMember(Number(id));
  if (!member) notFound();

  return (
    <>
      <Header />
      <main>
        <TeamDetailClient member={member} />
      </main>
      <Footer />
    </>
  );
}

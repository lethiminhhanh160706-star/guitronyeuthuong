import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Placeholder, Card, meta } from "@/components/site";

export const Route = createFileRoute("/doi-ngu")({
  head: () => meta("Đội ngũ | Trà Sâm Trường Nhân – DBC2026", "Giới thiệu logo, hình ảnh và các thành viên của đội thi DBC2026."),
  component: Team,
});

const members = Array.from({ length: 4 }, (_, i) => i + 1);

function Team() {
  return (
    <>
      <PageHero eyebrow="Đội thi" title="[CẦN BỔ SUNG: Tên đội]" desc="[CẦN BỔ SUNG: Giới thiệu ngắn về đội thi]" />
      <Section title="Logo & hình ảnh đội">
        <div className="grid gap-6 md:grid-cols-3">
          <Placeholder label="[CẦN BỔ SUNG: Logo đội]" className="aspect-square" />
          <Placeholder label="[CẦN BỔ SUNG: Ảnh tập thể đội]" className="aspect-video md:col-span-2 md:aspect-auto" />
        </div>
      </Section>
      <Section title="Thành viên">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((i) => (
            <Card key={i} className="text-center">
              <Placeholder label={`[CẦN BỔ SUNG: Ảnh thành viên ${i}]`} className="mx-auto aspect-square w-32 rounded-full" />
              <h3 className="mt-4 text-xl text-primary">[CẦN BỔ SUNG: Họ và tên]</h3>
              <p className="text-sm font-medium text-accent">[CẦN BỔ SUNG: Vai trò]</p>
              <p className="mt-3 text-sm text-muted-foreground">[CẦN BỔ SUNG: Tiểu sử ngắn]</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

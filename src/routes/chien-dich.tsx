import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import love from "@/assets/campaign-love.jpg";
import { PageHero, Section, Card, meta } from "@/components/site";

export const Route = createFileRoute("/chien-dich")({
  head: () => meta("Chiến dịch Gửi trọn yêu thương | Trà Sâm Trường Nhân", "Ý tưởng, mục tiêu, đối tượng, thông điệp và kế hoạch 8 tuần của chiến dịch Gửi trọn yêu thương."),
  component: Campaign,
});

const weeks = Array.from({ length: 8 }, (_, i) => i + 1);

function Campaign() {
  const [active, setActive] = useState(1);
  return (
    <>
      <PageHero eyebrow="Chiến dịch" title="Gửi trọn yêu thương" desc="[Tóm tắt chiến dịch]" />
      <Section eyebrow="Ý tưởng" title="Ý tưởng chiến dịch">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <p className="text-muted-foreground">[Mô tả ý tưởng chủ đạo (Big Idea) của chiến dịch.]</p>
          <img src={love} alt="Gửi trọn yêu thương" loading="lazy" width={1200} height={912} className="rounded-lg shadow-elegant" />
        </div>
      </Section>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
          {[
            ["Mục tiêu", "[Mục tiêu chiến dịch]"],
            ["Đối tượng mục tiêu", "[Mô tả khách hàng mục tiêu]"],
            ["Thông điệp chính", "[Thông điệp chủ đạo]"],
          ].map(([t, d]) => (
            <Card key={t}>
              <h3 className="text-2xl text-primary">{t}</h3>
              <div className="gold-rule my-3" />
              <p className="text-muted-foreground">{d}</p>
            </Card>
          ))}
        </div>
      </section>
      <Section eyebrow="Lộ trình" title="Kế hoạch triển khai 8 tuần">
        <div className="flex flex-wrap gap-2">
          {weeks.map((w) => (
            <button
              key={w}
              onClick={() => setActive(w)}
              className={`rounded-full border px-4 py-2 text-sm transition ${active === w ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-primary hover:border-gold"}`}
            >
              Tuần {w}
            </button>
          ))}
        </div>
        <Card className="mt-6">
          <p className="text-xs uppercase tracking-widest text-accent">Tuần {active}</p>
          <h3 className="mt-2 text-2xl text-primary">[Giai đoạn / tên hoạt động tuần {active}]</h3>
          <p className="mt-3 text-muted-foreground">[Nội dung, kênh triển khai và KPI tuần {active}]</p>
        </Card>
      </Section>
    </>
  );
}

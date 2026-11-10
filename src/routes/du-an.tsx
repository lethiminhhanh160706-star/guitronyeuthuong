import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Archive,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  Coffee,
  Gift,
  Leaf,
  MapPin,
  Network,
  Package,
  Scale,
  Sprout,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { PageHero, Section, Card, meta } from "@/components/site";
import { Reveal } from "@/components/reveal";
import productPhoto from "@/assets/tra-sam-truong-nhan-hop.jpg.asset.json";
import giftPhoto from "@/assets/tra-sam-truong-nhan-qua-tang.jpg.asset.json";

export const Route = createFileRoute("/du-an")({
  head: () =>
    meta(
      "Dự án Trường Nhân – Trà Sâm | DBC2026",
      "Sâm Ngọc Linh Trường Nhân và sản phẩm Trà Sâm Trường Nhân: trà túi lọc từ 7 nguyên liệu sấy khô, hộp 15 túi lọc, giá niêm yết 390.000 đồng/hộp.",
    ),
  component: Project,
});

type Row = { icon: LucideIcon; label: string; value: string };

export const BRAND_FACTS: Row[] = [
  { icon: BadgeCheck, label: "Thương hiệu", value: "Sâm Ngọc Linh Trường Nhân" },
  { icon: Building2, label: "Đơn vị", value: "Công ty Cổ phần Thương mại Trường Nhân Pharma" },
  { icon: Network, label: "Thuộc hệ sinh thái", value: "Trường Sinh Group" },
  { icon: MapPin, label: "Địa chỉ doanh nghiệp", value: "33A, ngõ 48 phố Nguyễn Chánh, phường Yên Hòa, Hà Nội" },
];

/** Giá niêm yết (đồng/hộp). */
export const PRICE_VND = 390_000;
export const formatPrice = (v: number) => `${String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`;

export const PRODUCT_SPECS: Row[] = [
  { icon: Package, label: "Quy cách", value: "Hộp 15 túi lọc" },
  { icon: Scale, label: "Khối lượng", value: "2g/túi, tổng 30g/hộp" },
  { icon: CalendarClock, label: "Hạn sử dụng", value: "12 tháng" },
  { icon: Leaf, label: "Dạng sản phẩm", value: "Trà túi lọc" },
];

export const INGREDIENTS: { name: string; percent: number }[] = [
  { name: "Táo đỏ", percent: 25 },
  { name: "Lá đinh lăng", percent: 17 },
  { name: "Đẳng sâm", percent: 15 },
  { name: "Cam thảo", percent: 15 },
  { name: "Kỷ tử", percent: 15 },
  { name: "Nhân sâm", percent: 10 },
  { name: "Lá Sâm Ngọc Linh", percent: 3 },
];

export const STEPS = [
  "Cho 01 túi trà vào ly hoặc bình.",
  "Thêm khoảng 300ml nước sôi.",
  "Đậy nắp và ủ trong 5–7 phút.",
  "Thưởng thức.",
];

export const BENEFITS: { no: string; icon: LucideIcon; title: string; desc: string }[] = [
  {
    no: "01",
    icon: Sprout,
    title: "Kết hợp 7 nguyên liệu",
    desc: "Sự kết hợp của 7 loại nguyên liệu sấy khô với tỷ lệ thành phần được công khai rõ ràng, giúp người tiêu dùng dễ dàng tìm hiểu và kiểm tra thông tin sản phẩm.",
  },
  {
    no: "02",
    icon: Timer,
    title: "Tiện lợi trong cách pha",
    desc: "Thiết kế túi lọc nhỏ gọn, chỉ cần khoảng 300ml nước sôi và 5–7 phút hãm trà để chuẩn bị một ly trà.",
  },
  {
    no: "03",
    icon: Gift,
    title: "Món quà gửi trọn yêu thương",
    desc: "Với thiết kế hộp sản phẩm chỉn chu, Trà Sâm Trường Nhân có thể trở thành món quà gửi tặng người thân. Đặc biệt, chiến dịch gắn sản phẩm với thông điệp “7 phút bên cha mẹ” – dành thời gian gọi điện, hỏi thăm và kết nối yêu thương.",
  },
];

function IconBadge({ icon: Icon, className = "" }: { icon: LucideIcon; className?: string }) {
  return (
    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-primary ${className}`}>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

function Project() {
  return (
    <>
      <PageHero
        eyebrow="Dự án"
        title="Trường Nhân – Trà Sâm"
        desc="Sâm Ngọc Linh Trường Nhân và Trà Sâm Trường Nhân – trà túi lọc từ 7 nguyên liệu sấy khô, đồng hành cùng chiến dịch “Gửi trọn yêu thương”."
      />

      {/* 1. Về Trường Nhân */}
      <Section eyebrow="Thương hiệu" title="Về Trường Nhân">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong className="font-semibold text-primary">Sâm Ngọc Linh Trường Nhân</strong> là thương hiệu thuộc
                Công ty Cổ phần Thương mại Trường Nhân Pharma, nằm trong hệ sinh thái Trường Sinh Group.
              </p>
              <p>
                Với định hướng phát triển các sản phẩm từ Sâm Ngọc Linh, Trường Nhân chú trọng minh bạch thông tin sản
                phẩm, thành phần và hồ sơ kiểm nghiệm. Thương hiệu hướng đến việc đưa những sản phẩm từ dược liệu Việt
                đến gần hơn với người tiêu dùng.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-card p-5 shadow-elegant sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Thông tin nhận diện</p>
              <dl className="mt-4 divide-y divide-border">
                {BRAND_FACTS.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 py-3.5 first:pt-0 last:pb-0">
                    <IconBadge icon={icon} className="h-10 w-10" />
                    <div className="min-w-0">
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
                      <dd className="mt-0.5 font-medium text-primary">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-2 -z-10 rounded-2xl border border-gold/40 sm:-inset-3" aria-hidden="true" />
              <img
                src={giftPhoto.url}
                alt="Các hộp Trà Sâm Trường Nhân, một hộp mở để lộ các túi trà bên trong"
                width={644}
                height={690}
                loading="lazy"
                className="aspect-[644/690] w-full rounded-xl object-cover shadow-elegant"
              />
              <figcaption className="mt-4 text-center text-xs text-muted-foreground">
                Bộ sản phẩm Trà Sâm Trường Nhân
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* 2. Sản phẩm */}
      <section className="bg-secondary">
        <Section eyebrow="Sản phẩm" title="Trà Sâm Trường Nhân">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
            <Reveal>
              <figure className="mx-auto w-full max-w-[300px] overflow-hidden sm:max-w-sm rounded-xl border border-gold/40 bg-card p-3 shadow-elegant lg:sticky lg:top-24 lg:max-w-none">
                <img
                  src={productPhoto.url}
                  alt="Hộp Trà Sâm Trường Nhân màu xanh mint, hộp mở chứa các túi lọc"
                  width={552}
                  height={938}
                  loading="lazy"
                  className="aspect-[552/938] w-full rounded-lg object-contain"
                />
              </figure>
            </Reveal>

            <div className="flex flex-col gap-8">
              <Reveal>
                <p className="leading-relaxed text-muted-foreground">
                  Trà Sâm Trường Nhân là sản phẩm trà túi lọc được phối hợp từ 7 nguyên liệu sấy khô. Thiết kế túi lọc
                  tiện lợi, phù hợp với cách pha trà đơn giản tại nhà hoặc nơi làm việc.
                </p>
                <div className="mt-5 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-lg bg-gradient-forest px-5 py-3 text-forest-foreground">
                  <span className="text-xs uppercase tracking-[0.25em] text-gold-soft">Giá niêm yết</span>
                  <span className="font-display text-3xl lining-nums text-gold">{formatPrice(PRICE_VND)}</span>
                  <span className="text-sm opacity-80">/ hộp</span>
                </div>
              </Reveal>

              <Reveal>
                <h3 className="text-xl text-primary">Thông tin sản phẩm</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {PRODUCT_SPECS.map(({ icon, label, value }) => (
                    <div key={label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                      <IconBadge icon={icon} />
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                        <p className="font-medium text-primary">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <Card>
                  <div className="flex items-center gap-3">
                    <IconBadge icon={Coffee} />
                    <h3 className="text-xl text-primary">Hướng dẫn sử dụng</h3>
                  </div>
                  <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                    {STEPS.map((step, i) => (
                      <li key={step} className="flex items-center gap-3 rounded-lg border border-border bg-background/60 p-3.5">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                            i === STEPS.length - 1 ? "bg-gold text-primary" : "bg-leaf text-leaf-foreground"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="text-sm text-primary">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 flex items-start gap-3 border-t border-border pt-4 text-sm text-muted-foreground">
                    <Archive className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <p>Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.</p>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-10">
            <Card>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <IconBadge icon={Sprout} />
                  <h3 className="text-xl text-primary">Thành phần</h3>
                </div>
                <p className="text-sm text-muted-foreground">7 nguyên liệu sấy khô · tổng 100%</p>
              </div>
              <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
                {INGREDIENTS.map(({ name, percent }) => (
                  <li key={name}>
                    <div className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="font-medium text-primary">{name}</span>
                      <span className="font-semibold tabular-nums text-leaf">{percent}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-mint" aria-hidden="true">
                      <div className="h-full rounded-full bg-leaf" style={{ width: `${(percent / 25) * 100}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </Section>
      </section>

      {/* 3. Lợi ích */}
      <Section eyebrow="Giá trị" title="Lợi ích sản phẩm">
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map(({ no, icon: Icon, title, desc }, i) => (
            <Reveal key={no} delay={i * 100} className="h-full">
              <Card className="group h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-display text-4xl lining-nums text-gold">{no}</p>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 text-xl text-primary">{title}</h3>
                <div className="gold-rule mt-3" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-forest text-forest-foreground">
        <Reveal className="mx-auto max-w-3xl px-4 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Từ một tách trà đến thông điệp chiến dịch</p>
          <p className="mt-6 font-display text-2xl italic leading-relaxed text-balance md:text-3xl">
            “Hãm 1 túi trà trong 5–7 phút – và dành <span className="text-gold">7 phút bên cha mẹ</span>.”
          </p>
          <Link
            to="/chien-dich"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2.5 text-sm text-gold-soft transition-colors hover:bg-gold hover:text-primary"
          >
            Xem chiến dịch “Gửi trọn yêu thương” <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}

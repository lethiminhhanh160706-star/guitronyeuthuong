import { Link } from "@tanstack/react-router";
import { useState, type ComponentType, type ReactNode } from "react";
import { Menu, X, Leaf, Facebook, Instagram } from "lucide-react";

export const NAV = [
  { to: "/", label: "Trang chủ" },
  { to: "/doi-ngu", label: "Đội ngũ" },
  { to: "/du-an", label: "Dự án" },
  { to: "/chien-dich", label: "Chiến dịch" },
  { to: "/hoat-dong", label: "Hoạt động" },
  { to: "/lien-he", label: "Liên hệ" },
] as const;

export const SOCIALS = [
  { label: "Facebook", href: "#", note: "[CẦN BỔ SUNG: Link Facebook]" },
  { label: "TikTok", href: "#", note: "[CẦN BỔ SUNG: Link TikTok]" },
  { label: "Instagram", href: "#", note: "[CẦN BỔ SUNG: Link Instagram]" },
];

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

// Links verified live on 2026-11-09 (Facebook, Instagram, TikTok).
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Facebook",
    handle: "Nhật Ký Trà Sâm Trường Nhân",
    href: "https://www.facebook.com/share/1CLqd7xkED/?mibextid=wwXIfr",
    icon: Facebook,
  },
  {
    label: "Instagram",
    handle: "RUBY TEAM (@rubyteam.dbc2026)",
    href: "https://www.instagram.com/rubyteam.dbc2026?xtok=ZjZyZW1ha3dxYm50&utm_source=qr",
    icon: Instagram,
  },
  {
    label: "TikTok",
    handle: "RUBY - DBC2026 (@ruby.dbc2026)",
    href: "https://www.tiktok.com/@ruby.dbc2026?_r=1&_t=ZS-9BErLuYgoBJ",
    icon: TikTokIcon,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-gold">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold text-primary">Đội RUBY</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-sm font-semibold text-primary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Mở menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-border bg-background px-4 py-2 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-gradient-forest text-forest-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-gold">Trường Nhân – Trà Sâm</p>
          <p className="mt-2 text-sm opacity-80">Chiến dịch “Gửi trọn yêu thương” · DBC2026</p>
        </div>
        <div className="text-sm opacity-80">
          <p>Email: [CẦN BỔ SUNG: Email đội]</p>
          <p>Điện thoại: [CẦN BỔ SUNG: Số điện thoại]</p>
        </div>
        <div className="flex gap-4 text-sm">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="text-gold-soft hover:text-gold">{s.label}</a>
          ))}
        </div>
      </div>
      <p className="border-t border-gold/20 py-4 text-center text-xs opacity-60">
        © 2026 Đội RUBY – Cuộc thi Digital Marketing DBC2026
      </p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="bg-gradient-forest text-forest-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-5xl">{title}</h1>
        <div className="gold-rule mx-auto mt-6" />
        {desc && <p className="mx-auto mt-6 max-w-2xl opacity-80">{desc}</p>}
      </div>
    </section>
  );
}

export function Section({ title, eyebrow, children }: { title: string; eyebrow?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl text-primary md:text-4xl">{title}</h2>
      <div className="gold-rule mt-4" />
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-lg border-2 border-dashed border-gold/50 bg-muted text-center text-sm text-muted-foreground ${className}`}>
      {label}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-border bg-card p-6 shadow-elegant ${className}`}>{children}</div>;
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Footer } from "@/components/site";

afterEach(cleanup);

describe("Footer social navigation", () => {
  const links = [
    ["Facebook", "https://www.facebook.com/share/1CLqd7xkED/?mibextid=wwXIfr"],
    ["Instagram", "https://www.instagram.com/rubyteam.dbc2026?xtok=ZjZyZW1ha3dxYm50&utm_source=qr"],
    ["TikTok", "https://www.tiktok.com/@ruby.dbc2026?_r=1&_t=ZS-9BErLuYgoBJ"],
  ];

  it.each(links)("%s preserves the verified URL and native new-tab navigation", (name, href) => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: new RegExp(name) });
    expect(link.tagName).toBe("A");
    expect(link.getAttribute("href")).toBe(href);
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    expect(link.getAttribute("referrerpolicy")).toBe("no-referrer");
    const icon = link.querySelector("svg");
    const label = screen.getByText(name, { exact: true });
    expect(icon).not.toBeNull();
    if (!icon) throw new Error("Missing social icon");
    expect(fireEvent.click(icon)).toBe(true);
    expect(fireEvent.click(label)).toBe(true);
  });
});
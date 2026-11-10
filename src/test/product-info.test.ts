import { describe, expect, it } from "vitest";

import { BENEFITS, BRAND_FACTS, INGREDIENTS, PRICE_VND, PRODUCT_SPECS, STEPS, formatPrice } from "@/routes/du-an";

const spec = (label: string) => PRODUCT_SPECS.find((s) => s.label === label)?.value;

describe("Dự án – Trà Sâm Trường Nhân", () => {
  it("giá niêm yết là 390.000 đồng/hộp", () => {
    expect(PRICE_VND).toBe(390_000);
    expect(formatPrice(PRICE_VND)).toBe("390.000đ");
  });

  it("quy cách hộp 15 túi lọc, 2g/túi, tổng 30g, hạn dùng 12 tháng", () => {
    expect(spec("Quy cách")).toBe("Hộp 15 túi lọc");
    expect(spec("Khối lượng")).toBe("2g/túi, tổng 30g/hộp");
    expect(spec("Hạn sử dụng")).toBe("12 tháng");
  });

  it("đúng 7 thành phần với tỷ lệ đã công bố, tổng 100%", () => {
    expect(INGREDIENTS).toEqual([
      { name: "Táo đỏ", percent: 25 },
      { name: "Lá đinh lăng", percent: 17 },
      { name: "Đẳng sâm", percent: 15 },
      { name: "Cam thảo", percent: 15 },
      { name: "Kỷ tử", percent: 15 },
      { name: "Nhân sâm", percent: 10 },
      { name: "Lá Sâm Ngọc Linh", percent: 3 },
    ]);
    expect(INGREDIENTS.reduce((s, i) => s + i.percent, 0)).toBe(100);
  });

  it("hướng dẫn pha gồm 4 bước, 300ml nước sôi, ủ 5–7 phút", () => {
    expect(STEPS).toHaveLength(4);
    expect(STEPS[1]).toContain("300ml");
    expect(STEPS[2]).toContain("5–7 phút");
  });

  it("đúng 3 lợi ích, không có công dụng sức khỏe chưa công bố", () => {
    expect(BENEFITS.map((b) => b.title)).toEqual([
      "Kết hợp 7 nguyên liệu",
      "Tiện lợi trong cách pha",
      "Món quà gửi trọn yêu thương",
    ]);
    const text = BENEFITS.map((b) => b.desc).join(" ").toLowerCase();
    for (const banned of ["chữa", "phòng bệnh", "miễn dịch", "giấc ngủ"]) {
      expect(text).not.toContain(banned);
    }
  });

  it("thông tin nhận diện thương hiệu đúng đơn vị và địa chỉ", () => {
    expect(BRAND_FACTS.map((f) => f.value)).toEqual([
      "Sâm Ngọc Linh Trường Nhân",
      "Công ty Cổ phần Thương mại Trường Nhân Pharma",
      "Trường Sinh Group",
      "33A, ngõ 48 phố Nguyễn Chánh, phường Yên Hòa, Hà Nội",
    ]);
  });
});

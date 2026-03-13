export interface MobileViewportCase {
  name: "mobile-360" | "mobile-390" | "mobile-430";
  width: number;
  height: number;
}

export const mobileViewports: MobileViewportCase[] = [
  { name: "mobile-360", width: 360, height: 800 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-430", width: 430, height: 932 }
];

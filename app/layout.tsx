import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";

import { DesktopHeader } from "@/components/layout/desktop-header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { MobileTopAppBar } from "@/components/layout/mobile-top-app-bar";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meetgong.kr"),
  title: {
    default: "믿공 | 인테리어 견적을 투명하게",
    template: "%s | 믿공"
  },
  description:
    "인테리어 견적, 더 이상 추측하지 마세요. 믿공은 공정 세분화, 자재 수량 산출, 노무비 투명화를 통해 합리적인 원가 비교 견적을 제공합니다.",
  applicationName: "믿공",
  keywords: [
    "믿공",
    "meetgong",
    "인테리어 견적",
    "리모델링 견적",
    "원가 견적",
    "인테리어 비교 견적",
    "아파트 인테리어",
    "공사비 절감",
    "인테리어 상담"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "믿공 | 인테리어 견적을 투명하게",
    description:
      "같은 평수여도 크게 달라지는 인테리어 견적, 믿공의 기준 기반 원가 분석으로 합리적으로 비교하세요.",
    url: "https://meetgong.kr",
    siteName: "믿공 MeetGong",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "믿공 인테리어 투명 견적 서비스"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "믿공 | 인테리어 견적을 투명하게",
    description: "인테리어 견적의 불안을 확신으로 바꾸는 데이터 기반 비교 견적 서비스",
    images: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"]
  },
  category: "business"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} antialiased`}>
        <div className="min-h-screen bg-background">
          <MobileTopAppBar />
          <DesktopHeader />
          <main className="mobile-main-safe md:pb-0 md:pt-0">{children}</main>
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}

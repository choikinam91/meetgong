import type { Metadata } from "next";

import { HeroCtaSection } from "@/components/sections/hero-cta";
import { ImpactMetricsSection } from "@/components/sections/impact-metrics";
import { CompanyIntroSection } from "@/components/sections/company-intro";
import { ProcessStepsSection } from "@/components/sections/process-steps";
import { ContactUsSection } from "@/components/sections/contact-us";

export const metadata: Metadata = {
  title: "투명 견적 랜딩",
  description:
    "인테리어 원가 견적의 기준을 제시하는 믿공 랜딩 페이지. CTA, 성과 지표, 회사 소개, 프로세스, 상담 문의를 한 번에 확인하세요."
};

export default function HomePage() {
  return (
    <>
      <HeroCtaSection />
      <ImpactMetricsSection />
      <CompanyIntroSection />
      <ProcessStepsSection />
      <ContactUsSection />
    </>
  );
}

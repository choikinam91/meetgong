import type { Metadata } from "next";

import { FounderStorySection } from "@/components/sections/founder-story";

export const metadata: Metadata = {
  title: "소개",
  description:
    "인테리어 사기 피해 경험에서 출발해 200건+ 현장 데이터를 쌓아 만든 믿공의 창업 스토리와 미션을 소개합니다."
};

export default function AboutPage() {
  return <FounderStorySection />;
}

import type { Metadata } from "next";

import { RegionalReviewSlider } from "@/components/reviews/regional-review-slider";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { regions, reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "전국 리뷰",
  description:
    "서울부터 제주까지 믿공 실제 고객 리뷰를 지역별 슬라이드로 확인하세요. 제목/내용/별점 기반 30건 후기를 제공합니다."
};

export default function ReviewsPage() {
  return (
    <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <FadeIn>
          <SectionTitle
            badge="NATIONWIDE REVIEWS"
            title="대한민국 전국에서 검증된 믿공 후기"
            description="지역별 슬라이드로 고객 경험을 확인하세요. 실제 요청처럼 제목/내용/별점 형식으로 구성했습니다."
            titleClassName="max-w-[18ch] leading-[1.25] sm:max-w-none"
            descriptionClassName="max-w-[38ch] sm:max-w-2xl"
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 via-background to-secondary/40">
            <CardContent className="grid gap-4 p-6 text-sm text-muted-foreground sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">진행 지역</p>
                <p className="mt-1 text-xl font-semibold text-foreground">{regions.length}개 권역</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">리뷰 수</p>
                <p className="mt-1 text-xl font-semibold text-foreground">{reviews.length}건</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">평균 평점</p>
                <p className="mt-1 text-xl font-semibold text-foreground">
                  {(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)} / 5.0
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <RegionalReviewSlider reviews={reviews} regions={regions} />
      </div>
    </section>
  );
}

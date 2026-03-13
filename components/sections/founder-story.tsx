import Image from "next/image";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { Card, CardContent } from "@/components/ui/card";

export function FounderStorySection() {
  return (
    <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <SectionTitle
            badge="FOUNDER STORY"
            title="사기 피해를 겪은 당사자가 만든 인테리어 기준 플랫폼"
            description="불투명한 견적에 속아 손해를 본 경험에서 출발해, 같은 피해를 막는 것이 믿공의 시작이었습니다."
            titleClassName="max-w-[20ch] leading-[1.25] sm:max-w-none"
            descriptionClassName="max-w-[38ch] sm:max-w-2xl"
          />

          <div className="mt-6 max-w-[42ch] space-y-4 text-sm leading-relaxed text-muted-foreground sm:max-w-none sm:text-base">
            <p>
              저는 실제로 인테리어 사기를 당했습니다. 계약 당시에는 몰랐던 추가 비용과 모호한 항목 때문에 큰 손해를 봤고,
              <br className="hidden sm:block" />
              그때 "소비자가 알 수 있는 기준"이 반드시 필요하다는 걸 절실히 느꼈습니다.
            </p>
            <p>
              이후 인테리어를 제대로 공부했고, 현장에서 200건 이상의 공사를 직접 진행하며 데이터를 쌓았습니다.
              <br className="hidden sm:block" />
              무엇이 합리적인 단가인지, 어떤 옵션이 필수인지, 어디서 과금이 부풀려지는지를 검증해 왔습니다.
            </p>
            <p className="font-semibold text-foreground">
              저와 같은 피해자가 더 이상 생기지 않도록. 그래서 믿공은 오늘도 견적을 투명하게 만듭니다.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card className="overflow-hidden">
            <CardContent className="space-y-4 p-0">
              <Image
                src="https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80"
                alt="인테리어 현장 실측과 도면 작업"
                width={1200}
                height={800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 45vw"
                className="h-[280px] w-full object-cover"
              />
              <div className="space-y-3 p-6">
                <h3 className="text-lg font-semibold text-foreground">왜 믿공인가</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 피해 경험 기반으로 만든 검증 체크리스트</li>
                  <li>• 200건+ 현장 데이터 기반의 단가 판단</li>
                  <li>• 고객이 직접 이해하고 결정하도록 돕는 구조</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

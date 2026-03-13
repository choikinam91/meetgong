import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CompanyIntroSection() {
  return (
    <section className="bg-gradient-to-b from-sky-50/60 to-transparent px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
        <FadeIn>
          <SectionTitle
            badge="ABOUT MEETGONG"
            title="견적을 전달하는 회사가 아니라, 기준을 설계하는 팀"
            description="믿공은 공사 범위와 원가 구조를 데이터로 정리해 고객이 스스로 판단할 수 있게 만듭니다."
          />
          <div className="mt-6 flex gap-3">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/about">창업 스토리 보기</Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link href="#contact">상담 바로가기</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card className="overflow-hidden">
            <CardContent className="grid gap-5 p-0 sm:grid-cols-2">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
                alt="미니멀 인테리어 공간"
                width={1000}
                height={900}
                className="h-full min-h-[220px] w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  견적이 불투명할수록 고객은 불안해집니다. 믿공은 같은 공사라도 왜 가격이 달라지는지, 어디에서 비용을 줄일 수 있는지,
                  어디는 절대 줄이면 안 되는지를 명확하게 설명합니다.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• 공정 단위 체크리스트 기반 비교</li>
                  <li>• 자재 등급/수량 객관화</li>
                  <li>• 인력 투입 기준의 노무비 산정</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

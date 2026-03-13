import { PhoneCall } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactUsSection() {
  return (
    <section id="contact" className="px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <SectionTitle
            badge="CONTACT"
            title="인테리어 원가가 궁금하시다면 지금 바로 상담하세요"
            description="예산, 평수, 희망 공정만 알려주시면 비교 가능한 기준 견적 틀을 먼저 제안드립니다."
          />
          <Card className="mt-6 bg-primary text-primary-foreground">
            <CardContent className="space-y-3 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <PhoneCall className="h-5 w-5" />
              </div>
              <p className="text-sm">빠른 문의</p>
              <p className="text-xl font-bold">1668-0000</p>
              <p className="text-xs text-primary-foreground/80">평일 09:00 ~ 19:00 | 토요일 10:00 ~ 16:00</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.12}>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="이름" aria-label="이름" />
                <Input placeholder="연락처" aria-label="연락처" />
              </div>
              <Input placeholder="공사 지역 (예: 서울 강동구)" aria-label="공사 지역" />
              <Input placeholder="평형 / 주거 형태 (예: 32평 아파트)" aria-label="평형" />
              <Textarea placeholder="희망 공정, 예산, 일정 등 요청사항을 남겨주세요." aria-label="요청사항" />
              <Button className="w-full rounded-full" size="lg">
                무료 상담 요청 보내기
              </Button>
              <p className="text-xs text-muted-foreground">제출 시 개인정보 처리방침에 동의한 것으로 간주됩니다.</p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

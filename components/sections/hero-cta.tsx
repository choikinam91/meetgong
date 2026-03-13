import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    alt: "현대적인 주방 인테리어"
  },
  {
    src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
    alt: "밝은 톤의 거실 인테리어"
  }
];

export function HeroCtaSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <FadeIn className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            인테리어 견적, 이제는 기준으로 비교하세요
          </span>
          <div className="space-y-4">
            <h1
              data-testid="hero-title"
              className="max-w-[17ch] text-3xl font-bold leading-[1.22] text-foreground sm:max-w-none sm:text-4xl lg:text-5xl"
            >
              설렘을 지키는 인테리어 원가 견적
              <span className="block text-primary">
                믿공이 투명하게
                <br className="hidden sm:block" />
                만듭니다
              </span>
            </h1>
            <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground sm:max-w-xl sm:text-base">
              같은 32평 도배인데도 200만 원부터 500만 원까지 달라지는 이유를 공정, 자재, 인건비 기준으로 해부합니다.
              추측이 아닌 데이터 기반 비교로 과도한 지출을 줄이세요.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact" className="gap-2">
                1:1 무료 상담 신청
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/reviews">실제 후기 보기</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="grid grid-cols-6 gap-3 sm:gap-4">
          <div className="col-span-6 overflow-hidden rounded-3xl border border-border/60 bg-white">
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              width={1200}
              height={760}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
              className="h-[260px] w-full object-cover sm:h-[340px]"
              priority
            />
          </div>
          <div className="col-span-3 overflow-hidden rounded-2xl border border-border/60 bg-white">
            <Image
              src={heroImages[1].src}
              alt={heroImages[1].alt}
              width={600}
              height={460}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw"
              className="h-[140px] w-full object-cover sm:h-[180px]"
            />
          </div>
          <div className="col-span-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">핵심 메시지</p>
            <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">"가격"이 아니라 "기준"을 비교할 때, 인테리어는 확신이 됩니다.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { BarChart3, Coins, Landmark, Shield } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { impactMetrics } from "@/lib/metrics";

const icons = [BarChart3, Coins, Landmark, Shield];

export function ImpactMetricsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <FadeIn>
          <SectionTitle
            badge="IMPACT"
            title="숫자로 검증된 믿공의 견적 신뢰도"
            description="막연한 감이 아닌 실제 상담/검증 데이터를 공개합니다."
            align="center"
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {impactMetrics.map((metric, index) => {
            const Icon = icons[index % icons.length];
            return (
              <FadeIn key={metric.label} delay={index * 0.05}>
                <Card className="h-full bg-gradient-to-b from-white to-sky-50/30">
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{metric.label}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{metric.hint}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { processSteps } from "@/lib/metrics";

export function ProcessStepsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <FadeIn>
          <SectionTitle
            badge="PROCESS"
            title="믿공 원가 견적 프로세스"
            description="공사 전 불확실성을 없애기 위한 4단계 검증 흐름입니다."
          />
        </FadeIn>

        <div className="grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.06}>
              <Card className="relative h-full">
                <CardContent className="space-y-4 p-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  {index < processSteps.length - 1 ? (
                    <ArrowRight className="absolute -right-3 top-8 hidden h-4 w-4 text-primary lg:block" />
                  ) : null}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

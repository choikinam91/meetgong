"use client";

import { useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReviewItem } from "@/lib/reviews";
import { ReviewCard } from "@/components/reviews/review-card";

interface RegionalReviewSliderProps {
  reviews: ReviewItem[];
  regions: string[];
}

export function RegionalReviewSlider({ reviews, regions }: RegionalReviewSliderProps) {
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, dragFree: true });

  const filteredReviews = useMemo(
    () => reviews.filter((review) => review.region === activeRegion),
    [reviews, activeRegion]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const activeCount = filteredReviews.length;

  const handleSelectRegion = (region: string) => {
    setActiveRegion(region);
    requestAnimationFrame(() => {
      emblaApi?.scrollTo(0);
    });
  };

  return (
    <div className="space-y-5" data-testid="regional-review-slider">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-foreground" data-testid="active-region-label">
          현재 지역: <span className="text-primary">{activeRegion}</span>
        </p>
        <p className="text-xs text-muted-foreground">{activeCount}개의 후기</p>
      </div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {regions.map((region) => (
          <button
            key={region}
            type="button"
            onClick={() => handleSelectRegion(region)}
            data-testid={`region-tab-${region}`}
            className={cn(
              "whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
              activeRegion === region
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:bg-muted"
            )}
          >
            {region}
          </button>
        ))}
      </div>

      <motion.div
        key={activeRegion}
        data-testid="region-panel"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="space-y-4"
      >
        <div className="overflow-hidden" ref={emblaRef} data-testid="reviews-viewport">
          <div className="flex gap-4" data-testid="reviews-track">
            {filteredReviews.map((review) => (
              <div key={review.id} className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_56%] lg:flex-[0_0_38%]">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="이전 리뷰">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext} aria-label="다음 리뷰">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

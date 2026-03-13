import { MapPin, Star } from "lucide-react";

import type { ReviewItem } from "@/lib/reviews";

interface ReviewCardProps {
  review: ReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="h-full rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
      <div className="mb-3 flex items-center justify-between">
        <p className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {review.region}
        </p>
        <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${review.rating}점`}>
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
      <h3 className="text-base font-semibold text-foreground">{review.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.content}</p>
    </article>
  );
}

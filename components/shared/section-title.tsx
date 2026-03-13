import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionTitle({
  badge,
  title,
  description,
  align = "left",
  action,
  titleClassName,
  descriptionClassName
}: SectionTitleProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center") }>
      {badge ? (
        <Badge variant="secondary" className="rounded-full bg-primary/10 px-3 py-1 text-primary">
          {badge}
        </Badge>
      ) : null}
      <div className="space-y-2">
        <h2 className={cn("text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl", titleClassName)}>
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
              align === "center" && "mx-auto",
              descriptionClassName
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

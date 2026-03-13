"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircleMore } from "lucide-react";

import { cn } from "@/lib/utils";

const titleByPathname: Record<string, string> = {
  "/": "투명 견적 홈",
  "/about": "믿공 소개",
  "/reviews": "전국 리뷰"
};

export function MobileTopAppBar() {
  const pathname = usePathname();
  const pageTitle = titleByPathname[pathname] ?? "믿공";

  return (
    <header className="mobile-top-app-bar md:hidden" data-testid="mobile-top-app-bar">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-bold tracking-tight text-foreground">
          믿공 MeetGong
        </Link>

        <p className="max-w-[40vw] truncate text-xs font-semibold text-muted-foreground">{pageTitle}</p>

        <Link
          href="/#contact"
          className={cn(
            "inline-flex min-h-10 items-center gap-1 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <MessageCircleMore className="h-3.5 w-3.5" />
          상담
        </Link>
      </div>
    </header>
  );
}

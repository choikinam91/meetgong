"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Home, MessageSquareMore } from "lucide-react";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "홈", icon: Home },
  { href: "/about", label: "소개", icon: Building2 },
  { href: "/reviews", label: "리뷰", icon: MessageSquareMore }
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="mobile-bottom-nav fixed inset-x-4 z-50 rounded-2xl border border-border/70 bg-background/95 p-2 shadow-soft backdrop-blur md:hidden"
      data-testid="mobile-bottom-nav"
    >
      <ul className="grid grid-cols-3 gap-1">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={cn(
                  "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-xs font-semibold transition-all",
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

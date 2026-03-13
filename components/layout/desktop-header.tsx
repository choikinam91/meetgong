import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "랜딩" },
  { href: "/about", label: "소개" },
  { href: "/reviews", label: "리뷰" }
];

export function DesktopHeader() {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-border/70 bg-background/90 backdrop-blur md:block">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">믿</span>
          <span>믿공 MeetGong</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <Link href="/#contact">무료 상담 받기</Link>
        </Button>
      </div>
    </header>
  );
}

# MeetGong Website

믿공(MeetGong)의 인테리어 원가 견적 투명화 서비스를 소개하는 Next.js 웹사이트입니다.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui 스타일 컴포넌트
- Framer Motion
- Embla Carousel (지역 리뷰 슬라이더)
- Playwright (모바일 회귀 테스트)

## Pages
- `/` 랜딩 페이지 (CTA, 임팩트 매트릭스, 회사 소개, 프로세스, Contact)
- `/about` 소개 페이지 (창업 스토리)
- `/reviews` 리뷰 페이지 (지역별 슬라이더, 30건 하드코딩 리뷰)

## Getting Started

```bash
npm install
npm run dev
```

## Testing

```bash
# unit
npm run test

# mobile e2e (360 / 390 / 430 viewport)
npm run test:e2e
```

## Notes
- 이미지 소스는 Unsplash 원격 URL을 사용합니다.
- 모바일은 상단 앱바 + 하단 탭바 조합의 앱형 UX를 제공합니다.

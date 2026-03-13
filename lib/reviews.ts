export type Rating = 1 | 2 | 3 | 4 | 5;

export interface ReviewItem {
  id: string;
  region: string;
  title: string;
  content: string;
  rating: Rating;
}

export const reviews: ReviewItem[] = [
  { id: "r-001", region: "서울", title: "너무 좋았어요.", content: "금액이 너무 막막했는데 사장님으로 인해서 내돈으로 할 수 있을까 했던 공사들도 모두 진행할 정도로 이득봤습니다. 감사합니다.", rating: 5 },
  { id: "r-002", region: "서울", title: "견적 비교가 명확했어요", content: "같은 도배 공사인데 왜 가격이 다른지 항목별로 보여주셔서 불안함이 사라졌습니다.", rating: 5 },
  { id: "r-003", region: "경기", title: "처음으로 기준을 알게 됐어요", content: "옵션이 어떻게 가격에 반영되는지 이해하고 계약해서 후회가 없었습니다.", rating: 5 },
  { id: "r-004", region: "경기", title: "합리적인 선택을 했습니다", content: "무조건 싼 업체가 아니라 맞는 업체를 고를 수 있게 도와주셨어요.", rating: 5 },
  { id: "r-005", region: "인천", title: "비용 구조가 투명합니다", content: "자재 수량과 인건비가 수치로 보이니까 가족 설득도 쉬웠어요.", rating: 5 },
  { id: "r-006", region: "인천", title: "상담이 꼼꼼해요", content: "현장 상황에 맞게 범위를 세분화해서 과한 공사를 줄일 수 있었습니다.", rating: 4 },
  { id: "r-007", region: "부산", title: "예산 안에서 리모델링 성공", content: "처음 견적 대비 예상보다 크게 절약했습니다. 과정도 친절하게 설명해 주세요.", rating: 5 },
  { id: "r-008", region: "부산", title: "지역 업체 비교가 큰 도움", content: "부산 지역 업체별 강약점을 정리해주셔서 선택이 쉬웠습니다.", rating: 5 },
  { id: "r-009", region: "대구", title: "신뢰가 생겼습니다", content: "견적서에서 모호했던 항목을 하나씩 잡아주셔서 계약 전에 정리가 됐어요.", rating: 5 },
  { id: "r-010", region: "대구", title: "빠르고 정확한 견적", content: "일정이 촉박했는데도 공정별로 깔끔하게 정리된 견적을 받았습니다.", rating: 4 },
  { id: "r-011", region: "대전", title: "거품이 빠진 견적", content: "불필요한 옵션을 빼고 꼭 필요한 공사만 진행해 만족도 높습니다.", rating: 5 },
  { id: "r-012", region: "대전", title: "설명이 친절했습니다", content: "인테리어를 모르는 사람도 이해할 수 있게 쉽게 풀어주셨어요.", rating: 5 },
  { id: "r-013", region: "광주", title: "비교의 기준이 생겼어요", content: "같은 32평인데 가격 차이 나는 이유를 이제는 설명할 수 있습니다.", rating: 5 },
  { id: "r-014", region: "광주", title: "투명한 비용 관리", content: "중간 추가비용 걱정이 줄어들어 일정 관리까지 안정적이었어요.", rating: 4 },
  { id: "r-015", region: "울산", title: "노무비 계산이 인상적", content: "인력 투입 근거가 명확해 공사 진행 중 신뢰가 높았습니다.", rating: 5 },
  { id: "r-016", region: "울산", title: "실무 경험이 느껴져요", content: "현장 중심으로 현실적인 조언을 주셔서 시행착오를 줄였습니다.", rating: 5 },
  { id: "r-017", region: "세종", title: "첫 인테리어, 안심하고 진행", content: "무엇을 먼저 결정해야 하는지 단계별로 잡아주셔서 편했습니다.", rating: 5 },
  { id: "r-018", region: "세종", title: "프로세스가 체계적입니다", content: "공정 분리 방식이 명확해서 담당자들과 커뮤니케이션이 쉬웠어요.", rating: 4 },
  { id: "r-019", region: "강원", title: "원거리인데도 만족", content: "지역 여건 반영해서 자재/인건비 산정해주셔서 정확도가 높았습니다.", rating: 5 },
  { id: "r-020", region: "강원", title: "불안함이 기대감으로", content: "공사 전 스트레스가 컸는데 기준표 덕분에 마음이 놓였어요.", rating: 5 },
  { id: "r-021", region: "충북", title: "예산 컨트롤이 됩니다", content: "선택 옵션별 금액 차이가 보여서 우선순위 조정이 가능했습니다.", rating: 5 },
  { id: "r-022", region: "충북", title: "재상담 의사 100%", content: "다음 집 공사도 믿공으로 진행하려고 합니다.", rating: 5 },
  { id: "r-023", region: "충남", title: "빠른 피드백이 강점", content: "질문이 많았는데도 하나씩 근거를 들어 답변해주셨어요.", rating: 4 },
  { id: "r-024", region: "충남", title: "정확한 범위 설정", content: "초기에 범위를 잘 잡아줘서 추가 공사 이슈가 줄었습니다.", rating: 5 },
  { id: "r-025", region: "전북", title: "비용 대비 만족도 최고", content: "적정 단가를 알고 시작하니 업체 협의가 훨씬 수월했습니다.", rating: 5 },
  { id: "r-026", region: "전북", title: "데이터 기반이라 믿음", content: "주관적인 느낌이 아니라 숫자로 설명해 주셔서 신뢰가 갔어요.", rating: 5 },
  { id: "r-027", region: "전남", title: "공사 전 필수 서비스", content: "인테리어 준비하는 지인에게 꼭 추천하고 싶은 서비스입니다.", rating: 5 },
  { id: "r-028", region: "경북", title: "지역 업체 비교에 특화", content: "동일 공정 기준표로 비교하니 실제로 큰 비용 차이를 줄였습니다.", rating: 4 },
  { id: "r-029", region: "경남", title: "마지막까지 책임감", content: "견적 이후에도 체크포인트를 짚어주셔서 진행이 안정적이었습니다.", rating: 5 },
  { id: "r-030", region: "제주", title: "제주 사례도 충분", content: "지역 특성 반영한 조언 덕분에 배송/공정 변수까지 대비했습니다.", rating: 5 }
];

export const regions = [...new Set(reviews.map((review) => review.region))];

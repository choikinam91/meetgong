export interface MetricItem {
  label: string;
  value: string;
  hint: string;
}

export const impactMetrics: MetricItem[] = [
  {
    label: "누적 견적 제공",
    value: "3,420건+",
    hint: "아파트/빌라/상가 실제 상담 기준"
  },
  {
    label: "고객 총 절약 금액",
    value: "24.8억 원+",
    hint: "기준 견적 비교로 줄인 비용 합계"
  },
  {
    label: "평균 비용 절감률",
    value: "18.7%",
    hint: "동일 공정 대비 불필요 비용 절감"
  },
  {
    label: "현장 검증 공사",
    value: "200건+",
    hint: "직접 수행/검증한 인테리어 실무 데이터"
  }
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "전 공정 세분화",
    description: "철거, 목공, 타일, 도장, 마감까지 공정을 분해해 비교 가능한 단위로 정리합니다."
  },
  {
    step: 2,
    title: "자재 및 수량 객관화",
    description: "등급과 수량을 숫자로 기록해 업체별 자재 기준을 동일선상에서 맞춥니다."
  },
  {
    step: 3,
    title: "노무비 투명 계산",
    description: "공정별 필요한 인력과 투입 시간을 반영해 원가표를 명확히 제시합니다."
  },
  {
    step: 4,
    title: "최종 비교 견적 리포트",
    description: "고객이 바로 결정할 수 있도록 차이의 이유와 절감 포인트를 리포트로 전달합니다."
  }
];

# 프로젝트 지침

## 언어

모든 응답, 분석, 리포트, 산출물(.md 파일)은 한글로 작성합니다.
코드 주석, 변수명, 커밋 메시지 등 코드 관련 내용은 영어를 유지합니다.

## CLAUDE.md 관리 원칙

- 이 파일은 최대한 간결하고 명확하게 유지합니다
- 중복된 지침을 작성하지 않습니다
- 불필요하거나 오래된 지침은 삭제합니다

## 코드 작성 방침

### 1. 코딩 전에 생각하기
- 가정을 명시적으로 밝히고, 불확실하면 질문
- 여러 해석이 가능하면 조용히 선택하지 말고 선택지를 제시
- 더 간단한 접근이 있으면 제안
- 혼란스러운 요소는 넘어가지 말고 명확히 짚기

### 2. 단순성 우선
- 요청된 것 이상의 기능을 추가하지 않음
- 한 번만 쓰이는 코드에 추상화를 만들지 않음
- 불필요한 "유연성"이나 "설정 가능성"을 넣지 않음
- 발생할 수 없는 시나리오에 대한 에러 핸들링을 하지 않음
- 50줄이면 될 것을 200줄로 만들지 않음

### 3. 외과적 변경
- 관련 없는 코드, 주석, 포맷을 개선하지 않음
- 동작하는 코드를 리팩토링하지 않음
- 기존 스타일을 따름
- 내 변경으로 생긴 미사용 코드만 정리 (기존 dead code는 건드리지 않음)
- 모든 변경된 줄은 사용자의 요청에 직접 연결되어야 함

### 4. 목표 기반 실행
- 모호한 태스크를 측정 가능한 목표와 검증 단계로 변환
- 다단계 작업에는 각 단계별 체크포인트가 있는 구조화된 계획 수립
- 강한 기준은 독립적 반복을 가능하게 하고, 약한 기준은 끊임없는 확인을 필요로 함

### 5. 문서 동기화
- 코드 변경이 프로젝트의 README.md 내용에 영향을 줄 때 (API 변경, 새 기능 추가, 설정 변경, 사용법 변경 등) 반드시 README.md도 함께 업데이트
- `/crew:dev`, `/crew:debug` 등으로 코드가 수정된 후 마무리 단계에서 README.md 동기화 여부를 확인하고 필요 시 업데이트

## Crew 플러그인

이 프로젝트는 Crew 멀티에이전트 개발 플러그인을 사용합니다.

### 커맨드
- `/crew:init` - 워크스페이스 초기화
- `/crew:plan <feature>` - PM+Architect 기반 피처 플래닝
- `/crew:dev <feature|task>` - 풀 개발 파이프라인 (기획 -> 구현 -> 리뷰 -> 테스트)
- `/crew:debug <버그 설명>` - 버그 조사 -> 원인 분석 -> 영향 분석 -> 수정 -> 검증
- `/crew:q <질문>` - 코드베이스 질문 (자동 범위 감지 + 관련 코드 수집)
- `/crew:review [scope]` - 5관점 병렬 코드 리뷰
- `/crew:verify [--fix]` - CI/CD 전 최종 검증 (테스트, 린트, 빌드, 시크릿)
- `/crew:sprint <plan|status|close>` - 스프린트 관리
- `/crew:status` - 프로젝트 대시보드
- `/crew:README [질문]` - Crew 사용법 안내

### 상태 디렉토리
Crew 상태 파일은 `.crew/` 디렉토리에 저장됩니다:
- `config.md` - 프로젝트 설정 (아키텍처, 컨벤션)
- `board.md` - 칸반 태스크 보드
- `artifacts/` - 에이전트 산출물 (PRD, 설계, 리뷰, 테스트)

### 컨벤션
- Task ID: `TASK-NNN` (3자리 zero-padded)
- 아티팩트 파일명: slugified (예: `user-auth-prd.md`)
- 오케스트레이터만 `.crew/` 상태 파일 읽기/쓰기
- 서브에이전트는 프롬프트로 컨텍스트 전달받고 텍스트로 결과 반환

## Crew 현재 상태

- Last updated: 2026-03-12T14:41:53Z
- Active sprint: none

### In Progress
- 없음

### In Review
- 없음

### Latest Artifacts
- PRD: .crew/artifacts/prd/meetgong-mobile-ux-polish-prd.md
- Design: .crew/artifacts/design/meetgong-mobile-ux-polish-design.md
- Review: .crew/artifacts/review/meetgong-mobile-ux-polish-review.md
- Tests: .crew/artifacts/test/meetgong-mobile-ux-polish-tests.md

### Suggested Next Commands
- /crew:review app
- /crew:sprint status
- /crew:dev TASK-018

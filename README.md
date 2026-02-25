# GORDA COMPANY 랜딩 페이지

Next.js(App Router) 기반 한 페이지 스크롤 랜딩 페이지입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속합니다.

## 로고

- **사용 위치**: 헤더 좌측 — `components/landing/Logo.tsx`
- **이미지 경로**: `public/brand/gorda-logo.png`
- 첨부하신 GORDA COMPANY 로고 PNG를 `public/brand/gorda-logo.png` 로 저장하시면 헤더에 표시됩니다.
- 파일이 없으면 3x3 그리드 + GORDA COMPANY 텍스트로 된 SVG 폴백이 표시됩니다.

## 구조

- `app/(marketing)/page.tsx` — 랜딩 페이지
- `components/landing/` — Header, Hero, Problem, Solution, Proof, Services, Medifirst, Mission, FAQ, FinalCTA, Footer
- `components/ui/` — Button, Card, Accordion, Chip
- `lib/constants.ts` — 문구 상수

## 문의 폼

현재 제출 시 `console.log`로 출력하는 mock 처리입니다. API 연결 시 `components/landing/FinalCTA.tsx`의 `handleSubmit`에서 전송 로직을 추가하시면 됩니다.

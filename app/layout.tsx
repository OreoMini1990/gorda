import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://gorda.kr";

export const metadata: Metadata = {
  title: "고르다컴퍼니 | 필요한 것만 고르는 1:1맞춤 개원컨설팅",
  description:
    "실전 개원 경험 기반 선택형 개원 컨설팅 플랫폼. 개원, 전부 맡기지 마십시오. 필요한 것만 고르십시오.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "고르다컴퍼니 | 필요한 것만 고르는 1:1맞춤 개원컨설팅",
    description:
      "실전 개원 경험 기반 선택형 개원 컨설팅 플랫폼. 개원, 전부 맡기지 마십시오. 필요한 것만 고르십시오.",
    url: SITE_URL,
    siteName: "고르다컴퍼니",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "GORDA COMPANY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "고르다컴퍼니 | 필요한 것만 고르는 1:1맞춤 개원컨설팅",
    description:
      "실전 개원 경험 기반 선택형 개원 컨설팅 플랫폼. 필요한 것만 고르십시오.",
    images: ["/brand/og-image.png"],
  },
  verification: {
    other: {
      "naver-site-verification":
        "004e926a7d124a13d04a04ef9c3751e06ed960e1",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Pretendard — 참고 레이아웃과 동일한 폰트 */}
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased relative overflow-x-hidden bg-canvas text-white font-pretendard">
        {/* 고정 그리드 오버레이 */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-grid-dark [background-size:60px_60px]" />
        {/* 고정 노이즈 오버레이 */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-30 mix-blend-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

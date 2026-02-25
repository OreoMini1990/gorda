import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Proof } from "@/components/landing/Proof";
import { Medifirst } from "@/components/landing/Medifirst";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      {/* 상단 스크롤 진행 바 */}
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero — 다크 캔버스 전체 */}
        <Hero />
        {/* Chapter 01 ~ 04 — 화이트 서피스 패널 */}
        <Problem />
        <Solution />
        <Proof />
        {/* Medifirst — 캔버스 위 글래스 카드 (패널 없음) */}
        <Medifirst />
        {/* Chapter 04 — 화이트 서피스 패널 (FAQ + 폼) */}
        <div className="pb-10">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

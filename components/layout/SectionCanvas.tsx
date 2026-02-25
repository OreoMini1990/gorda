import { forwardRef } from "react";

interface SectionCanvasProps {
  id?: string;
  /** "Chapter 01. The Problem" 형태의 상단 라벨 */
  chapter?: string;
  children: React.ReactNode;
  /** 화이트 패널에 추가 클래스 */
  panelClassName?: string;
  /** section 요소에 추가 클래스 (예: scroll-mt-20으로 앵커 스크롤 시 고정 헤더 고려) */
  sectionClassName?: string;
  /** true면 패널에 overflow-visible 적용 (드롭다운 등이 잘리지 않도록) */
  panelOverflowVisible?: boolean;
}

/**
 * 네이비 캔버스(배경) 위에 화이트 서피스 패널을 올리는 섹션 래퍼.
 *
 * 구조:
 *   <section>           ← 캔버스 (다크 배경 유지)
 *     chapter label     ← 캔버스 위 챕터 표시
 *     <div bg-white>    ← 화이트 서피스 패널
 *       {children}
 *     </div>
 *   </section>
 */
export const SectionCanvas = forwardRef<HTMLElement, SectionCanvasProps>(
  ({ id, chapter, children, panelClassName = "", sectionClassName = "", panelOverflowVisible }, ref) => {
    return (
      <section ref={ref} id={id} className={`relative z-10 py-10 ${sectionClassName}`.trim()}>
        {chapter && (
          <div className="mb-6 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[rgba(255,255,255,0.75)]">
              {chapter}
            </span>
          </div>
        )}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-panel bg-white p-8 shadow-2xl md:p-16 ${panelOverflowVisible ? "overflow-visible" : "overflow-hidden"} ${panelClassName}`}
          >
            {children}
          </div>
        </div>
      </section>
    );
  }
);

SectionCanvas.displayName = "SectionCanvas";

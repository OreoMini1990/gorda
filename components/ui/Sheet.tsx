"use client";

import { useEffect } from "react";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Sheet({ open, onClose, title, children }: SheetProps) {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <button
        type="button"
        aria-label="닫기"
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className="relative flex w-full max-w-lg flex-col bg-white shadow-2xl"
        style={{ animation: "sheetSlideIn 0.3s ease-out" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <h2 id="sheet-title" className="text-lg font-bold text-gray-900">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="닫기"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 text-sm text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}

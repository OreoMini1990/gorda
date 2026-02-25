"use client";

import { useState } from "react";

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({
  id,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-light/50 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between py-4 text-left text-body font-semibold text-navy hover:text-navy-dark"
        aria-expanded={open}
        aria-controls={`accordion-body-${id}`}
        id={`accordion-head-${id}`}
      >
        {title}
        <span
          className={`ml-2 shrink-0 text-gray transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▼
        </span>
      </button>
      <div
        id={`accordion-body-${id}`}
        role="region"
        aria-labelledby={`accordion-head-${id}`}
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pb-4 text-body text-gray-dark">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array< { id: string; title: string; content: React.ReactNode } >;
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  return (
    <div className="divide-y-0">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          defaultOpen={item.id === defaultOpenId}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import type { Faq } from "@/content/faqs";

/** Accessible accordion; reused on Home (top 5) and Pricing. */
export default function FAQ({
  title = "Questions, answered.",
  items,
}: {
  title?: string;
  items: Faq[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24">
      <div className="container-site max-w-3xl">
        <Reveal>
          <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-2xl border border-slate/10 bg-card md:mt-14">
            {items.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className="border-b border-slate/10 last:border-b-0"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-heading"
                    >
                      {faq.question}
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className={`size-4 shrink-0 text-slate transition-transform duration-200 ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        <path
                          d="M8 3v10M3 8h10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-slate">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

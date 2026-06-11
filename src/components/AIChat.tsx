"use client";

import { useEffect, useRef, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CHAT } from "@/content/chat";
import { WA_PREFILLS } from "@/content/site";
import type { Lang } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";

/**
 * Floating AI chat (above the WhatsApp button). Asks business type + how
 * sales are recorded via /api/chat, then hands the answers to the iPAB team
 * as a prefilled WhatsApp message. The [[WHATSAPP]] marker in the model's
 * final reply separates the visible closing line from the handoff text.
 */

const MARKER = "[[WHATSAPP]]";

type Msg = { role: "user" | "assistant"; content: string };

export default function AIChat({ lang = "en" }: { lang?: Lang }) {
  const t = CHAT[lang];
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: t.greeting },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [handoff, setHandoff] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading, handoff]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setFailed(false);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, messages: next }),
      });
      if (!res.ok) throw new Error("upstream");
      const { reply } = (await res.json()) as { reply: string };
      const idx = reply.indexOf(MARKER);
      const visible = (idx === -1 ? reply : reply.slice(0, idx)).trim();
      if (visible) {
        setMessages((m) => [...m, { role: "assistant", content: visible }]);
      }
      if (idx !== -1) {
        setHandoff(reply.slice(idx + MARKER.length).trim());
      }
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.openAria}
          className="fixed bottom-[5.25rem] right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-blue text-white transition-transform duration-200 hover:scale-105 md:bottom-[5.75rem] md:right-6"
        >
          <ChatIcon className="size-7" />
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label={t.title}
          className="fixed bottom-[5.25rem] left-4 right-4 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-slate/10 bg-card shadow-xl sm:left-auto sm:w-96 md:bottom-[5.75rem] md:right-6"
        >
          <div className="flex items-start justify-between gap-3 bg-navy px-4 py-3 text-white">
            <div>
              <p className="font-semibold">{t.title}</p>
              <p className="mt-0.5 text-sm text-white/70">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.closeAria}
              className="rounded-lg p-1 text-white/70 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <p
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto w-fit max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-blue px-4 py-2.5 text-[15px] text-white"
                    : "w-fit max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-2.5 text-[15px] text-ink"
                }
              >
                {m.content}
              </p>
            ))}
            {loading && (
              <p className="w-fit rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-3" aria-hidden="true">
                <span className="inline-flex gap-1">
                  <span className="size-1.5 animate-bounce rounded-full bg-slate" />
                  <span className="size-1.5 animate-bounce rounded-full bg-slate [animation-delay:120ms]" />
                  <span className="size-1.5 animate-bounce rounded-full bg-slate [animation-delay:240ms]" />
                </span>
              </p>
            )}
            {failed && (
              <div className="w-fit max-w-[85%] space-y-2 rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-2.5 text-[15px] text-ink">
                <p>{t.error}</p>
                <a
                  href={waLink(WA_PREFILLS[lang].global)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-green"
                >
                  <WhatsAppIcon className="size-4" />
                  {t.errorCta}
                </a>
              </div>
            )}
            {handoff && (
              <a
                href={waLink(handoff)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 font-semibold text-white transition-colors hover:bg-green-600"
              >
                <WhatsAppIcon className="size-5" />
                {t.sendToWhatsApp}
              </a>
            )}
          </div>

          <form onSubmit={send} className="flex gap-2 border-t border-slate/10 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
              className="min-w-0 flex-1 rounded-xl border border-slate/20 bg-surface px-4 py-2.5 text-[15px] text-ink placeholder:text-slate"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-xl bg-navy px-4 py-2.5 font-semibold text-white transition-colors disabled:opacity-40"
            >
              {t.send}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function ChatIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-9 8.36 8.5 8.5 0 0 1-3.4-.76L3 20l1.05-4.1A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M12 7.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

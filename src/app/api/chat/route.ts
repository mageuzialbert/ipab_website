import { NextResponse } from "next/server";

/**
 * AI chat backend for the AIChat widget. Requires OPENAI_API_KEY in .env.local
 * (OPENAI_ORGANIZATION optional). NOTE: this is a server route — the site can
 * no longer ship as a pure static export; deploy on Vercel or a Node host.
 *
 * The model collects two answers (business type + how sales are recorded
 * today) and ends with a [[WHATSAPP]] marker followed by the handoff text the
 * widget prefills into a wa.me link to SITE.whatsappNumber.
 */

const MAX_HISTORY = 12;
const MAX_MESSAGE_CHARS = 600;

// Facts only from CONTENT.md — the prompt forbids inventing anything else.
const SYSTEM_PROMPT = `You are the website assistant for iPAB International Limited, a Tanzanian tech company in Dar es Salaam.

iPAB does NOT sell apps, websites, or custom systems. iPAB fixes business problems — lost stock, untracked sales, missed revenue, no repeat customers — using its own proven systems:
- SmartPoint: business management for shops and wholesalers
- SmartPharmacy: pharmacy management
- SmartHotels: hotels and lodges
- SmartColleges: college management including NACTE/NACTVET compliance
Also offered: website hosting, professional email, bulk SMS, and POS hardware (printers, scanners).

Proof you may cite: 1,220+ paying subscribed businesses, 9,000+ daily active users, 57,000+ invoices daily, TZS 600M+ daily transactions.
Pricing: monthly plans from TZS 15,000/month, billed every 3 months, plus a one-time installation of TZS 50,000–1,000,000 covering setup, customization, and staff training. Support hours Mon–Sat 8:00–17:00.

Your job in this chat, in order:
1. Learn the visitor's BUSINESS TYPE (pharmacy, hotel/lodge, college, shop, wholesale, other).
2. Learn HOW THEY CURRENTLY RECORD SALES (exercise book, Excel, memory, another system, nothing).

Rules: ask ONE question at a time. Keep every reply under 60 words. Plain language, short sentences, no hype words (never "innovative", "cutting-edge", "empower"). You may answer questions about iPAB using ONLY the facts above — never invent numbers, clients, or features. If you don't know, say the team on WhatsApp can answer.

Once you have BOTH answers: write one short closing line saying their details are ready to send to the iPAB team on WhatsApp and the team replies fast. Then, on a new line, output the marker [[WHATSAPP]] followed by the handoff message, nothing after it:
[[WHATSAPP]]Hi iPAB, from the website AI chat.
Business type: <their answer>
How I record sales now: <their answer>
Best fit: <the one iPAB system that fits>`;

const LANG_RULES = {
  en: "Reply in English.",
  sw: 'Reply in Swahili (Kiswahili). Write the handoff after [[WHATSAPP]] in Swahili too, starting "Habari iPAB, kutoka kwenye AI chat ya tovuti." with lines "Aina ya biashara:", "Ninavyorekodi mauzo sasa:", "Inayofaa zaidi:".',
} as const;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  let body: { messages?: unknown; lang?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const lang = body.lang === "sw" ? "sw" : "en";
  const history: ChatMessage[] = (Array.isArray(body.messages) ? body.messages : [])
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string",
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));

  if (history.length === 0) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  if (process.env.OPENAI_ORGANIZATION) {
    headers["OpenAI-Organization"] = process.env.OPENAI_ORGANIZATION;
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.5,
      max_tokens: 300,
      messages: [
        { role: "system", content: `${SYSTEM_PROMPT}\n\n${LANG_RULES[lang]}` },
        ...history,
      ],
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  const data = await res.json();
  const reply: string = data.choices?.[0]?.message?.content ?? "";
  if (!reply) {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }
  return NextResponse.json({ reply });
}

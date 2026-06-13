import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { TeamMember } from "@/content/team";

/**
 * Team section for the Why page. Branded monogram avatars (initials) stand
 * in until real headshots are provided — see TODO below. Cards reflow
 * 1 → 2 → 3 columns and stagger in on scroll.
 */

/** Deterministic brand tints by index; navy / blue / slate from the theme. */
const TINTS = [
  "bg-navy text-white",
  "bg-blue text-white",
  "bg-slate text-white",
];

export default function TeamGrid({
  heading,
  members,
}: {
  heading: string;
  members: TeamMember[];
}) {
  return (
    <>
      <Reveal>
        <h2 className="text-balance text-center font-display text-h2-sm font-bold text-heading md:text-h2">
          {heading}
        </h2>
      </Reveal>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {members.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.06} className="h-full">
            <li className="flex h-full flex-col items-start gap-4 rounded-2xl border border-slate/10 bg-card p-6">
              {/* Real headshot when provided (drop a file in /public/team/ and
                  set member.image); monogram avatar as the fallback. */}
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={64}
                  height={64}
                  unoptimized
                  className="size-16 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className={`flex size-16 shrink-0 items-center justify-center rounded-full font-display text-xl font-bold ${
                    TINTS[i % TINTS.length]
                  }`}
                >
                  {member.initials}
                </div>
              )}
              <div className="flex flex-1 flex-col">
                <p className="font-semibold text-heading">{member.name}</p>
                <p className="mt-0.5 text-sm text-slate">{member.title}</p>
                <p className="mt-3 text-sm text-ink">
                  &ldquo;{member.tagline}&rdquo;
                </p>
              </div>
              {(member.linkedin || member.instagram) && (
                <div className="mt-1 flex items-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="text-slate transition-colors hover:text-blue"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.76-1.95C20.6 8.69 22 10.36 22 13.5V21h-4v-6.5c0-1.55-.55-2.6-1.93-2.6-1.05 0-1.67.7-1.95 1.38-.1.24-.12.58-.12.92V21H9V9Z" />
                      </svg>
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Instagram`}
                      className="text-slate transition-colors hover:text-blue"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </li>
          </Reveal>
        ))}
      </ul>
    </>
  );
}

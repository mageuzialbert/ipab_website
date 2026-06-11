import MockupFrame from "@/components/MockupFrame";

/** Stylized SmartColleges UI; illustrative numbers, not claims. */
export default function CollegeMockup() {
  return (
    <MockupFrame title="SmartColleges; Registrar" badge="Live">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-slate/10 bg-surface-2 p-4">
          <p className="text-xs font-medium text-slate">Attendance this term</p>
          <p className="mt-1 font-display text-2xl font-bold text-heading">87%</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate/15">
            <div className="h-full w-[87%] rounded-full bg-blue" />
          </div>
        </div>
        <div className="rounded-xl border border-slate/10 p-4">
          <p className="text-xs font-medium text-slate">Fee balances</p>
          <p className="mt-1 font-display text-2xl font-bold text-heading">36</p>
          <p className="text-[11px] text-slate">students outstanding</p>
        </div>
      </div>

      {/* NACTVET report status; green = success state, allowed */}
      <div className="flex items-center gap-2.5 rounded-xl border border-green/30 bg-green/5 p-3.5">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green text-white">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5">
            <path
              d="M3.5 8.5l3 3 6-6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold text-ink">NACTVET report</p>
          <p className="text-[11px] text-slate">
            % attendance included; ready for submission
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 rounded-xl border border-slate/10 p-3.5 text-xs">
        <span className="font-medium text-ink">SMS to parents</span>
        <span className="text-right text-slate">240 sent · results day</span>
      </div>
    </MockupFrame>
  );
}

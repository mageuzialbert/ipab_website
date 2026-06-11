import MockupFrame from "@/components/MockupFrame";

/** Stylized SmartPharmacy UI; illustrative numbers, not claims. */
export default function PharmacyMockup() {
  return (
    <MockupFrame title="SmartPharmacy; Owner's view" badge="Live">
      {/* AI audit */}
      <div className="rounded-xl border border-amber/40 bg-amber/5 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-ink">AI audit</p>
          <span className="rounded-full bg-amber/15 px-2 py-0.5 text-[11px] font-semibold text-amber">
            1 flag today
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2 rounded-lg bg-card px-3 py-2 text-xs">
          <span className="font-medium text-ink">Amoxicillin 250mg</span>
          <span className="text-right text-slate">
            count short by 6 · adjusted 21:14
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-slate/10 p-3.5">
          <p className="text-xs font-medium text-slate">Sales today</p>
          <p className="mt-1 font-display text-lg font-bold text-heading">
            TZS 642,300
          </p>
        </div>
        <div className="rounded-xl border border-slate/10 p-3.5">
          <p className="text-xs font-medium text-slate">Expiring ≤ 60 days</p>
          <p className="mt-1 font-display text-lg font-bold text-amber">
            5 items
          </p>
        </div>
      </div>

      {/* Online catalogue */}
      <div className="flex items-center justify-between gap-2 rounded-xl border border-slate/10 p-3.5 text-xs">
        <span className="font-medium text-ink">Online catalogue</span>
        <span className="text-right text-slate">
          312 items visible to customers
        </span>
      </div>
    </MockupFrame>
  );
}

import MockupFrame from "@/components/MockupFrame";

const ROOMS: ("occupied" | "free" | "cleaning")[] = [
  "occupied", "occupied", "free", "occupied", "cleaning", "occupied",
  "occupied", "free", "occupied", "occupied", "occupied", "cleaning",
  "occupied", "occupied", "occupied", "free", "occupied", "occupied",
];

/** Stylized SmartHotels UI; illustrative numbers, not claims. */
export default function HotelMockup() {
  return (
    <MockupFrame title="SmartHotels; Front desk" badge="Live">
      <div className="rounded-xl border border-slate/10 bg-surface-2 p-4">
        <p className="text-xs font-medium text-slate">Tonight</p>
        <p className="mt-1 font-display text-2xl font-bold text-heading">
          14/18{" "}
          <span className="text-sm font-semibold text-slate">
            rooms occupied
          </span>
        </p>
      </div>

      {/* Room status grid */}
      <div className="rounded-xl border border-slate/10 p-3.5">
        <div className="grid grid-cols-6 gap-1.5">
          {ROOMS.map((status, i) => (
            <div
              key={i}
              className={`flex h-8 items-center justify-center rounded-md text-[10px] font-semibold ${
                status === "occupied"
                  ? "bg-blue text-white dark:text-navy"
                  : status === "cleaning"
                    ? "bg-amber/20 text-amber"
                    : "border border-slate/20 text-slate"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-2.5 flex gap-4 text-[10px] text-slate">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-blue" /> Occupied
          </span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm border border-slate/30" /> Free
          </span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-amber/30" /> Cleaning
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 rounded-xl border border-slate/10 p-3.5 text-xs">
        <span className="font-medium text-ink">Room 12 · Restaurant</span>
        <span className="text-right font-semibold text-heading">
          TZS 28,500 → room bill
        </span>
      </div>
    </MockupFrame>
  );
}

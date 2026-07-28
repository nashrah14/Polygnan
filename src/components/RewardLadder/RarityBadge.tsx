import { memo } from "react";
import { RARITY, type Rarity } from "./constants";

interface Props {
  rarity: Rarity;
}

function RarityBadgeImpl({ rarity }: Props) {
  const r = RARITY[rarity];
  return (
    <span
      className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur"
      style={{
        borderColor: r.ring,
        color: r.text,
        background: "rgba(255,255,255,0.04)",
        boxShadow: rarity === "legendary" ? `0 0 24px ${r.ring}` : undefined,
      }}
      aria-label={`Rarity: ${r.label}`}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: r.text, boxShadow: `0 0 8px ${r.text}` }}
      />
      {r.label}
    </span>
  );
}

export const RarityBadge = memo(RarityBadgeImpl);

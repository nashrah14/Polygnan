import { memo } from "react";
import { Lock } from "lucide-react";

interface Props {
  label: string;
  legendary?: boolean;
}

function UnlockGlowImpl({ label, legendary }: Props) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur"
      style={{
        borderColor: legendary ? "rgba(255,196,64,0.5)" : "rgba(199,255,26,0.35)",
        color: legendary ? "#FFC440" : "#C7FF1A",
        background: "rgba(255,255,255,0.03)",
        boxShadow: legendary
          ? "0 0 24px rgba(255,196,64,0.25), inset 0 0 12px rgba(255,196,64,0.08)"
          : "0 0 18px rgba(199,255,26,0.18), inset 0 0 10px rgba(199,255,26,0.06)",
      }}
    >
      <Lock className="h-3 w-3" aria-hidden />
      {label}
    </div>
  );
}

export const UnlockGlow = memo(UnlockGlowImpl);

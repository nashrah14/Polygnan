import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Milestone } from "./data";
import { RarityBadge } from "./RarityBadge";
import { RewardChip } from "./RewardChip";
import { UnlockGlow } from "./UnlockGlow";

interface Props {
  milestone: Milestone;
  index: number;
  side: "left" | "right";
}

function ConfettiBits() {
  const bits = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 240,
        y: -(Math.random() * 160 + 40),
        r: Math.random() * 180,
        d: 2 + Math.random() * 2,
        delay: Math.random() * 2,
        color: ["#C7FF1A", "#FFC440", "#FFFFFF"][i % 3],
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
      {bits.map((b) => (
        <motion.span
          key={b.id}
          className="absolute left-1/2 top-full h-1.5 w-1.5 rounded-[1px]"
          style={{ background: b.color, boxShadow: `0 0 6px ${b.color}` }}
          animate={{ x: b.x, y: b.y, rotate: b.r, opacity: [0, 1, 0] }}
          transition={{ duration: b.d, delay: b.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function RewardCardImpl({ milestone, index, side }: Props) {
  const Icon = milestone.icon;
  const reduce = useReducedMotion();
  const isLegendary = !!milestone.legendary;

  return (
    <div
      className={`relative flex w-full items-center pl-16 md:pl-0 ${
        side === "left" ? "md:justify-start md:pr-[calc(50%+2.5rem)]" : "md:justify-end md:pl-[calc(50%+2.5rem)]"
      }`}
    >
      {/* connector dot on the timeline */}
      <div
        className="absolute left-6 top-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2"
        aria-hidden
      >
        <span
          className="absolute h-4 w-4 rounded-full"
          style={{
            background: isLegendary ? "#FFC440" : "#C7FF1A",
            boxShadow: isLegendary
              ? "0 0 18px #FFC440, 0 0 40px rgba(255,196,64,0.6)"
              : "0 0 14px #C7FF1A, 0 0 32px rgba(199,255,26,0.6)",
          }}
        />
        <span className="relative h-1.5 w-1.5 rounded-full bg-black" />
      </div>

      {/* connector arm */}
      <div
        className={`pointer-events-none absolute top-10 hidden h-px w-10 md:block ${
          side === "left" ? "right-[calc(50%-2.5rem)]" : "left-[calc(50%-2.5rem)]"
        }`}
        style={{
          background:
            "linear-gradient(to right, rgba(199,255,26,0.6), rgba(199,255,26,0))",
          transform: side === "left" ? "none" : "scaleX(-1)",
        }}
        aria-hidden
      />

      <motion.article
        initial={{ opacity: 0, y: 40, x: reduce ? 0 : side === "left" ? -24 : 24 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduce ? undefined : { y: -6 }}
        tabIndex={0}
        aria-label={`Level ${milestone.level}: ${milestone.title}`}
        className={`group relative w-full max-w-xl overflow-hidden rounded-3xl border p-6 outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#C7FF1A] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:p-7 ${
          isLegendary ? "border-[#FFC440]/30" : "border-white/10 hover:border-[#C7FF1A]/40"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: isLegendary
            ? "0 20px 60px -20px rgba(255,196,64,0.35), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 20px 60px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* hover glow */}
        <span
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{
            background: isLegendary
              ? "radial-gradient(600px circle at 50% 0%, rgba(255,196,64,0.18), transparent 60%)"
              : "radial-gradient(600px circle at 50% 0%, rgba(199,255,26,0.16), transparent 60%)",
          }}
          aria-hidden
        />

        {/* legendary aura + pulse */}
        {isLegendary && !reduce && (
          <>
            <motion.span
              className="pointer-events-none absolute -inset-6 rounded-[2rem]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,196,64,0.25), transparent 70%)",
                filter: "blur(6px)",
              }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.03, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <ConfettiBits />
          </>
        )}

        {/* header */}
        <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <div className="flex min-w-0 items-center gap-4">
            <motion.div
              whileHover={reduce ? undefined : { rotate: 12, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl border"
              style={{
                borderColor: isLegendary ? "rgba(255,196,64,0.4)" : "rgba(199,255,26,0.3)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                boxShadow: isLegendary
                  ? "0 0 24px rgba(255,196,64,0.35), inset 0 0 12px rgba(255,196,64,0.15)"
                  : "0 0 20px rgba(199,255,26,0.22), inset 0 0 10px rgba(199,255,26,0.1)",
              }}
              aria-hidden
            >
              <Icon
                className="h-6 w-6"
                style={{ color: isLegendary ? "#FFC440" : "#C7FF1A" }}
              />
            </motion.div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Level {String(milestone.level).padStart(2, "0")}
              </div>
              <h3 className="mt-0.5 truncate text-lg font-semibold text-white sm:text-2xl">
                {milestone.title}
              </h3>
            </div>
          </div>
          <div className="shrink-0 justify-self-end">
            <RarityBadge rarity={milestone.rarity} />
          </div>
        </div>

        {/* rewards */}
        <ul className="relative mt-6 flex flex-wrap gap-2">
          {milestone.rewards.map((r, i) => (
            <RewardChip key={r} label={r} index={i} />
          ))}
        </ul>

        {/* footer */}
        <div className="relative mt-6 flex items-center justify-between gap-3">
          <UnlockGlow label={milestone.unlockLabel} legendary={isLegendary} />
          {isLegendary && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFC440]">
              ★ Legendary
            </span>
          )}
        </div>
      </motion.article>
    </div>
  );
}

export const RewardCard = memo(RewardCardImpl);

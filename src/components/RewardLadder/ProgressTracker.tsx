import { memo } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
  total: number;
}

function Counter({ progress, total }: { progress: MotionValue<number>; total: number }) {
  const level = useTransform(progress, (v) => Math.max(1, Math.min(total, Math.round(v * total))));
  return <motion.span>{level}</motion.span>;
}

function ProgressTrackerImpl({ containerRef, total }: Props) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const width = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div className="pointer-events-none sticky top-4 z-30 mx-auto hidden w-full max-w-xs md:block">
      <div className="rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
          <span>
            Level <Counter progress={smooth} total={total} />/{total}
          </span>
          <span className="text-[#C7FF1A]">Ladder</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full"
            style={{
              width,
              background: "linear-gradient(90deg, #C7FF1A, #FFC440)",
              boxShadow: "0 0 10px rgba(199,255,26,0.7)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export const ProgressTracker = memo(ProgressTrackerImpl);

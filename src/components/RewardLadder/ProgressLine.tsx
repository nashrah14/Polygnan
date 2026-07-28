import { memo, type RefObject } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
}

function ProgressLineImpl({ containerRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.3 });
  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="pointer-events-none absolute top-0 bottom-0 left-6 w-px md:left-1/2 md:-translate-x-1/2"
      aria-hidden
    >
      {/* base line */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0.09) 12%, rgba(255,255,255,0.09) 88%, rgba(255,255,255,0.02))",
        }}
      />
      {/* animated fill */}
      <motion.div
        className="absolute left-0 top-0 w-full"
        style={{
          height,
          background:
            "linear-gradient(to bottom, rgba(199,255,26,0) 0%, #C7FF1A 20%, #C7FF1A 80%, rgba(199,255,26,0) 100%)",
          boxShadow: "0 0 12px #C7FF1A, 0 0 32px rgba(199,255,26,0.6)",
        }}
      />
      {/* moving head */}
      <motion.div
        className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
        style={{
          top: height,
          background: "#C7FF1A",
          boxShadow: "0 0 16px #C7FF1A, 0 0 32px rgba(199,255,26,0.7)",
        }}
      />
    </div>
  );
}

export const ProgressLine = memo(ProgressLineImpl);

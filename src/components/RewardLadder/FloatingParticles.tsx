import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

function FloatingParticlesImpl({ count = 24 }: { count?: number }) {
  const reduce = useReducedMotion();
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 4,
        duration: 6 + Math.random() * 6,
      })),
    [count],
  );

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: "#C7FF1A",
            boxShadow: "0 0 8px #C7FF1A, 0 0 16px rgba(199,255,26,0.5)",
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], y: [-8, -40, -80] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export const FloatingParticles = memo(FloatingParticlesImpl);

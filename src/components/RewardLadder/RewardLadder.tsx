import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MILESTONES } from "./data";
import { RewardCard } from "./RewardCard";
import { ProgressLine } from "./ProgressLine";
import { ProgressTracker } from "./ProgressTracker";
import { FloatingParticles } from "./FloatingParticles";

interface Props {
  ctaHref?: string;
}

export default function RewardLadder({ ctaHref = "#apply" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="reward-ladder-heading"
      className="relative isolate overflow-hidden bg-[#0B0B0B] py-24 text-white sm:py-32"
    >
      {/* dotted background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
        aria-hidden
      />
      {/* ambient neon glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(199,255,26,0.18), rgba(199,255,26,0) 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden
      />
      <FloatingParticles count={reduce ? 0 : 26} />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* header */}
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            className="pointer-events-none absolute left-1/2 top-8 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(199,255,26,0.28), rgba(199,255,26,0) 70%)",
              filter: "blur(24px)",
            }}
            aria-hidden
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#C7FF1A]/30 bg-[#C7FF1A]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C7FF1A] backdrop-blur"
            style={{ boxShadow: "0 0 24px rgba(199,255,26,0.2)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C7FF1A] shadow-[0_0_10px_#C7FF1A]" />
            Reward Ladder
          </motion.span>
          <motion.h2
            id="reward-ladder-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Level Up Your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, #C7FF1A 120%)",
              }}
            >
              Impact
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg"
          >
            Every student you inspire unlocks your next milestone.
          </motion.p>
        </div>

        {/* progress tracker */}
        <div className="mt-14">
          <ProgressTracker containerRef={containerRef} total={MILESTONES.length} />
        </div>

        {/* timeline */}
        <div ref={containerRef} className="relative mt-10">
          <ProgressLine containerRef={containerRef} />

          <ol className="space-y-16 sm:space-y-20 md:space-y-28">
            {MILESTONES.map((m, i) => (
              <li key={m.level} className="relative">
                <RewardCard
                  milestone={m}
                  index={i}
                  side={i % 2 === 0 ? "left" : "right"}
                />
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <motion.div
          id="apply"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-24 max-w-3xl overflow-hidden rounded-3xl border border-white/10 p-8 text-center sm:p-12"
          style={{
            background:
              "linear-gradient(180deg, rgba(199,255,26,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow:
              "0 30px 80px -30px rgba(199,255,26,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(600px circle at 50% 0%, rgba(199,255,26,0.18), transparent 60%)",
            }}
            aria-hidden
          />
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Become the Next Top Ambassador?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 sm:text-base">
            Apply now to unlock the ladder, stand out on campus, and grow inside a
            premium reward system.
          </p>
          <a
            href={ctaHref}
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7FF1A] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{
              background: "linear-gradient(180deg, #E4FF6A 0%, #C7FF1A 100%)",
              boxShadow:
                "0 10px 40px -8px rgba(199,255,26,0.6), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            Apply Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

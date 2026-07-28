import { memo } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Props {
  label: string;
  index: number;
}

function RewardChipImpl({ label, index }: Props) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, scale: 1.02 }}
      className="group/chip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/85 backdrop-blur transition-colors hover:border-[#C7FF1A]/40 hover:bg-[#C7FF1A]/[0.06] hover:text-white"
    >
      <Sparkles
        className="h-3 w-3 text-[#C7FF1A] transition-transform duration-300 group-hover/chip:rotate-12"
        aria-hidden
      />
      <span>{label}</span>
    </motion.li>
  );
}

export const RewardChip = memo(RewardChipImpl);

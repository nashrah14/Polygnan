export const COLORS = {
  bg: "#0B0B0B",
  neon: "#C7FF1A",
  neonSoft: "rgba(199, 255, 26, 0.15)",
  neonGlow: "rgba(199, 255, 26, 0.35)",
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.6)",
  border: "rgba(255,255,255,0.08)",
  cardBg: "rgba(255,255,255,0.03)",
} as const;

export const RARITY = {
  common: { label: "COMMON", ring: "rgba(255,255,255,0.25)", text: "rgba(255,255,255,0.75)" },
  rare: { label: "RARE", ring: "rgba(120,200,255,0.5)", text: "#78C8FF" },
  epic: { label: "EPIC", ring: "rgba(199,255,26,0.5)", text: "#C7FF1A" },
  legendary: { label: "LEGENDARY", ring: "rgba(255,196,64,0.7)", text: "#FFC440" },
} as const;

export type Rarity = keyof typeof RARITY;

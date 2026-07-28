import { Compass, BadgeCheck, Gift, GraduationCap, Briefcase, Crown } from "lucide-react";
import type { Rarity } from "./constants";
import type { ComponentType, SVGProps } from "react";

export interface Milestone {
  level: number;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  rewards: string[];
  unlockLabel: string;
  rarity: Rarity;
  legendary?: boolean;
}

export const MILESTONES: Milestone[] = [
  {
    level: 1,
    title: "Scout",
    icon: Compass,
    rewards: ["Private community access", "Starter kit"],
    unlockLabel: "Unlocked on Sign-up",
    rarity: "common",
  },
  {
    level: 2,
    title: "25 Registrations",
    icon: BadgeCheck,
    rewards: ["Official Campus Ambassador title", "First Swag Drop", "Prize-linked Challenge"],
    unlockLabel: "Unlocked at 25 Registrations",
    rarity: "rare",
  },
  {
    level: 3,
    title: "50+ Registrations",
    icon: Gift,
    rewards: ["Campus Event Grants", "Exclusive Merchandise"],
    unlockLabel: "Unlocked at 50 Registrations",
    rarity: "rare",
  },
  {
    level: 4,
    title: "75+ Registrations",
    icon: GraduationCap,
    rewards: ["Mentorship Access", "Additional Campus Grants"],
    unlockLabel: "Unlocked at 75 Registrations",
    rarity: "epic",
  },
  {
    level: 5,
    title: "100+ Registrations",
    icon: Briefcase,
    rewards: ["Paid Internship Opportunities", "Invite to Ambassador Events"],
    unlockLabel: "Unlocked at 100 Registrations",
    rarity: "epic",
  },
  {
    level: 6,
    title: "200+ Registrations",
    icon: Crown,
    rewards: ["Founding Team Consideration"],
    unlockLabel: "Unlocked at 200 Registrations",
    rarity: "legendary",
    legendary: true,
  },
];

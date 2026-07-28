import { createFileRoute } from "@tanstack/react-router";
import RewardLadder from "../components/RewardLadder/RewardLadder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EYFI Campus Ambassador — Reward Ladder" },
      {
        name: "description",
        content:
          "Level up your impact as an EYFI Campus Ambassador. Unlock swag, grants, mentorship, paid internships and founding-team consideration through the Reward Ladder.",
      },
      { property: "og:title", content: "EYFI Campus Ambassador — Reward Ladder" },
      {
        property: "og:description",
        content:
          "Every student you inspire unlocks your next milestone. Explore the EYFI Campus Ambassador reward ladder.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    // Changed bg-[#0B0B0B] to bg-transparent so the global dots show through
    <main className="min-h-screen w-full bg-transparent relative">
      <RewardLadder />
    </main>
  );
}

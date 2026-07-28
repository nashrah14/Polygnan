# 🚀 EYFI Campus Ambassador Platform - Reward Ladder

## 📌 Technical Overview
A production-ready, interactive "Reward Ladder" component engineered for the EYFI Campus Ambassador landing page. This project demonstrates proficiency in modern frontend architecture, state-driven animations, and responsive UI design. 

The application was developed with a strict focus on a minimalist aesthetic, ensuring a clean, professional user experience while seamlessly integrating dynamic, gaming-inspired elements (dark mode, neon accents, and gamified micro-interactions).

## 🏗️ Engineering Highlights

* **Component-Driven Architecture:** Built with a highly modular design, strictly separating the `RewardLadder` layout container, `RewardCard` milestone UI, and configuration logic (`data.js`) for maximum scalability and maintainability.
* **Advanced State & Animations:** Leveraged Framer Motion for smooth, scroll-triggered view animations and utilized React state to manage interactive, gamified elements like pulsing nodes, dynamic hover states, and milestone confetti.
* **Responsive Layout Strategy:** Implemented a complex alternating timeline layout for desktop environments that fluidly adapts into a stacked, vertical progression system for mobile screens without compromising visual hierarchy.
* **Modern Routing:** Utilized TanStack Router for a robust, scalable file-based routing architecture (`__root.tsx`) to manage the application tree efficiently.

## 💻 Tech Stack

* **Core:** React 18, TypeScript, Vite
* **Styling & UI:** Tailwind CSS (Custom utility configuration, Glassmorphism)
* **Motion & Interactions:** Framer Motion, Canvas Confetti
* **Icons:** Lucide React
* **Routing:** TanStack Router

## 📂 Architectural Structure

```text
├── public/                 # Static branding assets and dynamic favicons
├── src/
│   ├── components/         # Reusable, isolated UI components (RewardCard, ProgressLine)
│   ├── data/               # Decoupled milestone configuration data
│   ├── routes/             # File-based routing logic (__root.tsx)
│   └── server.ts           # App and server configuration
├── tailwind.config.js      # Custom theme, animations, and utility configurations
├── tsconfig.json           # Strict TypeScript configuration
└── vite.config.ts          # Build optimization settings
```

### Developed By: 
## Nashrah Fathima

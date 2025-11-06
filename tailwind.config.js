/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#393E46",
        dark: "#0F172A",
        darkblue: "#222831",
        primary: "#14B8A6",
        textlight: "#E2E8F0",
        textmuted: "#94A3B8",
      },

      fontFamily: {
        sans: ["Roboto", "Inter", "sans-serif"],
      },

      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  safelist: [
    "border-white/20",
    "hover:border-white/50",
    "hover:shadow-white/30",
    "hover:from-white/10",
    "via-white/20",
    "text-white",
    "group-hover:text-white/90",
    "border-green-500/20",
    "hover:border-green-500/50",
    "hover:shadow-green-500/30",
    "hover:from-green-500/10",
    "via-green-400/20",
    "text-green-500",
    "group-hover:text-green-400",
    "border-indigo-500/20",
    "hover:border-indigo-500/50",
    "hover:shadow-indigo-500/30",
    "hover:from-indigo-500/10",
    "via-indigo-400/20",
    "text-indigo-500",
    "group-hover:text-indigo-400",
    "border-red-500/20",
    "hover:border-red-500/50",
    "hover:shadow-red-500/30",
    "hover:from-red-500/10",
    "via-red-400/20",
    "text-red-500",
    "group-hover:text-red-400",
  ],
  plugins: [],
};

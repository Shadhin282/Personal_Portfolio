/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
          colors: {
              primary: "#374151", // Dark slate gray
              "background-light": "#F9FAFB", // Very light gray
              "background-dark": "#111827", // Dark gray/black
              "nav-border-light": "#6B7280",
              "nav-border-dark": "#4B5563",
              "nav-text-light": "#374151",
              "nav-text-dark": "#E5E7EB",
              "nav-hover-light": "#F3F4F6",
              "nav-hover-dark": "#1F2937",
          },
          fontFamily: {
              display: ["Inter", "sans-serif"],
              sans: ["Inter", "sans-serif"],
          },
          borderRadius: {
              'pill': '9999px',
          },
           backgroundImage: {
              'gradient-text': 'linear-gradient(to right, #10b981, #3b82f6)',
              'gradient-border': 'linear-gradient(to right, #3b82f6, #10b981)',
          }
      },
    },
    plugins: [],
  }

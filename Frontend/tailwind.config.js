/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Public site's outer section width - wider than the app-wide 7xl
      // (1280px) so landing sections use more of the screen on large
      // desktops (1440-1920px) without touching any dashboard layout.
      maxWidth: {
        site: "1600px",
      },
      colors: {
        // Shared school identity: blue is the primary brand, red is reserved
        // for emphasis, while teal and amber remain meaningful status colors.
        navy: {
          50: "#edf5fa",
          100: "#d8e8f2",
          200: "#b9d4e5",
          300: "#829fb4",
          400: "#5d7b92",
          500: "#287fb4",
          600: "#226f9e",
          700: "#1c5f8d",
          800: "#174b70",
          900: "#123552",
        },
        school: {
          blue: "#287fb4",
          "blue-dark": "#1c5f8d",
          red: "#c6283d",
          "red-dark": "#a91f31",
        },
        teal: {
          50: "#eafafa",
          100: "#c7efef",
          500: "#2C7A7B",
          600: "#256867",
          700: "#1d5253",
        },
        amber: {
          50: "#fdf3e2",
          100: "#fae3b8",
          500: "#E8A33D",
          600: "#c98726",
        },
        // Muted supporting tones keep the school site within the same
        // navy, teal, and brass brand system as the portals.
        violet: {
          50: "#edf5fa",
          100: "#d8e8f2",
          400: "#5d9bc2",
          500: "#287fb4",
          600: "#226f9e",
          700: "#1c5f8d",
        },
        coral: {
          50: "#fceef0",
          100: "#f5d5da",
          400: "#dc7584",
          500: "#c6283d",
          600: "#a91f31",
        },
        surface: "#f4f7fa",
        // A cool, low-contrast neutral keeps long-form landing sections easy
        // to read while sharing the app's school-blue color temperature.
        paper: {
          DEFAULT: "#f4f8fb",
          dark: "#eaf1f6",
        },
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        // Public school-site display face only - a characterful serif for
        // headlines on the homepage, kept out of the dashboard app itself.
        serif: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(16, 30, 49, 0.06), 0 1px 3px 0 rgba(16, 30, 49, 0.08)",
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -15px rgba(40, 127, 180, 0.32)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, 6%) scale(1.08)" },
          "66%": { transform: "translate(-3%, -4%) scale(0.96)" },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(18px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        "drift-slow": "drift 26s ease-in-out infinite reverse",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        "marquee-reverse": "marquee 22s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
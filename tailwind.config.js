/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        light: {
          background: "#F5F5F5",
          "primary-text": "#2E2E2E",
          "secondary-text": "#6D6D6D",
          card: "#E0E0E0",
          border: "#D6D6D6",
          shadow: "#C4C4C4",
          "button-bg": "#2E2E2E",
          "button-text": "#FFFFFF",
          "text-hover": "#000000", // Warna teks saat dihover
          "button-hover-bg": "#1C1C1C", // Warna latar belakang tombol saat dihover
          "button-hover-text": "#FFFFFF", // Warna teks tombol saat dihover
        },
        dark: {
          background: "#121212",
          "primary-text": "#E4E4E4",
          "secondary-text": "#B8B8B8",
          card: "#1E1E1E",
          border: "#333333",
          shadow: "#2B2B2B",
          "button-bg": "#4F4F4F",
          "button-text": "#FFFFFF",
          "text-hover": "#FFFFFF", // Warna teks saat dihover
          "button-hover-bg": "#3A3A3A", // Warna latar belakang tombol saat dihover
          "button-hover-text": "#FFFFFF", // Warna teks tombol saat dihover
        },
      },
    },
  },
  plugins: [],
};

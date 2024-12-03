/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "430px",
        tabletPortrait: "640px",
        tabletLandscape: "768px",
        laptop: "1024px",
        largeLaptop: "1280px",
        desktop: "1536px",
        largeDesktop: "1920px",
      },
      fontSize: {
        "2xs": "10px",
        "3xs": "8px",
        "4xs": "6px",
      },
    },
  },
  plugins: [],
};

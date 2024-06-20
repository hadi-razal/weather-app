import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgImageSunny": "url('/bgImage.jpg')",
      },
      colors: {
        primaryColor: '#FAE2BD',
        secondaryColor: '#FF6B6B',
        primaryFontColor: '#EFAA82'
      }
    },
  },
  plugins: [],
};
export default config;

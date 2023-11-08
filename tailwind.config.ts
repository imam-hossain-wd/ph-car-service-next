import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  //customize theme
  theme: {
    extend: {
      colors: {
        primary: "#15191E",
        primaryHover: "#2066fc",
        secondary: "#BCEBCB",
        danger: "#FE6F7B",
        orange: "#FF9E76",
      },
      fontSize: {
        sm: ["12px", "16px"],
        md: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      spacing: {
        sm: "5px",
        md: "10px",
        lg: "15px",
        xl: "20px",
      },
    },
  },
  plugins: [],

  //default tailwindcss desable
  corePlugins: {
    preflight: false,
  },
  important: true,
};
export default config;

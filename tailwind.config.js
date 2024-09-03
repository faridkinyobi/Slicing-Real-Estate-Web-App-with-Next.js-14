/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1A80E5",
          "primary-content": "#fff",
          secondary: "#969696",
          "secondary-content": "#2C2C2C",
          accent: "#008c2b",
          "accent-content": "#fff",
          neutral: "#2C2C2C",
          "neutral-content": "#cececb",
          "base-100": "#fcfcfc",
          "base-200": "#dbdbdb",
          "base-300": "#bbbbbb",
          "base-content": "#2c2c2c",
          info: "#009dc2",
          "info-content": "#fff",
          success: "#019807",
          "info-content": "#fff",
          warning: "#f9ab00",
          "warning-content": "#fff",
          error:"#e50047",
          "error-content":"#fff",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

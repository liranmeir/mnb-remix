import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#dd54a4",
                   
          "secondary": "#f97082",
                   
          "accent": "#e4bafc",
                   
          "neutral": "#1a1826",
                   
          "base-100": "#e7e8f4",
                   
          "info": "#7d9cf7",
                   
          "success": "#26d99d",
                   
          "warning": "#965e03",
                   
          "error": "#f2406d",
                   }
      },
    ],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config


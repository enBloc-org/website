import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      size: {
        '128': '30rem',
      },
      colors: {
        'highlight-green': '#3CCCCB',
        'en-orange': '#ED8A01',
        'en-red': '#9B2226',
        'en-blue': '#0F49A0',
        'en-pink': '#C042A9',
        'en-green': '#218281',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slidein300: 'slidein 1s ease 300ms forwards',
        slidein500: 'slidein 1s ease 500ms forwards',
        slidein700: 'slidein 1s ease 700ms forwards',
      },
      padding: {
        'small-screen': '4.5rem',
        'medium-screen': '9rem',
        'large-screen': '10rem',
      },
      margin: {
        'stack-sm': '2.5rem',
        'stack-md': '5rem',
        'stack-lg': '10rem',
      },
    },
  },
  plugins: [],
};
export default config;

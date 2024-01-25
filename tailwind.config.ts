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
        'orange': '#ED8A01',
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
        'medium-screen': '9rem',
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

import type { Config } from 'tailwindcss'

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
        'orange': '#ED8A01'
      }
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#F0F0F0',
        black: '#171717',
        neutral: {
          300: '#dbdbd9',
          400: '#c1beb7',
          600: '#808080',
          650: '#717171',
          700: '#515151',
          800: '#2c2c2c',
          850: '#2b2b2b',
          900: '#222429',
        },
      },
      fontSize: {
        '12xl': [
          '15rem',
          {
            lineHeight: '1.2',
            letterSpacing: '0.03em',
          },
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;

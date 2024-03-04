import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,jsx,md,mdx,ts,tsx}',
    './components/**/*.{js,jsx,md,mdx,ts,tsx}',
    './data/**/*.{js,jsx,ts,tsx}',
    './examples/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        primary: {
          50: '#E7F2F6',
          100: '#CFE5ED',
          200: '#B7D8E3',
          300: '#9FCBDA',
          400: '#87BFD1',
          500: '#3E98B5',
          600: '#268BAC',
          700: '#0E7EA3',
          800: '#0A5872',
          900: '#084C62',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-in-out',
      },
    },
    fontFamily: {
      sans: [
        'var(--font-inter)',
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: [
        'var(--font-roboto-mono)',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
  },
};

export default config;

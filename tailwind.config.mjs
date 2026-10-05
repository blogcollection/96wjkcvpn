/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          text: '#111111',
          sub: '#666666',
          muted: '#8E8E93',
          border: '#EAEAEA',
          card: '#F7F7F8',
          cardHover: '#F2F2F4',
          accent: '#000000',
        },
      },
      fontFamily: {
        sans: [
          'PingFang SC',
          'Microsoft YaHei',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        'page': '1440px',
      },
      boxShadow: {
        'subtle': '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        'premium': '0 12px 36px 0 rgba(0, 0, 0, 0.06)',
        'float': '0 20px 48px -12px rgba(0, 0, 0, 0.12)',
        'capsule': '0 4px 14px 0 rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
};

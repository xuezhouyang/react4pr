import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7f5af0',
          glow: '#2cb1bc'
        }
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'grid-slate':
          'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)',
        'gradient-aurora':
          'conic-gradient(from 180deg at 50% 50%, rgba(127, 90, 240, 0.45), rgba(44, 177, 188, 0.4), rgba(14, 116, 144, 0.45), rgba(127, 90, 240, 0.45))'
      },
      boxShadow: {
        glow: '0 0 40px 0 rgba(44, 177, 188, 0.55)'
      }
    }
  },
  plugins: []
} satisfies Config;

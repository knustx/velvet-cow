/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main Theme Colors
        primary: '#D9AD77',      // Warm gold/tan
        secondary: '#563a0e',    // Dark brown
        light: '#F2F2F2',        // Light gray
        muted: '#8C8C8C',        // Medium gray
        dark: '#313131',         // Dark gray
        
        // Semantic Color Assignments
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          DEFAULT: '#D9AD77',
          foreground: '#563a0e',
        },
        border: '#8C8C8C',
        input: '#F2F2F2',
        ring: '#D9AD77',
      },
      fontFamily: {
        sans: ['var(--font-quattrocento)', 'serif'],
        serif: ['var(--font-cinzel)', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

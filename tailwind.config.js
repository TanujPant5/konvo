/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app.js",
    // Add any other files that use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        // Nordic Slate Theme
        'konvo-bg': '#1e293b',
        'konvo-surface': '#334155',
        'konvo-border': '#475569',
        'konvo-text': '#e2e8f0',
        'konvo-muted': '#94a3b8',
        'konvo-accent': '#a78bfa', // A slightly more vibrant purple
        'konvo-accent-vibrant': '#2dd4bf', // A new vibrant teal
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
       height: {
        'dvh': '100dvh',
        'svh': '100svh',
      },
    },
  },
  plugins: [],
}
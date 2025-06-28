/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
  colors: {
    lightbg: '#f9fafb',
    lightcard: '#ffffff',
    lighttext: '#1a1a1a',
    darkbg: '#0f1117',
    darkcard: '#1a1c23',
    darktext: '#f5f5f5',
    accent: '#6366f1', // Indigo-500
  }
}
},
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#020617',
          900: '#0b0f19',
          850: '#111827',
          800: '#1f2937',
          750: '#374151',
        }
      }
    },
  },
  plugins: [],
}

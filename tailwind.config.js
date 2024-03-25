/** @type {import('tailwindcss').Config} */
import tailwindForms from '@tailwindcss/forms'
export default {
  content: ['./resources/**/**/*.edge', './resources/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindForms],
}

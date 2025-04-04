/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A2E', /* 深蓝黑色作为主背景 */
        secondary: '#16213E', /* 次要背景色 - 深蓝色 */
        accent: '#0F3460', /* 蓝紫色作为强调色 */
        'accent-dark': '#0A2647', /* 深蓝色 */
        'accent-light': '#205295', /* 亮蓝色 */
        'dark-blue': '#144272', /* 深蓝色调 */
        'dark-purple': '#4c1d95', /* 深紫色 */
        'dark-indigo': '#312e81', /* 靛蓝色 */
        'drum-red': '#E94560', /* 鲜红色 */
        'drum-gold': '#FFD700', /* 金色 */
        'professional': '#3498DB', /* 专业级别的蓝色 */
        'future': '#9B59B6' /* 未来级别的紫色 */
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
        'glow': '0 0 15px rgba(124, 58, 237, 0.5)'
      }
    },
  },
  plugins: [],
}
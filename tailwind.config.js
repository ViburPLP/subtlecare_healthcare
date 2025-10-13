module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#0033A1", // blue-800
          50: "#EBF4FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#0033A1", // custom primary
          900: "#1E3A8A", // blue-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#020003", // gray-900
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
          700: "#374151", // gray-700
          800: "#1F2937", // gray-800
          900: "#020003", // custom secondary
        },
        // Accent Colors
        accent: "#FFFFFF", // white
        background: "#FAFBFC", // custom background
        surface: "#F5F7FA", // custom surface
        // Text Colors
        text: {
          primary: "#1A202C", // gray-800
          secondary: "#4A5568", // gray-600
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-600
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#48BB78", // green-500
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
          500: "#F59E0B", // yellow-500
        },
        error: {
          DEFAULT: "#E53E3E", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
        },
        // Border Colors
        border: "#E2E8F0", // gray-200
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'interactive': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'pricing': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      scale: {
        '102': '1.02',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-default': {
          'transition': '300ms ease-in-out',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
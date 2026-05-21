const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
        'golden-lg': '161.8%', // Golden ratio large
        'golden-sm': '61.8%', // Golden ratio small
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        golden: '1.618', // Golden ratio
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        manuscript: ['var(--font-crimson-pro)', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Deep Space Palette
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Electric Indigo
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1e1b4b', // Deepest Indigo
        },
        secondary: {
          50: '#f0abbc',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef', // Neon Fuchsia
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#4a044e',
        },
        // Custom Knowledge Colors (Refined)
        knowledge: {
          100: '#E3F2FD',
          200: '#90CAF9',
          300: '#42A5F5',
          400: '#1E88E5',
          500: '#00B4D8', // Electric Cyan
          600: '#0096C7',
          700: '#0077B6',
          800: '#023E8A',
          900: '#03045E', // Midnight
        },
        accent: colors.amber,
        emerald: colors.emerald,
        gray: colors.neutral,
        midnight: '#0B0F19', // Custom dark background
        'deep-space': '#02040A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      animation: {
        'quantum-fade': 'quantumFade 3s ease-in-out infinite',
        'quantum-pulse': 'quantumPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'quantum-float': 'quantumFloat 6s ease-in-out infinite',
        'quantum-glow': 'quantumGlow 4s ease-in-out infinite',
        'knowledge-flow': 'knowledgeFlow 8s linear infinite',
      },
      keyframes: {
        quantumFade: {
          '0%, 100%': { opacity: 0.3, filter: 'blur(4px)' },
          '50%': { opacity: 1, filter: 'blur(0)' },
        },
        quantumPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1, filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.02)', opacity: 0.95, filter: 'brightness(1.2)' },
        },
        quantumFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        quantumGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(99, 102, 241, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.6))' },
        },
        knowledgeFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')} !important`,
                textShadow: '0 0 8px rgba(99, 102, 241, 0.4)',
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '800',
              letterSpacing: '-0.025em',
              color: theme('colors.gray.900'),
              background: `linear-gradient(to right, ${theme('colors.primary.600')}, ${theme(
                'colors.secondary.500'
              )})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: '-0.025em',
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.midnight'),
              border: `1px solid ${theme('colors.primary.900')}`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            },
            code: {
              color: theme('colors.secondary.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            details: {
              backgroundColor: theme('colors.gray.50'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: `${theme('colors.primary.300')} !important`,
                textShadow: '0 0 12px rgba(99, 102, 241, 0.6)',
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              letterSpacing: '-0.025em',
              color: theme('colors.gray.100'),
              background: `linear-gradient(to right, ${theme('colors.primary.400')}, ${theme(
                'colors.secondary.400'
              )})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            h2: {
              letterSpacing: '-0.025em',
              color: theme('colors.gray.100'),
              background: `linear-gradient(to right, ${theme('colors.knowledge.300')}, ${theme(
                'colors.knowledge.500'
              )})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: '#0B0F19', // Midnight
              backgroundImage:
                'linear-gradient(145deg, rgba(11, 15, 25, 0.9), rgba(20, 25, 40, 0.9))',
              backdropFilter: 'blur(12px)',
              border: `1px solid ${theme('colors.primary.800')}`,
            },
            code: {
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

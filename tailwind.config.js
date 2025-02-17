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
        'golden-lg': '161.8%',    // Golden ratio large
        'golden-sm': '61.8%',     // Golden ratio small
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        'golden': '1.618',        // Golden ratio
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        manuscript: ['Crimson Pro', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.violet,    // Changed from indigo for more vibrancy
        accent: colors.amber,        // Warm accent color
        emerald: colors.emerald,
        gray: colors.neutral,
        knowledge: {
          100: '#E3F2FD',           // Light knowledge blue
          200: '#90CAF9',
          300: '#42A5F5',
          400: '#1E88E5',
          500: '#1565C0',           // Primary knowledge tone
          600: '#0D47A1',
          700: '#0A2472',
          800: '#061442',
          900: '#040D2C',
        },
      },
      animation: {
        'quantum-fade': 'quantumFade 3s ease-in-out infinite',
        'quantum-pulse': 'quantumPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'quantum-float': 'quantumFloat 4s ease-in-out infinite',
        'quantum-glow': 'quantumGlow 2s ease-in-out infinite',
        'knowledge-flow': 'knowledgeFlow 6s linear infinite',
        'manuscript-appear': 'manuscriptAppear 1s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        quantumFade: {
          '0%, 100%': { opacity: 0.2, filter: 'blur(8px)' },
          '50%': { opacity: 1, filter: 'blur(0)' },
        },
        quantumPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.9 },
        },
        quantumFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-10px) rotate(180deg)' },
        },
        quantumGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 16px rgba(59, 130, 246, 0.8))' },
        },
        knowledgeFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        manuscriptAppear: {
          '0%': { 
            opacity: 0,
            transform: 'translateY(10px) scale(0.95)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)'
          },
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
                textShadow: '0 0 8px rgba(59, 130, 246, 0.4)',
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.knowledge.700'),
              textShadow: '0 0 12px rgba(59, 130, 246, 0.5), 0 0 24px rgba(59, 130, 246, 0.3)',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.secondary.700'),
              textShadow: '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.knowledge.600'),
              textShadow: '0 0 8px rgba(59, 130, 246, 0.5)',
            },
            'h4,h5,h6': {
              color: theme('colors.secondary.600'),
              textShadow: '0 0 6px rgba(139, 92, 246, 0.4)',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1)',
              animation: 'quantumPulse 4s ease-in-out infinite',
            },
            code: {
              color: theme('colors.accent.500'),
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              animation: 'quantumGlow 3s ease-in-out infinite',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              borderLeft: `4px solid ${theme('colors.knowledge.400')}`,
            },
            hr: {
              borderColor: theme('colors.knowledge.300'),
              borderWidth: '2px',
              borderStyle: 'dashed',
              opacity: 0.7,
              animation: 'quantumFloat 6s ease-in-out infinite',
            },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.knowledge.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.knowledge.500'),
            },
            strong: {
              color: theme('colors.knowledge.700'),
              textShadow: '0 0 4px rgba(59, 130, 246, 0.3)',
            },
            blockquote: {
              color: theme('colors.knowledge.800'),
              borderLeftColor: theme('colors.knowledge.400'),
              borderLeftWidth: '4px',
              backgroundColor: theme('colors.knowledge.50'),
              borderRadius: '0.375rem',
              padding: '1rem 1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              animation: 'quantumPulse 6s ease-in-out infinite',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.accent.400'),
              '&:hover': {
                color: `${theme('colors.accent.300')} !important`,
                textShadow: '0 0 12px rgba(251, 191, 36, 0.4)',
              },
              code: { color: theme('colors.accent.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.accent.300'),
              textShadow: '0 0 16px rgba(251, 191, 36, 0.3), 0 0 32px rgba(251, 191, 36, 0.2)',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.emerald.300'),
              textShadow: '0 0 12px rgba(16, 185, 129, 0.3)',
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.accent.200'),
              textShadow: '0 0 10px rgba(251, 191, 36, 0.3)',
            },
            'h4,h5,h6': {
              color: theme('colors.emerald.200'),
              textShadow: '0 0 8px rgba(16, 185, 129, 0.3)',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
              animation: 'quantumPulse 4s ease-in-out infinite',
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              animation: 'quantumGlow 3s ease-in-out infinite',
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              borderLeft: `4px solid ${theme('colors.accent.500')}`,
            },
            hr: {
              borderColor: theme('colors.accent.700'),
              opacity: 0.7,
              animation: 'quantumFloat 6s ease-in-out infinite',
            },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.accent.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.accent.400'),
            },
            strong: {
              color: theme('colors.emerald.300'),
              textShadow: '0 0 8px rgba(16, 185, 129, 0.3)',
            },
            thead: {
              th: {
                color: theme('colors.accent.300'),
                backgroundColor: theme('colors.gray.700'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.accent.800'),
              },
            },
            blockquote: {
              color: theme('colors.accent.300'),
              borderLeftColor: theme('colors.accent.700'),
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              animation: 'quantumPulse 6s ease-in-out infinite',
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
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
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.indigo,
        amber: colors.amber,
        emerald: colors.emerald,
        gray: colors.neutral,
      },
      animation: {
        'trippy-fade': 'trippyFade 3s ease-in-out infinite',
        'trippy-pulse': 'trippyPulse 2s ease-in-out infinite',
        'trippy-float': 'trippyFloat 4s ease-in-out infinite',
      },
      keyframes: {
        trippyFade: {
          '0%, 100%': { opacity: 0, filter: 'blur(20px)' },
          '50%': { opacity: 1, filter: 'blur(0)' },
        },
        trippyPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        trippyFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(360deg)' },
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
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.primary.800'),
              textShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.secondary.700'),
              textShadow: '0 0 8px rgba(99, 102, 241, 0.5), 0 0 16px rgba(99, 102, 241, 0.3)',
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.primary.700'),
              textShadow: '0 0 6px rgba(59, 130, 246, 0.5), 0 0 12px rgba(59, 130, 246, 0.3)',
            },
            'h4,h5,h6': {
              color: theme('colors.secondary.600'),
              textShadow: '0 0 4px rgba(99, 102, 241, 0.5), 0 0 8px rgba(99, 102, 241, 0.3)',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)',
              animation: 'trippyFade 5s ease-in-out infinite',
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)',
              animation: 'trippyPulse 3s ease-in-out infinite',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)',
            },
            hr: {
              borderColor: theme('colors.primary.300'),
              borderWidth: '2px',
              borderStyle: 'dashed',
              animation: 'trippyFloat 6s linear infinite',
            },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.primary.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.primary.500'),
            },
            strong: {
              color: theme('colors.secondary.600'),
              textShadow: '0 0 4px rgba(99, 102, 241, 0.5), 0 0 8px rgba(99, 102, 241, 0.3)',
            },
            blockquote: {
              color: theme('colors.primary.800'),
              borderLeftColor: theme('colors.primary.400'),
              borderLeftWidth: '4px',
              backgroundColor: theme('colors.primary.50'),
              borderRadius: '0.25rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.amber.500'),
              '&:hover': {
                color: `${theme('colors.amber.400')} !important`,
              },
              code: { color: theme('colors.amber.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.amber.400'),
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.emerald.400'),
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.amber.300'),
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            },
            'h4,h5,h6': {
              color: theme('colors.emerald.300'),
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.4)',
              animation: 'trippyFade 5s ease-in-out infinite',
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.4)',
              animation: 'trippyPulse 3s ease-in-out infinite',
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.4)',
            },
            hr: {
              borderColor: theme('colors.amber.600'),
              borderWidth: '2px',
              borderStyle: 'dashed',
              animation: 'trippyFloat 6s linear infinite',
            },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.amber.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.amber.400'),
            },
            strong: {
              color: theme('colors.emerald.300'),
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            },
            thead: {
              th: {
                color: theme('colors.amber.300'),
                backgroundColor: theme('colors.gray.700'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.amber.700'),
              },
            },
            blockquote: {
              color: theme('colors.amber.300'),
              borderLeftColor: theme('colors.amber.600'),
              borderLeftWidth: '4px',
              backgroundColor: theme('colors.gray.800'),
              borderRadius: '0.25rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.4)',
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
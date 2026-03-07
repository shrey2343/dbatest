/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'linkedin': '#0072b1',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '720px',
            color: '#334155',
            lineHeight: '1.8',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              fontSize: '1.125rem',
              lineHeight: '1.8',
            },
            h2: {
              fontSize: '2rem',
              fontWeight: '800',
              marginTop: '2.5em',
              marginBottom: '1em',
              color: '#0f172a',
              lineHeight: '1.3',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '0.75em',
              color: '#1e293b',
              lineHeight: '1.4',
            },
            h4: {
              fontSize: '1.25rem',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              color: '#334155',
            },
            ul: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              paddingLeft: '1.5em',
            },
            ol: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              paddingLeft: '1.5em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
              fontSize: '1.125rem',
              lineHeight: '1.75',
            },
            'li::marker': {
              color: '#ea580c',
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: '#ea580c',
              paddingLeft: '1.5em',
              marginTop: '2em',
              marginBottom: '2em',
              backgroundColor: '#fff7ed',
              padding: '1.5rem',
              borderRadius: '0.5rem',
            },
            strong: {
              fontWeight: '700',
              color: '#0f172a',
            },
            a: {
              color: '#ea580c',
              textDecoration: 'none',
              fontWeight: '600',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            },
            table: {
              marginTop: '2em',
              marginBottom: '2em',
              width: '100%',
              borderCollapse: 'collapse',
            },
            'thead th': {
              backgroundColor: '#f8fafc',
              fontWeight: '700',
              padding: '0.75rem',
              borderBottom: '2px solid #e2e8f0',
            },
            'tbody td': {
              padding: '0.75rem',
              borderBottom: '1px solid #e2e8f0',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

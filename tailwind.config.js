/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [],
	theme: {
		extend: {
			container: {
				center: true,
			},
			fontFamily: {
				sans: ['Public Sans', 'sans-serif'],
			},
			fontWeight: {
				w300: 300,
				w400: 400,
				w700: 700,
			},
			colors: {
				primary: {
					1: '#2d314d',
					2: '#126ca7',
					3: '#3790d0',
					red: '#dc2626',
					gray: '#9ca3af',
					gray2: '#6b7280',
					10: 'hsl(233, 12%, 85%)',
					11: 'hsl(0, 0%, 88%)',
				},
				neutral: {
					1: 'hsl(233, 8%, 62%)',
					2: 'hsl(220, 16%, 96%)',
					3: 'hsl(0, 0%, 98%)',
					4: 'hsl(0, 0%, 100%)',
					10: 'hsl(233, 8%, 78%)',
					11: 'hsl(233, 8%, 38%)',
					20: 'hsl(220, 16%, 12%)',
					21: '#21242c',
					30: 'hsl(0, 0%, 10%)',
					40: 'hsl(220, 16%, 12%)',
				},
			},
		},
	},
	plugins: [],
}

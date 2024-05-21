/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: ['"Space Grotesk"', 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#6aaf19',
				gray: {
					100: '#F3F3F4',
					200: '#EBEBEC',
					300: '#DCDCDD',
					400: '#B9B9BA',
					500: '#99999A',
					600: '#707071',
					700: '#5D5D5E',
					800: '#3E3E3F',
					900: '#1D1D1E'
				}
			}
		}
	},
	plugins: []
};

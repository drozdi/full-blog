/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
	safelist: [
		'text-primary',
		'text-secondary',
		'text-accent',
		'text-positive',
		'text-negative',
		'text-info',
		'text-warning',
		'text-surface',
	],
	theme: {
		extend: {
			colors: {
				link: '#000',
				primary: '#1976D2',
				secondary: '#0e0f0f',
				accent: '#9C27B0',
				positive: '#4caf50',
				negative: '#dc3545',
				info: '#2196f3',
				warning: '#fb8c00',
				surface: '#15171e',
				dark: '#15171e',
				dimmed: 'rgba(0,0,0,0.2)',
				separator: 'rgba(0, 0, 0, .15)',
				overlay: 'rgba(0, 0, 0, .7)',
			},
			borderRadius: {
				inherit: 'inherit',
			},
			gridTemplateRows: {
				layout: 'minmax(min-content, auto) minmax(auto, 1fr) minmax(min-content, auto)',
			},
			gridTemplateColumns: {
				layout: 'minmax(min-content, auto) minmax(auto, 1fr) minmax(min-content, auto)',
			},
			transitionProperty: {
				border: 'border',
				width: 'width',
				height: 'height',
				spacing: 'margin, padding',
			},
			borderWidth: {
				3: '3px',
				9: '9px',
				10: '10px',
			},
			boxShadow: {
				header: '0px -2px 17px #000',
				footer: '0px 2px 17px #000',
			},
		},
	},
	plugins: [],
};

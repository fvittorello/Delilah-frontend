import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#fc885c',
		},
		secondary: {
			main: '#3addda',
		},
		error: {
			main: '#ef4a5a',
		},
		orange: {
			light: '#ff8f67',
			main: '#ff7342',
			dark: '#b2502e',
		},
		warning: {
			main: '#ffc641',
		},
		info: {
			main: '#a9b9f7',
		},
		success: {
			main: '#30d694',
		},
		paleGray: {
			light: '#97a9b5',
			main: '#7d94a3',
			dark: '#576772',
		},
	},
	shape: {
		borderRadius: '0.125rem',
	},
});

export default theme;

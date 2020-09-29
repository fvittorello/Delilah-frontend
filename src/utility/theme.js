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
			main: '#ff7342',
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
			main: '#7d94a3',
		},
	},
	shape: {
		borderRadius: '0.125rem',
	},
});

export default theme;

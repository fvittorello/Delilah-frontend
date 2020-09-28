import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
	primary: {
		main: '#fc885c',
	},
	secondary: {
		main: '#3addda',
	},
	// paleBlack: {
	//     main: '#414d55'
	// }
};

const shape = {
	borderRadius: '50%',
};

const theme = createMuiTheme({
	palette,
	shape,
});

export default theme;

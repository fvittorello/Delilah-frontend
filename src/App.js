import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from 'style_utils/theme';
import './App.css';

// import Login from 'views/Login';
import RegisterView from 'views/Register';

function App() {
	// console.log(theme);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RegisterView />
		</ThemeProvider>
	);
}

export default App;

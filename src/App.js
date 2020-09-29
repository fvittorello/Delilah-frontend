import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from 'utility/theme';
import './App.css';

// import Login from 'views/Login';
import RegisterView from 'views/Register';

function App() {
	// return <div>Hello World React</div>;
	// console.log(theme);
	return (
		<ThemeProvider theme={theme}>
			<RegisterView />
		</ThemeProvider>
	);
}

export default App;

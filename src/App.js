import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { GlobalStyle } from 'style_utils/globalStyle';
import theme from 'style_utils/theme';

// import Login from 'views/Login';
import RegisterView from 'views/Register';

function App() {
	// console.log(theme);
	return (
		<ErrorBoundary>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyle />
				<RegisterView />
			</ThemeProvider>
		</ErrorBoundary>
	);
}

export default App;

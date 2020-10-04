import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ErrorBoundary } from 'components/ErrorBoundary';
import RegisterView from 'views/Register';
import { GlobalStyle } from 'style_utils/globalStyle';
import theme from 'style_utils/theme';

class Falla extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(({ counter }) => ({
			counter: counter + 1,
		}));
	}

	render() {
		if (this.state.counter === 2) {
			// Simulate a JS error
			throw new Error('I crashed!');
		}
		return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
	}
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ErrorBoundary>
				<CssBaseline />
				<GlobalStyle />
				<RegisterView />
				<Falla />
			</ErrorBoundary>
		</ThemeProvider>
	);
}

export default App;

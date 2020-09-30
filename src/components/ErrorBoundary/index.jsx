import React from 'react';
import { Typography } from '@material-ui/core';
import { ErrorContainer } from './styles';

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		console.error(error, errorInfo);
	}
	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<ErrorContainer>
					<Typography variant='h2' component='h1' color='primary' align='center'>
						Something went wrong.
					</Typography>
				</ErrorContainer>
			);
		}
		return this.props.children;
	}
}

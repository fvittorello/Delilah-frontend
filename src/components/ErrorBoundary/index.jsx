import React from 'react';
import { Typography } from '@material-ui/core';
import { ErrorContainer } from './styles';

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error,
			errorInfo,
		});
	}
	render() {
		if (this.state.errorInfo) {
			return (
				<ErrorContainer>
					<Typography variant='h2' component='h1' color='textSecondary'>
						Something went wrong...
					</Typography>
					<Typography variant='h4' component='h2' color='error'>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</Typography>
				</ErrorContainer>
			);
		}
		return this.props.children;
	}
}

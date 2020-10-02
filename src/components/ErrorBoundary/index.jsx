import React from 'react';
import { Typography } from '@material-ui/core';
import { ErrorContainer } from './styles';

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo);
		this.setState({
			errorInfo,
		});
	}
	render() {
		if (this.state.hasError) {
			return (
				<ErrorContainer>
					<Typography variant='h2' component='h1' color='primary' align='left'>
						Something went wrong.
					</Typography>
					<Typography variant='h3' component='h2' color='warning' align='left'>
						{this.state.errorInfo}
					</Typography>
				</ErrorContainer>
			);
		}
		return this.props.children;
	}
}

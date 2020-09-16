import React from 'react';
import './login.style.css';

// Components
import LoginForm from 'components/LoginForm';

export default function Login() {
	return (
		<div className='login-page'>
			<h2 children='Login page' />
			<LoginForm />
		</div>
	);
}

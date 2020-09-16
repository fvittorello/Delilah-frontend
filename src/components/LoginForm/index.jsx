import React from 'react';

import './login-form.style.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default function LoginForm() {
	return (
		<form className='login-form'>
			<TextField variant='outlined' id='user-input' label='Username or Email' placeholder='user@mail.com' required />
			<TextField variant='outlined' id='user-pass' label='Password' type='password' placeholder='********' required />
			<Button variant='contained' color='primary' size='large'>
				Submit
			</Button>
			<Button variant='outlined' color='primary' size='large'>
				Register
			</Button>
		</form>
	);
}

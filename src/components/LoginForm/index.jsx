import React from 'react';

import './login-form.style.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default function LoginForm() {
	return (
		<form className='login-form'>
			<TextField id='standard-basic' label='Username or Email' placeholder='user@mail.com' required />
			<TextField id='standard-basic' label='Password' type='password' placeholder='********' required />
			<Button variant='contained' color='primary'>
				Submit
			</Button>
		</form>
	);
}

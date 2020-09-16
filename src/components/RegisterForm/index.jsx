import React from 'react';

import './register-form.style.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default function RegisterForm() {
	return (
		<form method='post' className='register-form'>
			<TextField variant='outlined' id='username' label='Username' placeholder='user123' required />
			<TextField variant='outlined' id='fullname' label='Fullname' type='text' placeholder='Freddie Mercury' required />
			<TextField variant='outlined' id='user-pass' label='Email' type='text' placeholder='freddie@queen.com' required />
			<TextField variant='outlined' id='user-phone' label='Phone' type='text' placeholder='+44 7712345678' required />
			<TextField
				variant='outlined'
				id='user-address'
				label='Address'
				type='text'
				placeholder='1 Logan PIKensingont, London'
				required
			/>
			<TextField variant='outlined' id='user-pass' label='Password' type='password' placeholder='********' required />
			<Button variant='contained' color='primary' size='large'>
				Create account
			</Button>
			<Button variant='outlined' color='primary' size='large'>
				Log In
			</Button>
		</form>
	);
}

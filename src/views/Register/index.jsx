import React from 'react';

import RegisterForm from 'components/RegisterForm';

export default function RegisterView() {
	return (
		<div className='register-page'>
			<h2 children='Delilah Restó' />
			<RegisterForm />
			<button
				type='button'
				onClick={() => {
					throw new Error('error test');
				}}
			/>
		</div>
	);
}

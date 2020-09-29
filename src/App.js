import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Login from 'views/Login';
import RegisterView from 'views/Register';

function App() {
	// return <div>Hello World React</div>;
	return (
		<>
			<CssBaseline />
			<RegisterView />
		</>
	);
}

export default App;

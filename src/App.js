import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Route } from 'react-router-dom';
import JobsList from './screens/jobs';
import Header from './screens/jobs/header';
import WeekdayLogo from './assets/logo.png';
import Colors from './helpers/colors';

function App() {
	// redirect to home page, for now
	const redirectToHome = () => {
		if (window.location.pathname === '/home') return;

		window.location.pathname = '/home';
	};

	useEffect(() => {
		redirectToHome();
	}, []);

	return (
		<Route path="/home" exact>
			<Box component="section" height="100vh" sx={{ p: 2 }}>
				<Box
					component="div"
					sx={{ padding: 1, marginBottom: 2, borderBottom: 1, borderColor: Colors.grey200 }}
				>
					<img src={WeekdayLogo} alt="logo" style={{ width: 200 }} />
				</Box>
				<Header />
				<JobsList />
			</Box>
		</Route>
	);
}

export default App;

import JobsList from './screens/jobs';
import React from 'react';
import Box from '@mui/material/Box';
import Header from './screens/jobs/header';

function App() {
  return (
    <Box component="section" height={'100vh'} sx={{ p: 2, border: '1px dashed grey' }}>
      <Header />
      <JobsList />
    </Box>
  );
}

export default App;

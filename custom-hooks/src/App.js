import React from 'react'
import './App.css'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'
import TBaseForm from './components/TBaseForm'
import UserForm from './components/UserForm'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function App() {
	return (
		<Box className="box">
        <Grid container className="grid" justify="center" height="10rem">
		<div className="App">
			{/* <DocTitleOne />
			<DocTitleTwo /> */}
			<TBaseForm/> 
			 <UserForm />
		</div>
		</Grid>
    </Box>
	)
}

export default App

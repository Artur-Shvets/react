import React, { cloneElement, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialogs/Dialog/Dialog';
import { getDialogs, getPosts } from './data';

const element1 = (
	<main>
		<p>There's nothing here!</p>
	</main>
);

function App(props) {
	const [dialogsData, setDialogsData] = useState(getDialogs);

	const sendMessage = (input, id) => {
		const cloneDialogsData = [...dialogsData];
		const index = cloneDialogsData.findIndex(dialog => dialog.id === id);
		cloneDialogsData[index].messages.push(input);
		setDialogsData(cloneDialogsData);
	};

	return (
		<div className='app-wrapper'>
			<Header />
			<div className='app-wrapper__content'>
				<Routes>
					<Route path='/' element={<NavBar />}>
						<Route
							path='/dialogs'
							element={<Dialogs dialogsData={dialogsData} />}
						>
							<Route
								path=':dialogsId'
								element={
									<Dialog dialogsData={dialogsData} sendMessage={sendMessage} />
								}
							/>
							<Route index element={element1}></Route>
						</Route>
						<Route path='/profile' element={<Profile posts={getPosts} />} />
						<Route path='/users' element={<Users />} />
						<Route index element={element1} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;

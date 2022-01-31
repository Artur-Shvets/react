import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';
import Messages from './components/Dialogs/Messages/Messages';
import { getDialogs, getDialogItem, getPosts } from './data';

const element1 = (
	<main>
		<p>There's nothing here!</p>
	</main>
);

function App(props) {
	return (
		<div className='app-wrapper'>
			<Header />
			<div className='app-wrapper__content'>
				<Routes>
					<Route path='/' element={<NavBar />}>
						<Route path='/dialogs' element={<Dialogs dialogs={getDialogs} />}>
							<Route
								path=':dialogsId'
								element={<Messages dialogItem={getDialogItem} />}
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

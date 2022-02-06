import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialogs/Dialog/Dialog';
import Counter from './components/Counter/Counter';

const element1 = (
  <main>
    <p>Выберите, кому хотели бы написать</p>
  </main>
);

export default function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='/dialogs' element={<Dialogs />}>
              <Route path=':dialogsId' element={<Dialog />} />
              <Route index element={element1}></Route>
            </Route>
            <Route path='/profile' element={<Profile />} />
            <Route path='/users' element={<Users />} />
            <Route path='/counter' element={<Counter />} />
            <Route index element={element1} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper__content">
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='/Dialogs' element={<Dialogs store={props.store} />} />
            <Route path='/Profile' element={<Profile store={props.store} />} />
            <Route path='/Users' element={<Users />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

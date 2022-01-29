import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='/Dialogs' element={<DialogsContainer store={props.store} />} />
            <Route path='/Profile' element={<ProfileContainer store={props.store} />} />
            <Route path='/Users' element={<UsersContainer />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

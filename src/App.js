import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Options from './components/Options/Options';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<Dialogs
              state={props.state.dialogsPage}
              dispatch={props.dispatch} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Options />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

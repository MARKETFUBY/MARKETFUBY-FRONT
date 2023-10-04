import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import './styles/global.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/member/login' element={<Login />} />
        </Routes>
    );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import './styles/global.css';
import Cart from './pages/Cart';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/member/login' element={<Login />} />
            <Route path='/member/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    );
}

export default App;

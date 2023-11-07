import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import './styles/global.css';
import Cart from './pages/Cart';
import MyPage from './pages/MyPage';
import Order from './components/MyPage/Order';
import Review from './components/MyPage/Review';
import Inquiry from './components/MyPage/Inquiry';
import NewProduct from './pages/NewProduct';
import Benefit from './pages/Benefit';
import Best from './pages/Best';
import TimeSales from './pages/TimeSales';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/member/login' element={<Login />} />
            <Route path='/member/signup' element={<SignUp />} />
            <Route path='/cart' element={<Cart />} />
            <Route
                path='/mypage/order'
                element={<MyPage rightSection={<Order />} />}
            />
            <Route
                path='/mypage/review'
                element={<MyPage rightSection={<Review />} />}
            />
            <Route
                path='/mypage/inquiry'
                element={<MyPage rightSection={<Inquiry />} />}
            />
            <Route path='/new-product' element={<NewProduct />} />
            <Route path='/benefit' element={<Benefit />} />
            <Route path='/best' element={<Best />} />
            <Route path='/time-sales' element={<TimeSales />} />
            <Route path='/search' element={<Search />} />
            <Route path='/goods/:id' element={<ProductDetail />} />
        </Routes>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Cart from './pages/Cart';
import ItemDetail from './pages/ItemDetail';
import Login from './pages/Login';
import ItemAll from './pages/ItemAll';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ScrollToTop from './Hooks/ScrollToTop';
import SignUp from './pages/SignUp';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ItemType } from './types';
import { GlobalStyle, Margin } from './App.style';

export default function App() {
    const [data, setData] = useState<ItemType[]>([]);

    useEffect(() => {
        axios
            .get('https://ainruthpai.github.io/imgSrc/shoeshop/item/Data.json')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <GlobalStyle />
            <Header />
            <Margin />
            <Routes>
                <Route path='/shoeshop' element={<MainPage data={data} />} />
                <Route path='/shoeshop/itemall' element={<ItemAll data={data} />} />
                <Route path='/shoeshop/detail/:id' element={<ItemDetail data={data} />} />
                <Route path='/shoeshop/cart' element={<Cart />} />
                <Route path='/shoeshop/login' element={<Login />} />
                <Route path='/shoeshop/signup' element={<SignUp />} />
                <Route path='/shoeshop/*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

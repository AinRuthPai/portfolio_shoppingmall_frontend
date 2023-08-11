import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Data } from "./db/Data";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import ItemDetail from "./pages/ItemDetail";
import Login from "./pages/Login";
import ItemAll from "./pages/ItemAll";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import SignUp from "./pages/SignUp";

export default function App() {
  const data = Data;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Header />
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

const GlobalStyle = createGlobalStyle`

:root {
  /* size */
  --footer-height: 10rem;
  --nav-height: 4rem;
  
  /* color */
  --white: #fff;
  --black: #3d3d3d;
  --gray: #f4f4f4;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  max-width: 100%;
}

body {
  position: relative;
  width: 100%;
  margin: 0 auto ;
  text-align: center;
  font-family: 'Pretendard-Regular';
  animation: fadein 2s;
  padding-bottom: var(--footer-height);


  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */

  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
`;

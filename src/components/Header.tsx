import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { NavContainer, NavOverlay, NavMenu, NavMobile, NavLink } from './style/Header.style';

export default function Header() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const targetRef: any = useRef(null);
    let prevScrollTop = 0;

    function toggleMenuOpen() {
        setIsOpen(!isOpen);
    }

    function clickMenu() {
        setIsOpen(false);
    }

    function handleScroll() {
        let nextScrollTop = window.pageYOffset || 0;
        if (nextScrollTop > prevScrollTop) {
            // 스크롤 내릴 때 실행
            // targetRef.current.style.translate = "0 -64px";
            targetRef.current.style.display = 'none';
        } else if (nextScrollTop < prevScrollTop) {
            // 스크롤 올릴 때 실행
            // targetRef.current.style.translate = "0 0";
            targetRef.current.style.display = 'flex';
        }
        prevScrollTop = nextScrollTop;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener('scroll', handleScroll);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <NavContainer ref={targetRef}>
            <NavOverlay open={isOpen} onClick={toggleMenuOpen} />
            <h1 onClick={() => navigate('/shoeshop')}>S H O E</h1>
            <header>
                <NavMenu open={isOpen}>
                    <NavLink to='/shoeshop/' onClick={clickMenu}>
                        메인 화면
                    </NavLink>

                    <NavLink to='/shoeshop/itemall' onClick={clickMenu}>
                        전체 상품
                    </NavLink>

                    <NavLink to='/shoeshop/cart' onClick={clickMenu}>
                        장바구니
                    </NavLink>

                    <NavLink to='/shoeshop/login' onClick={clickMenu} className='loginButton'>
                        로그인
                    </NavLink>
                </NavMenu>
            </header>
            <NavMobile>
                <span
                    className='material-symbols-outlined'
                    onClick={() => {
                        navigate(-1);
                    }}>
                    arrow_back
                </span>
                <span className='material-symbols-outlined' onClick={toggleMenuOpen}>
                    menu
                </span>
            </NavMobile>
        </NavContainer>
    );
}

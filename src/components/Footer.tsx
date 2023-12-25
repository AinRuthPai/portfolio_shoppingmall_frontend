import { FooterBox, ToTopBtn, FooterContainer } from './style/Footer.style';

export default function Footer() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <FooterContainer>
            <FooterBox>
                <div>
                    <h1>ShoeShop</h1>
                    <p>Fasion Shoes Collection</p>
                </div>

                <div>
                    <span>소개</span> | <span>운영 정책</span> | <span>개인정보 처리 및 취급방침</span>
                </div>

                <p>Copyright © ShoeShop All Rights Reserved</p>
            </FooterBox>
            <ToTopBtn>
                <span className='material-symbols-outlined' onClick={scrollToTop}>
                    expand_less
                </span>
            </ToTopBtn>
        </FooterContainer>
    );
}

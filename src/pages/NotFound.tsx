import { useNavigate } from 'react-router-dom';
import { BtnTamplate } from './style/Cart.style';
import { NotFoundContainer } from './style/NotFound.style';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <NotFoundContainer>
            <h2>404 Not Found</h2>
            <span>요청하신 페이지를 찾을 수 없습니다.</span>
            <BtnTamplate onClick={() => navigate('/shoeshop')}>돌아가기</BtnTamplate>
        </NotFoundContainer>
    );
}

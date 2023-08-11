import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BtnTamplate } from "./Cart";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <h2>404 Not Found</h2>
      <span>요청하신 페이지를 찾을 수 없습니다.</span>
      <BtnTamplate onClick={() => navigate("/shoeshop")}>돌아가기</BtnTamplate>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 90vh;

  span {
    margin: 1rem 0;
  }
`;

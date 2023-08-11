import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store";
import Swal from "sweetalert2";

export default function Item({ data }: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function linkToDetail() {
    navigate(`/shoeshop/detail/${data.id}`);
  }

  return (
    <ItemCardContainer>
      <div>
        <ItemImg src={process.env.PUBLIC_URL + `/img/item/${data.id}/main_1.jpg`} onClick={linkToDetail} />
      </div>
      <h5 onClick={linkToDetail}>{data.brand}</h5>
      <h5 onClick={linkToDetail}>{data.title}</h5>
      <p onClick={linkToDetail}>￦ {data.price}</p>
      <span
        className='material-symbols-outlined'
        onClick={() => {
          dispatch(addItem({ id: data.id, name: data.title, price: data.price, count: 1 }));
          Swal.fire({
            icon: "success",
            title: "완료!",
            text: "장바구니에 상품이 추가되었습니다.",
          });
        }}>
        add_shopping_cart
      </span>
    </ItemCardContainer>
  );
}

const ItemCardContainer = styled.div`
  position: relative;
  width: 60%;
  margin: 1rem auto;
  padding: 0.7rem 0;
  transition: 0.1s ease;
  border-radius: 10px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
  }

  span {
    position: absolute;
    bottom: 5rem;
    right: 0;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: var(--gray);
  }

  h5,
  p,
  span {
    cursor: pointer;
    margin-bottom: 0.3rem;
  }

  h5:nth-child(2) {
    color: rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: 15px;
  }

  @media screen and (min-width: 700px) {
    width: 80%;
  }
`;

export const ItemImg = styled.img`
  width: 10rem;
  height: 13rem;
  object-fit: contain;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    width: 11rem;
    height: 14rem;
  }
`;

import styled from "styled-components";
import Swal from "sweetalert2";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Menu } from "./MainPage";
import { BtnTamplate } from "./Cart";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

export default function ItemDetail({ data }: any) {
  let { id } = useParams();

  const findItem = data.find((item: any) => {
    return item.id === Number(id);
  });

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  return (
    <DetailContainer>
      <DetailItemBox>
        <DetailImg src={process.env.PUBLIC_URL + `/img/item/${findItem.id}/main_1.jpg`} />
        <div>
          <p>{findItem.brand}</p>
          <h3>{findItem.title}</h3>
          <span>￦ {findItem.price}</span>
        </div>
        <div>
          <button
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              } else {
                setCount(1);
              }
            }}>
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => {
              setCount(count + 1);
            }}>
            +
          </button>
        </div>
      </DetailItemBox>
      <MobileDetailFooter>
        <span>{`￦ ${findItem.price * count}`}</span>
        <CartBtn
          onClick={() => {
            dispatch(addItem({ id: findItem.id, name: findItem.title, price: findItem.price, count: count }));
            Swal.fire({
              icon: "success",
              title: "완료!",
              text: "장바구니에 상품이 추가되었습니다.",
            });
          }}>
          장바구니 담기
        </CartBtn>
      </MobileDetailFooter>
      <MenuLine />
      <ItemDetailContent>
        <h4>상품 상세정보</h4>
        {findItem.img.map((data: any, i: any) => (
          <img src={data} alt=''></img>
        ))}
      </ItemDetailContent>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const DetailItemBox = styled.div`
  width: 100%;

  > div {
    margin-top: 1rem;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 2rem;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 2rem 0 0;
    font-size: 18px;

    span {
      padding: 0.5rem;
      font-size: 14px;
    }

    button {
      border: none;
      padding: 0.3rem 1rem;
      font-size: 18px;
    }
  }

  h3 {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.7rem 0;
    color: rgba(0, 0, 0, 0.5);
  }

  span {
    font-weight: 800;
  }
`;

const DetailImg = styled.img`
  width: 14rem;
  height: 16rem;
  margin: 2rem auto 0;
  object-fit: contain;
`;

const MobileDetailFooter = styled.nav`
  position: fixed;
  z-index: 95;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px -2px 2px 1px rgba(0, 0, 0, 0.5);

  span {
    padding-left: 2rem;
  }
`;

const ItemDetailContent = styled.div`
  margin: 2rem auto 0;
  text-align: center;
  min-height: 100vh;

  img {
    width: 80%;
    margin-top: 1.5rem;
  }
`;

const CartBtn = styled(BtnTamplate)`
  width: 50%;
  padding: 1.2rem 1.7rem;
`;

const MenuLine = styled(Menu)`
  margin: 1rem auto 0;
`;

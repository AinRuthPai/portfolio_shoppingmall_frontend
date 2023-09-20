import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, removeCount, removeItem } from "../store";

export default function Cart() {
  const dispatch = useDispatch();
  const state: any = useSelector((state) => state);

  const [isChecked, setIsChecked] = useState<any>(true);
  const [checkedList, setCheckedList] = useState<any>(state.cart);

  const itemPrice = checkedList.map((state: any) => {
    return Object.values<any>(state)[2] * state.count;
  });

  const totalPrice = itemPrice.reduce((a: any, b: any) => a + b, 0);

  useEffect(() => {
    setCheckedList(state.cart);
  }, [state.cart]);

  function checkedItemHandler(value: any, isChecked: boolean) {
    if (isChecked) {
      setCheckedList((prev: any) => [...prev, value]);
      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item: any) => item !== value));

      return;
    }

    return;
  }

  function deleteCheckItem() {
    dispatch(removeItem(state.cart[checkedList]));
  }

  function checkHandler(e: React.ChangeEvent<HTMLInputElement>, value: any) {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  }

  function checkedItemAllHandler(isChecked: boolean) {
    if (isChecked) {
      setCheckedList(state.cart);
    } else {
      setCheckedList([]);
    }
  }

  function checkAllHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(!isChecked);
    checkedItemAllHandler(e.target.checked);
  }

  const onClickPayment = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP }: any = window;
    IMP.init("imp03610474"); //테스트 가맹점

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "phone", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: totalPrice, // 결제금액
      name: `${state.cart[0].name} 외 ${state.cart.length - 1} 건`, // 주문명
      buyer_name: "", // 구매자 이름
      buyer_tel: "", // 구매자 전화번호
      buyer_email: "", // 구매자 이메일
      buyer_addr: "", // 구매자 주소
      buyer_postcode: "", // 구매자 우편번호
      m_redirect_url: "http://localhost:3000/shoeshop",
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  const callback = (response: any) => {
    const { success, error_msg } = response;
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <CartContainer>
      <CartCheckWrapper>
        <input type='checkbox' onChange={(e) => checkAllHandler(e)} checked={checkedList.length === state.cart.length ? true : false} />

        <span>전체 {state.cart.length}개</span>
        <span onClick={deleteCheckItem}>선택 삭제</span>
      </CartCheckWrapper>

      {state.cart.map((item: any, i: any) => {
        return (
          <CartItemWrapper>
            <div>
              <input type='checkbox' checked={checkedList.includes(item)} onChange={(e) => checkHandler(e, item)}></input>
              <CartImg src={process.env.PUBLIC_URL + `/img/item/${item.id}/main_1.jpg`} />
            </div>
            <div>
              <span>{state.cart[i].name}</span>
              <CountWrapper>
                <CountBtn
                  onClick={() => {
                    dispatch(removeCount(i));
                  }}>
                  <span className='material-symbols-outlined'>remove</span>
                </CountBtn>
                <span>{state.cart[i].count}</span>
                <CountBtn
                  onClick={() => {
                    dispatch(addCount(i));
                  }}>
                  <span className='material-symbols-outlined'>add</span>
                </CountBtn>
              </CountWrapper>
            </div>
            <div>
              <DeleteIcon
                onClick={() => {
                  dispatch(removeItem(state.cart[i]));
                }}>
                <span className='material-symbols-outlined'>delete</span>
              </DeleteIcon>
              <span>{`${state.cart[i].price * state.cart[i].count} 원`}</span>
            </div>
          </CartItemWrapper>
        );
      })}

      <CartPrice>
        <span>결제 예정 금액</span>
        <p>{`${totalPrice} 원`}</p>
      </CartPrice>
      <BtnTamplate>
        <span>{`￦ ${totalPrice}`}</span>
        <span onClick={onClickPayment}>주문하기</span>
      </BtnTamplate>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 14rem);
  margin: 4rem auto 0;
  background-color: rgba(238, 239, 243, 0.5);
`;

const CartCheckWrapper = styled.div`
  width: 100%;
  height: 4rem;
  margin: 1rem auto;
  padding: 0.7rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;

  span:last-child {
    position: absolute;
    right: 0;
    margin-right: 1rem;
  }
`;

const CartPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  padding: 0 2rem;
  background-color: white;

  > span {
    font-size: 14px;
  }

  > p {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const BtnTamplate = styled.button`
  margin: 5%;
  padding: 1rem 2rem;
  background-color: rgb(117, 50, 249);
  color: var(--white);
  border: none;
  cursor: pointer;
  border-radius: 6px;

  > span:first-child {
    font-size: 1rem;
    font-weight: 600;
    margin-right: 1.5rem;
    letter-spacing: 1px;
  }
`;

const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  background-color: white;
  padding: 0.7rem;

  > div:first-child {
    display: flex;
  }

  > div:nth-child(2),
  div:nth-child(3) {
    display: flex;
    flex-direction: column;
  }

  > div:nth-child(3) {
    align-items: flex-end;
    position: absolute;
    right: 0;
    margin-right: 1rem;
  }
`;

const CountWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const CountBtn = styled.button`
  margin: 0 0.5rem;
  padding: 2px 4px;
  background-color: var(--gray);
  border: none;
  cursor: pointer;

  span {
    font-size: 1.2rem;
  }
`;

const CartImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const DeleteIcon = styled.button`
  padding: 0;
  margin-bottom: 1rem;
  background-color: inherit;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

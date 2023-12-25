import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, removeCount, removeItem } from '../store';
import {
    CartContainer,
    CartCheckWrapper,
    CartPrice,
    BtnTamplate,
    CartItemWrapper,
    CountWrapper,
    CountBtn,
    CartImg,
    DeleteIcon,
} from './style/Cart.style';

export default function Cart() {
    const dispatch = useDispatch();
    const state: any = useSelector((state) => state);

    // 개별 선택 체크박스의 상태관리
    const [isChecked, setIsChecked] = useState<boolean>(true);

    // 전체 선택 체크박스의 상태관리
    const [checkedList, setCheckedList] = useState<string[]>(state.cart);

    // 개별 아이템 가격 계산
    const itemPrice = checkedList.map((state: any) => {
        return Object.values<any>(state)[2] * state.count;
    });

    // 선택된 아이템들의 전체 가격 계산
    const totalPrice = itemPrice.reduce((a: number, b: number) => a + b, 0);

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
        dispatch(removeItem(checkedList));
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

    // 결제 로직
    const onClickPayment = () => {
        /* 1. 가맹점 식별하기 */
        const { IMP }: any = window;
        IMP.init('imp03610474'); //테스트 가맹점

        /* 2. 결제 데이터 정의하기 */
        const data = {
            pg: 'html5_inicis', // PG사
            pay_method: 'phone', // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
            amount: totalPrice, // 결제금액
            name: `${state.cart[0].name} 외 ${state.cart.length - 1} 건`, // 주문명
            buyer_name: '', // 구매자 이름
            buyer_tel: '', // 구매자 전화번호
            buyer_email: '', // 구매자 이메일
            buyer_addr: '', // 구매자 주소
            buyer_postcode: '', // 구매자 우편번호
            m_redirect_url: 'http://localhost:3000/shoeshop',
        };
        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
    };

    /* 3. 콜백 함수 정의하기 */
    const callback = (response: any) => {
        const { success, error_msg } = response;
        if (success) {
            alert('결제 성공');
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    };

    return (
        <CartContainer>
            <CartCheckWrapper>
                <input
                    type='checkbox'
                    onChange={(e) => checkAllHandler(e)}
                    checked={checkedList.length === state.cart.length ? true : false}
                />

                <span>전체 {state.cart.length}개</span>
                <span onClick={deleteCheckItem}>선택 삭제</span>
            </CartCheckWrapper>

            {state.cart.map((item: any, i: any) => {
                return (
                    <CartItemWrapper>
                        <div>
                            <input
                                type='checkbox'
                                checked={checkedList.includes(item)}
                                onChange={(e) => checkHandler(e, item)}></input>
                            <CartImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/item/${item.id}/main_1.jpg`} />
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

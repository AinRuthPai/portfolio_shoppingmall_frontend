import Swal from 'sweetalert2';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';
import { Props, ItemType } from '../types';
import {
    DetailContainer,
    DetailItemBox,
    DetailImg,
    MobileDetailFooter,
    ItemDetailContent,
    CartBtn,
    MenuLine,
    ItemDetailImg,
} from './style/ItemDetail.style';
import NotFound from './NotFound';

export default function ItemDetail({ data }: Props): JSX.Element {
    let { id } = useParams();

    const findItem = data.find((item: ItemType) => {
        return item.id === Number(id);
    });

    const [count, setCount] = useState<number>(1);
    const dispatch = useDispatch();

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(1);
        }
    };

    if (!findItem) return <NotFound />;

    return (
        <DetailContainer>
            <DetailItemBox>
                <DetailImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/item/${findItem.id}/main_1.jpg`} />
                {/* <DetailImg src={process.env.PUBLIC_URL + `/img/item/${findItem.id}/main_1.jpg`} /> */}
                <div>
                    <p>{findItem.brand}</p>
                    <h3>{findItem.title}</h3>
                    <span>￦ {findItem.price}</span>
                </div>
                <div>
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                </div>
            </DetailItemBox>
            <MobileDetailFooter>
                <span>{`￦ ${findItem.price * count}`}</span>
                <CartBtn
                    onClick={() => {
                        dispatch(
                            addItem({ id: findItem.id, name: findItem.title, price: findItem.price, count: count })
                        );
                        Swal.fire({
                            icon: 'success',
                            title: '완료!',
                            text: '장바구니에 상품이 추가되었습니다.',
                        });
                    }}>
                    장바구니 담기
                </CartBtn>
            </MobileDetailFooter>
            <MenuLine />
            <ItemDetailContent>
                <h4>상품 상세정보</h4>
                <ItemDetailImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/item/${findItem.id}/detail.jpg`} />
                {/* {findItem.map((data: any, i: any) => {
                    return <ItemDetailImg src={data} alt=''></ItemDetailImg>;
                })} */}
            </ItemDetailContent>
        </DetailContainer>
    );
}

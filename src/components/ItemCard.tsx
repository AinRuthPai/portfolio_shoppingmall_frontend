import { useNavigate } from 'react-router-dom';
import { ItemCardContainer, ItemImg } from './style/ItemCard.style';

export default function Item({ data }: any) {
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
        </ItemCardContainer>
    );
}

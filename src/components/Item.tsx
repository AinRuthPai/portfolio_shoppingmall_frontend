import { useNavigate } from 'react-router-dom';
import { ItemImg } from './style/ItemCard.style';
import { ItemContainer } from './style/Item.style';

export default function Item({ data }: any) {
    const navigate = useNavigate();

    function linkToDetail() {
        navigate(`/shoeshop/detail/${data.id}`);
    }

    return (
        <ItemContainer onClick={linkToDetail}>
            <div>
                <ItemImg src={`https://ainruthpai.github.io/imgSrc/shoeshop/item/${data.id}/main_1.jpg`} />
            </div>
            <div>
                <h5>{data.brand}</h5>
                <h5>{data.title}</h5>
                <p>￦ {data.price}</p>
            </div>
        </ItemContainer>
    );
}

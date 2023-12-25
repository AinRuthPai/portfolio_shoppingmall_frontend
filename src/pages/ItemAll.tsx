import Item from '../components/Item';
import { ItemType, Props } from '../types';
import { ItemContainer, MenuLine } from './style/ItemAll.style';

export default function ItemAll({ data }: Props) {
    return (
        <>
            <MenuLine>
                <span>전체 상품</span>
                <span>{`>`}</span>
            </MenuLine>
            <ItemContainer>
                {data.map((data: ItemType) => (
                    <Item data={data} key={data.id} />
                ))}
            </ItemContainer>
        </>
    );
}

export interface ItemType {
    id: number;
    brand: string;
    title: string;
    price: number;
}

export interface Props {
    data: ItemType[];
}

export interface CartItemType extends ItemType {
    count: number;
}

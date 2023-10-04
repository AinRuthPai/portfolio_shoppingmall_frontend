const publicUrl = process.env.PUBLIC_URL;

export interface Props {
    data: DataType[];
}

export interface DataType {
    id: number;
    brand: string;
    title: string;
    price: number;
    img: Array<string>;
}

export const Data: DataType[] = [
    {
        id: 1,
        brand: 'BUNNY MON AMOUR',
        title: '몽아미에 소가죽 여성 스니커즈 블루',
        price: 288000,
        img: [
            publicUrl + `/img/item/1/detail_1.jpg`,
            publicUrl + `/img/item/1/detail_2.jpg`,
            publicUrl + `/img/item/1/detail_3.jpg`,
            publicUrl + `/img/item/1/detail_4.jpg`,
            publicUrl + `/img/item/1/detail_5.jpg`,
        ],
    },

    {
        id: 2,
        brand: 'FORMEL CAMELE',
        title: '천연 소가죽 곡선 라인 퍼플 콤비 그레이 스니커즈',
        price: 63000,
        img: [
            publicUrl + `/img/item/2/detail_1.jpg`,
            publicUrl + `/img/item/2/detail_2.jpg`,
            publicUrl + `/img/item/2/detail_3.jpg`,
            publicUrl + `/img/item/2/detail_4.jpg`,
            publicUrl + `/img/item/2/detail_5.jpg`,
            publicUrl + `/img/item/2/detail_6.jpg`,
            publicUrl + `/img/item/2/detail_7.jpg`,
            publicUrl + `/img/item/2/detail_8.jpg`,
            publicUrl + `/img/item/2/detail_9.jpg`,
            publicUrl + `/img/item/2/detail_10.jpg`,
            publicUrl + `/img/item/2/detail_11.jpg`,
            publicUrl + `/img/item/2/detail_12.jpg`,
            publicUrl + `/img/item/2/detail_13.jpg`,
            publicUrl + `/img/item/2/detail_14.jpg`,
            publicUrl + `/img/item/2/detail_15.jpg`,
        ],
    },

    {
        id: 3,
        brand: 'FORMEL CAMELE',
        title: '소가죽 콤비 레이스업 베이지 스니커즈',
        price: 44000,
        img: [
            publicUrl + `/img/item/3/detail_1.jpg`,
            publicUrl + `/img/item/3/detail_2.jpg`,
            publicUrl + `/img/item/3/detail_3.jpg`,
            publicUrl + `/img/item/3/detail_4.jpg`,
            publicUrl + `/img/item/3/detail_5.jpg`,
            publicUrl + `/img/item/3/detail_6.jpg`,
            publicUrl + `/img/item/3/detail_7.jpg`,
            publicUrl + `/img/item/3/detail_8.jpg`,
            publicUrl + `/img/item/3/detail_9.jpg`,
            publicUrl + `/img/item/3/detail_10.jpg`,
            publicUrl + `/img/item/3/detail_11.jpg`,
            publicUrl + `/img/item/3/detail_12.jpg`,
            publicUrl + `/img/item/3/detail_13.jpg`,
        ],
    },

    {
        id: 4,
        brand: 'KUHO',
        title: '코튼 컨버스 시그니처 스니커즈 블랙',
        price: 120000,
        img: [
            publicUrl + `/img/item/4/detail_1.jpg`,
            publicUrl + `/img/item/4/detail_2.jpg`,
            publicUrl + `/img/item/4/detail_3.jpg`,
            publicUrl + `/img/item/4/detail_4.jpg`,
            publicUrl + `/img/item/4/detail_5.jpg`,
            publicUrl + `/img/item/4/detail_6.jpg`,
            publicUrl + `/img/item/4/detail_7.jpg`,
            publicUrl + `/img/item/4/detail_8.jpg`,
            publicUrl + `/img/item/4/detail_9.jpg`,
        ],
    },

    {
        id: 5,
        brand: 'test',
        title: 'Baby shoes',
        price: 120000,
        img: [
            publicUrl + `/img/item/13/detail_1.jpg`,
            publicUrl + `/img/item/13/detail_2.jpg`,
            publicUrl + `/img/item/13/detail_3.jpg`,
        ],
    },
    {
        id: 6,
        brand: 'test2',
        title: 'Red Herring',
        price: 120000,
        img: [
            publicUrl + `/img/item/13/detail_1.jpg`,
            publicUrl + `/img/item/13/detail_2.jpg`,
            publicUrl + `/img/item/13/detail_3.jpg`,
        ],
    },
    // {
    //   id: 7,
    //   title: "Shoes",
    //   price: 140000,
    //   img: [publicUrl + `/img/item/13/detail_1.jpg`, publicUrl + `/img/item/13/detail_2.jpg`, publicUrl + `/img/item/13/detail_3.jpg`],
    // },
    // {
    //   id: 8,
    //   title: "Martin",
    //   price: 150000,
    //   img: [publicUrl + `/img/item/13/detail_1.jpg`, publicUrl + `/img/item/13/detail_2.jpg`, publicUrl + `/img/item/13/detail_3.jpg`],
    // },
    // {
    //   id: 9,
    //   title: "Custom",
    //   price: 160000,
    //   img: [publicUrl + `/img/item/13/detail_1.jpg`, publicUrl + `/img/item/13/detail_2.jpg`, publicUrl + `/img/item/13/detail_3.jpg`],
    // },
    // {
    //   id: 10,
    //   title: "Shoes",
    //   price: 140000,
    //   img: [publicUrl + `/img/item/13/detail_1.jpg`, publicUrl + `/img/item/13/detail_2.jpg`, publicUrl + `/img/item/13/detail_3.jpg`],
    // },
    // {
    //   id: 11,
    //   title: "Martin",
    //   price: 150000,
    //   img: [publicUrl + `/img/item/13/detail_1.jpg`, publicUrl + `/img/item/13/detail_2.jpg`, publicUrl + `/img/item/13/detail_3.jpg`],
    // },
    // {
    //   id: 12,
    //   title: "Custom",
    //   price: 160000,
    //   img: [publicUrl + `/img/item/13/detail_1.jpg`, publicUrl + `/img/item/13/detail_2.jpg`, publicUrl + `/img/item/13/detail_3.jpg`],
    // },
    // {
    //   id: 13,
    //   title: "Test",
    //   price: 110000,
    //   img: [publicUrl + `/img/item/13/detail_1.jpg`, publicUrl + `/img/item/13/detail_2.jpg`, publicUrl + `/img/item/13/detail_3.jpg`],
    // },
];

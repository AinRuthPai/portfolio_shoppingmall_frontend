import React, { useEffect } from 'react';
import Item from '../components/ItemCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { ItemType, Props } from '../types';
import { MainPageBanner, SortingItemWrapper, Menu, NewItemContainer } from './style/MainPage.style';
import { useInView } from 'react-intersection-observer';

export default function MainPage({ data }: Props) {
    const scrollRef = useRef<HTMLInputElement>(null);
    const todayItem: ItemType[] = [];
    const newItem: ItemType[] = [];
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-30px 0px',
    });

    // 랜딩 페이지의 오늘의 아이템을 랜덤하게 6가지 출력
    if (data.length >= 6) {
        for (let i = 0; i < 6; i++) {
            if (i >= 0) {
                const ran = data[Math.floor(Math.random() * data.length)];
                if (todayItem.indexOf(ran) === -1) {
                    todayItem.push(ran);
                } else {
                    i--;
                }
            }
        }
    }

    // 랜딩 페이지의 새로운 아이템을 출력, 가장 마지막에 추가된 4가지 신상품을 보여준다.
    if (data.length >= 4) {
        for (let x = 4; x > 0; x--) {
            if (x > 0) {
                newItem.push(data[data.length - x]);
            }
        }
    }

    function scrollToElement() {
        if (scrollRef.current !== null) scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <MainPageBanner>
                <span>FASHION</span>
                <span>SHOES</span>
                <span>COLLECTION</span>
                <span className='material-symbols-outlined' onClick={scrollToElement}>
                    expand_more
                </span>
            </MainPageBanner>

            <Menu ref={scrollRef}>
                <span>추천 상품</span>
                <span className='material-symbols-outlined'>arrow_forward_ios</span>
            </Menu>
            <SortingItemWrapper>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1360: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}>
                    {todayItem.map((data: ItemType) => {
                        return (
                            <SwiperSlide>
                                <Item data={data} key={data.id} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </SortingItemWrapper>

            <Menu>
                <span>NEW PRODUCT</span>
                <span className='material-symbols-outlined'>arrow_forward_ios</span>
            </Menu>

            <div>
                <NewItemContainer ref={ref} className={`${inView ? 'opacity' : ''}`}>
                    {newItem.map((data: ItemType) => {
                        return <Item data={data} key={data.id} />;
                    })}
                </NewItemContainer>
            </div>
        </>
    );
}

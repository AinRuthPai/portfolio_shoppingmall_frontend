import styled from "styled-components";
import bannerImg from "../img/main_img.jpg";
import Item from "../components/ItemCard";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { Link } from "react-router-dom";
import MainImg from "../components/MainImg";

export default function MainPage({ data }: any) {
  const todayItem = [];
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

  const scrollRef = useRef<any>(null);

  function scrollToElement() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
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
              slidesPerView: 2, //브라우저가 768보다 클 때
              spaceBetween: 20,
            },
            1360: {
              slidesPerView: 4, //브라우저가 1024보다 클 때
              spaceBetween: 20,
            },
          }}>
          {todayItem.map((data: any) => {
            return (
              <SwiperSlide>
                <Item data={data} key={data.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SortingItemWrapper>
      <Menu>
        <span>컬렉션</span>
        <span className='material-symbols-outlined'>arrow_forward_ios</span>
      </Menu>
      <MainImg />
    </>
  );
}

const MainPageBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  height: calc(100vh - 4rem);

  /* height: 90vh; */
  margin: 5rem auto 0;
  padding-bottom: 16px;
  color: var(--black);
  font-size: 2.5rem;
  background-image: url(${bannerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  > span:first-child {
    margin-top: 4rem;
    margin-left: 10%;
    animation: fadeInDown 1s;
  }
  > span:nth-child(2) {
    margin-left: 15%;
    animation: fadeInDown 2s;
  }
  > span:nth-child(3) {
    margin-left: 20%;
    animation: fadeInDown 3s;
  }
  > span:last-child {
    font-size: 3rem;
    margin: 4rem auto 0;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    background-position: 10%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: calc(100vh - 4rem);
    margin-top: 4rem;
    background-position: 10%;
    font-size: 2rem;

    > span:first-child {
      margin-top: 3rem;
    }
  }
`;

export const SortingItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  .swiper-wrapper,
  .swiper-slide {
    width: 350px;

    @media screen and (min-width: 768px) {
      width: 650px;
    }

    @media screen and (min-width: 1024px) {
      width: 1350px;
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  position: relative;
  width: 80%;
  margin: 3rem auto;
  padding: 6px 16px;
  font-size: 24px;
  border-bottom: 2px solid var(--black);
  text-align: left;

  > span:last-child {
    position: absolute;
    right: 0;
  }

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export const LinkDefaultStyle = styled(Link)`
  text-decoration: none;
  color: blue;
`;

import styled from "styled-components";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <FooterBox>
        <div>
          <h1>ShoeShop</h1>
          <p>Fasion Shoes Collection</p>
        </div>

        <div>
          <span>소개</span> | <span>운영 정책</span> | <span>개인정보 처리 및 취급방침</span>
        </div>

        <p>Copyright © ShoeShop All Rights Reserved</p>
      </FooterBox>
      <ToTopBtn>
        <span className='material-symbols-outlined' onClick={scrollToTop}>
          expand_less
        </span>
      </ToTopBtn>
    </>
  );
}

const FooterBox = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: var(--footer-height);
  margin-bottom: 2rem;
  padding: 0.5rem;
  background-color: var(--black);
  color: var(--white);

  div {
    margin: 0.5rem;
  }

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    > h1 {
      margin-right: 0.5rem;
      font-size: 1.35rem;
    }

    > p {
      color: aqua;
    }
  }

  span {
    margin: 4px 6px;
    cursor: pointer;
  }

  > p {
    color: var(--white);
  }
`;

const ToTopBtn = styled.button`
  position: fixed;
  z-index: 95;
  bottom: 0;
  right: 0;
  margin: 0 1rem 5.5rem 0;
  border: none;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.5);
  background-color: rgba(238, 239, 243, 0.9);
  cursor: pointer;

  span {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ItemImg } from "./ItemCard";

export default function Item({ data }: any) {
  const navigate = useNavigate();

  function linkToDetail() {
    navigate(`/shoeshop/detail/${data.id}`);
  }

  return (
    <ItemContainer onClick={linkToDetail}>
      <div>
        <ItemImg src={process.env.PUBLIC_URL + `/img/item/${data.id}/main_1.jpg`} />
      </div>
      <div>
        <h5>{data.brand}</h5>
        <h5>{data.title}</h5>
        <p>￦ {data.price}</p>
      </div>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  background-color: white;

  > div:last-child {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: 0.5rem;

    h5 {
      margin-bottom: 1rem;
    }

    h5:first-child {
      color: rgba(0, 0, 0, 0.6);
    }

    p {
      font-size: 15px;
    }
  }
`;

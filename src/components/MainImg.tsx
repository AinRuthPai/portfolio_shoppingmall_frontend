import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Test() {
  return (
    <>
      <ImgContainer>
        <Fade left>
          <ImgBox src={process.env.PUBLIC_URL + `/img/main/main_1.jpg`} alt=''></ImgBox>
        </Fade>
        <Fade right>
          <ImgBox src={process.env.PUBLIC_URL + `/img/main/main_2.jpg`} alt=''></ImgBox>
        </Fade>
        <Fade left>
          <ImgBox src={process.env.PUBLIC_URL + `/img/main/main_3.jpg`} alt=''></ImgBox>
        </Fade>
      </ImgContainer>
    </>
  );
}

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const ImgBox = styled.img`
  width: 90%;
  height: auto;
`;

export default Test;

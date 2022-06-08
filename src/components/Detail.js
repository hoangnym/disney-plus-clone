import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src={process.env.PUBLIC_URL + "/images/bao.jpg"} />
      </Background>
      <ImageTitle>
        <img src={process.env.PUBLIC_URL + "/images/bao.jpg"} />
      </ImageTitle>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.75;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div``;

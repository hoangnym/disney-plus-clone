import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src={process.env.PUBLIC_URL + "/images/cta-logo-one.svg"} />
        <SignUp>Get all there</SignUp>
        <Description>Stories you'd expect + Stories you wouldn't</Description>
        <CTALogoTwo src={process.env.PUBLIC_URL + "/images/cta-logo-two.png"} />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("${process.env.PUBLIC_URL +
      "/images/login-background.jpg"}");
    content: "";
    position: absolute;
    no-repeat: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  min-width: 80%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 14px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  text-transform: capitalize;
`;

const CTALogoTwo = styled.img``;

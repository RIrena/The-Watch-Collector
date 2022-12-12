import styled from "styled-components";

export const Container = styled.div`
  color: white;

  @media screen and (max-width: 760px) {
    padding: 90px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 30px;
`;

export const Heading = styled.h1`
  margin-bottom: 70px;
  font-size: 44px;
  text-align: center;
  line-height: 1.5;
  font-weight: 600;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const TopLine = styled.p`
  color: black;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 30px;
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;
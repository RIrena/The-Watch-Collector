import styled from "styled-components";

export const Heading = styled.h1`
  margin-bottom: 40px;
  font-size: 44px;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: white;
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

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  text-align: center;
  line-height: 24px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;
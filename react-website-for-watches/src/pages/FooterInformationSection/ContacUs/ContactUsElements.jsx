import styled from "styled-components";

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

export const BtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #03181c;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #fff;
  text-decoration: none;
  font-size: ${({ fontBig }) => (fontBig ? "24px" : "18px")};
  outline: none;
  border: 1px solid #03181c;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  inline-size: -webkit-fill-available;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #db995a;
  }
`;

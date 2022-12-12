import styled from "styled-components";

export const Container = styled.div`
  color: black;

  @media screen and (max-width: 760px) {
    padding: 90px 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-right: 10px;
`;

export const ImgWrap = styled.div`
  max-width: 70%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 10px 100px 10px 0;
  padding-right: 0;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 30px;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #03181c;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 30px" : "10px 25px")};
  color: #fff;
  text-decoration: none;
  font-size: ${({ fontBig }) => (fontBig ? "16px" : "14px")};
  outline: none;
  border: 1px solid #03181c;
  cursor: pointer;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #db995a;
  }
`;
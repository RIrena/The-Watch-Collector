import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 760px) {
    padding: 90px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`}
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
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 30px;
`;

export const TextInput = styled.p`
  margin-top: 35px;
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

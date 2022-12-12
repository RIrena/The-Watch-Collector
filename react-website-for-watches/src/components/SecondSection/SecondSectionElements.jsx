import styled from "styled-components";

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  text-align: left;
  line-height: 1.1;
  font-weight: 600;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Button = styled(LinkRouter)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #03181c;
  text-decoration: none;
  font-size: ${({ fontBig }) => (fontBig ? "24px" : "18px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #db995a;
    color: #03181c;
  }
`;

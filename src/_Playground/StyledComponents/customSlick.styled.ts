import { theme } from "GlobalStyles";
import styled from "@emotion/styled";

export const CustomArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: auto !important;
  height: auto !important;
  transition: all ease 0.4s;
  &::before,
  &::after {
    content: "";
  }
  & > * {
    transition: all ease 0.4s;
  }
  &:hover > * {
    color: ${theme.palette.secondary.main};
    transition: all ease 0.4s;
  }
`;
export const CustomSlickPrevArrow = styled(CustomArrow)(`
  left: 2%;
  &:hover > * {
    transform: translateX(10%); 
  }
`);

export const CustomSlickNextArrow = styled(CustomArrow)`
  right: 2%;
  &:hover > * {
    transform: translateX(-10%);
  }
`;
export const CustomSlickDots = styled("button")`
  padding: 0 !important;
  width: auto !important;
  height: auto !important;
  transition: all ease 0.4s;
  bottom: 50px;
  & > * {
    transition: all ease 0.4s;
  }
  &::before {
    width: auto !important;
    height: auto !important;
    content: "" !important;
  }

  &:hover > * {
    color: ${theme.palette.secondary.dark};
    transition: all ease 0.4s;
  }
`;

import { theme } from "GlobalStyles";
// import styled from "@emotion/styled";
import styled from "@emotion/styled/macro";
import { Button, Box, Menu } from "@mui/material";

export const ButtonPlay = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: transparent;
  border: 5px solid ${theme.palette.secondary.light};
  border-radius: 50%;
  cursor: pointer;
  transition: all ease 0.4s;
  & > * {
    color: ${theme.palette.secondary.light};
  }
  &:hover {
    border: 5px solid ${theme.palette.secondary.main};
    transition: all ease 0.4s;
  }
  &:hover > * {
    color: ${theme.palette.secondary.main};
    transition: all ease 0.4s;
  }
  @media screen and (max-width: 768px) {
    display: "none";
  }
`;
export const TrailerModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  @media screen and (max-width: 768px) {
    width: 500px;
    height: 350px;
  }
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 200px;
  }
`;
//HEADER
export const HeaderAside = styled(Menu)`
  background-color: rgba(0, 0, 0, 0.5);
  & > div {
    top: -2rem !important;
    left: 0 !important;
  }
  ul {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 65%;
    max-width: 400px;
    margin: 0;
    padding: 0;
    li {
      padding: 2rem;
      &:hover {
        background-color: ${theme.palette.secondary.dark};
        color: white;
      }
      &:first-of-type {
        background-color: ${theme.palette.secondary.dark};
        height: 30%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
//BANNER
export const BannerBox = styled.div`
  padding-top: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
//MOVIES SHOWING

export const TitleText = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${theme.palette.secondary.contrastText};
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.4rem;
`;

export const DescText = styled(TitleText)`
  -webkit-line-clamp: 2;
  font-size: 1rem;
  font-weight: 500;
`;

export const ButtonDetail = styled(Button)`
  background-color: ${theme.palette.secondary.light};
  color: ${theme.palette.secondary.contrastText};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0.5rem;
  padding: 1rem 0;
  &:hover {
    background-color: ${theme.palette.secondary.main};
  }
`;
export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: linear-gradient(to top, #000, transparent 100%);
  transition: all 0.4s;
  border-radius: 4px;
  z-index: 10;
`;

export const CardBox = styled(Box)`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  &:hover ${CardOverlay} {
    opacity: 1;
  }
  & ${ButtonPlay} {
    top: calc(50% - 40px);
  }
`;

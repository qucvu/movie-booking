import { theme } from "GlobalStyles";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
export const BgDetailBlur = styled.div`
  background: linear-gradient(
    to bottom,
    #000,
    ${theme.palette.paper.main} 100%
  );
  /* filter: blur(10px);
  -webkit-filter: blur(10px); */
  /* height: 100%;
  width: 100%; */
  /* position: absolute;
  top: 0;
  left: 0;
  z-index: -1000; */
`;
// Breadcrumb
export const BreadcrumbText = styled(Typography)`
  color: ${theme.palette.primary.contrastText};
  &:hover {
    color: ${theme.palette.secondary.light};
  }
`;
//Banner

import React, { Fragment, useState } from "react";

import {
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Stack,
  // Link,
} from "@mui/material";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import MenuIcon from "@mui/icons-material/Menu";
import { HeaderAside } from "_Playground/StyledComponents/home.styled";
import { NavLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import Logo from "Components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";

const pages = [
  { name: "Lịch chiếu", id: "schedule" },
  { name: "Cụm rạp", id: "theater" },
  { name: "Tin tức", id: "news" },
  { name: "Ứng dụng", id: "app" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

type Props = {};

const Header = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ height: "5rem" }} color="primary">
      <Container sx={{ height: "100%" }}>
        <Toolbar disableGutters sx={{ height: "100%" }}>
          <NavLink to={"/"}>
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Logo />
            </Box>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <HeaderAside
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <NavLink to={"/"}>
                  <Box
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <Logo />
                  </Box>
                </NavLink>
              </MenuItem>
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    scroller.scrollTo(page.id, {
                      duration: 0,
                      smooth: true,
                      offset: -70,
                    });
                    handleCloseNavMenu();
                  }}
                >
                  <Typography
                    sx={{
                      m: 2,
                      // color: "primary.contrastText",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </HeaderAside>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Typography
                sx={{
                  m: 2,
                  color: "primary.contrastText",
                  "&:hover": {
                    color: "secondary.main",
                  },
                  cursor: "pointer",
                }}
                key={index}
              >
                <LinkScroll
                  to={page.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                >
                  {page.name}
                </LinkScroll>
              </Typography>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            ) : (
              <Stack direction="row">
                <NavLink to={"/form/sign-in"}>
                  <Typography
                    sx={{
                      m: 2,
                      color: "primary.contrastText",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    Đăng nhập
                  </Typography>
                </NavLink>
                <NavLink to={"/form/sign-up"}>
                  <Typography
                    sx={{
                      m: 2,
                      color: "primary.contrastText",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    Đăng ký
                  </Typography>
                </NavLink>
              </Stack>
            )}

            <HeaderAside
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </MenuItem>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </HeaderAside>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

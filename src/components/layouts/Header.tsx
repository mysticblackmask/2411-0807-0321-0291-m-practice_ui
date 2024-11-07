import React, { FC, ChangeEvent, ReactNode } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Switch,
} from "@mui/material";
import {
  Menu,
  Search,
  AccountCircle,
  Mail,
  Notifications,
  More,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  MtagSearch,
  MtagAppBar,
  SearchIconWrapper,
  StyledInputBase,
} from "../styles/Index";
import { HeaderHooks } from "../hooks/Index";
import { useAppSelector } from "../../redux/store";
import { MouseClickFunction, LayoutProps } from "../../types/Index";
import { handleSearch, handleLog } from "../../redux/reducer&action/action";

const LayoutHeader: FC<LayoutProps> = ({ open, handleDrawer }) => {
  const [
    menuId,
    renderMenu,
    mobileMenuId,
    renderMobileMenu,
    menuOpen,
    mobileMenuOpen,
    color,
    badge,
  ] = HeaderHooks(null) as [
    string,
    ReactNode,
    string,
    ReactNode,
    MouseClickFunction,
    MouseClickFunction,
    any,
    any
  ];
  const dispatch = useDispatch();
  const isLogined = useAppSelector((state) => state.auth.isAuthenticated);
  const handleClick = (open: number) => {
    if (open < 2) {
      handleDrawer(open + 1);
    } else {
      handleDrawer(0);
    }
  };
  return (
    <>
      <MtagAppBar
        position="fixed"
        color={color}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              handleClick(open);
            }}
            sx={[{ mr: 2 }]}
            disabled={isLogined ? false : true}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <MtagSearch>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={(
                event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                dispatch(handleSearch(event.target.value));
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </MtagSearch>
          <Box sx={{ flexGrow: 1 }} />
          <Switch
            color="default"
            onChange={() => {
              dispatch(handleLog());
            }}
            aria-label="login switch"
          />
          {isLogined ? (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color={badge}>
                    <Mail />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color={badge}>
                    <Notifications />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={menuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={mobileMenuOpen}
                  color="inherit"
                >
                  <More />
                </IconButton>
              </Box>
            </>
          ) : null}
        </Toolbar>
      </MtagAppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default LayoutHeader;

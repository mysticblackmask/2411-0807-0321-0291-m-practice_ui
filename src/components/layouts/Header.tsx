import React, { FC, ReactNode } from "react";
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
import { HeaderHooks } from "../hooks/Index";
import { MouseClickFunction, LayoutProps } from "../../types/Index";
import {
  MtagSearch,
  MtagAppBar,
  SearchIconWrapper,
  StyledInputBase,
} from "../styles/Index";
import { handleLog } from "../../redux/reducer&action/action";

const LayoutHeader: FC<LayoutProps> = ({ open, handleDrawer }) => {
  const [
    menuId,
    renderMenu,
    mobileMenuId,
    renderMobileMenu,
    handleProfileMenuOpen,
    handleMobileMenuOpen,
  ] = HeaderHooks(null) as [
    string,
    ReactNode,
    string,
    ReactNode,
    MouseClickFunction,
    MouseClickFunction
  ];
  const dispatch = useDispatch();
  const handle = (open: number) => {
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
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              handle(open);
            }}
            sx={[{ mr: 2 }]}
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
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
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <More />
            </IconButton>
          </Box>
        </Toolbar>
      </MtagAppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default LayoutHeader;

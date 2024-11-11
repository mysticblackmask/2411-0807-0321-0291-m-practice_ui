import React, { useState, MouseEvent, ReactNode } from "react";
import { IconButton, Badge, MenuItem, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import {
  MouseClickFunction,
  menuDataType,
  mobileDataType,
} from "../../types/Index";
import { HeaderHooksData } from "../constants/Index";

const HeaderHooks = (event: MouseEvent<HTMLElement> | null) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuOpen: MouseClickFunction = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const mobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const menuClose = () => {
    setAnchorEl(null);
    mobileMenuClose();
  };
  const mobileMenuOpen: MouseClickFunction = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const [menuData, mobileData, color, badge] = HeaderHooksData(
    menuClose,
    menuOpen
  );

  const menuId: string = "primary-search-account-menu";
  const renderMenu: ReactNode = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={menuClose}
    >
      {menuData.map((menu: menuDataType, index: number) => (
        <MenuItem key={index}>{menu.text}</MenuItem>
      ))}
    </Menu>
  );
  const mobileMenuId: string = "primary-search-account-menu-mobile";
  const renderMobileMenu: ReactNode = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={mobileMenuClose}
    >
      {mobileData.map((menu: mobileDataType, index: number) => (
        <MenuItem key={index} onClick={menu.func}>
          <IconButton
            size="large"
            aria-label={`show ${menu.badge} new ${menu.text}`}
            color="inherit"
          >
            {menu.badge ? (
              <Badge badgeContent={menu.badge} color={color}>
                {menu.icon}
              </Badge>
            ) : (
              menu.icon
            )}
          </IconButton>
          <p>{menu.text}</p>
        </MenuItem>
      ))}
    </Menu>
  );
  return [
    menuId,
    renderMenu,
    mobileMenuId,
    renderMobileMenu,
    menuOpen,
    mobileMenuOpen,
    color,
    badge,
  ];
};

export default HeaderHooks;

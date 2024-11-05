import React, { useState, MouseEvent, ReactNode } from "react";
import { IconButton, Badge, MenuItem, Menu } from "@mui/material";
import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import { MouseClickFunction } from "../../types/Index";

interface menuDataType {
  text: string;
}
interface mobileDataType {
  text: string;
  badge?: number;
  icon: ReactNode;
  func?: MouseClickFunction;
}
const HeaderHooks = (event: MouseEvent<HTMLElement> | null) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen: MouseClickFunction = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen: MouseClickFunction = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuData: Array<menuDataType> = [
    { text: "Profile" },
    { text: "My account" },
    { text: "Log out" },
  ];
  const mobileData: mobileDataType[] = [
    { text: "Message", func: handleMobileMenuClose, badge: 4, icon: <Mail /> },
    {
      text: "Notifications",
      func: handleMobileMenuClose,
      badge: 17,
      icon: <Notifications />,
    },
    { text: "Account", func: handleProfileMenuOpen, icon: <AccountCircle /> },
  ];
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
      onClose={handleMenuClose}
    >
      {menuData.map((menu: menuDataType, index: number) => (
        <MenuItem key={index} onClick={handleMenuClose}>
          {menu.text}
        </MenuItem>
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
      onClose={handleMobileMenuClose}
    >
      {mobileData.map((menu: mobileDataType, index: number) => (
        <MenuItem key={index} onClick={menu.func}>
          <IconButton
            size="large"
            aria-label={`show ${menu.badge} new ${menu.text}`}
            color="inherit"
          >
            {menu.badge ? (
              <Badge badgeContent={menu.badge} color="error">
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
    handleProfileMenuOpen,
    handleMobileMenuOpen,
  ];
};

export default HeaderHooks;

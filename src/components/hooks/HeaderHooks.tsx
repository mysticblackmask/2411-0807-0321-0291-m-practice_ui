import React, { useState, MouseEvent, ReactNode } from "react";
import { IconButton, Badge, MenuItem, Menu } from "@mui/material";
import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import { MouseClickFunction } from "../../types/Index";

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
  const menuData = [
    { text: "Profile" },
    { text: "My account" },
    { text: "Log out" },
  ];
  const mobileData = [
    { text: "Message", badge: 4, icon: <Mail /> },
    { text: "Notifications", badge: 17, icon: <Notifications /> },
    { text: "Account", func: handleProfileMenuOpen, iocn: <AccountCircle /> },
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error"></Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error"></Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
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

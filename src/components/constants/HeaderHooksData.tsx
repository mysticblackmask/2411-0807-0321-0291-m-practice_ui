import React, { useContext } from "react";
import { AccountCircle, Mail, Notifications } from "@mui/icons-material";
import {
  MouseClickFunction,
  menuDataType,
  mobileDataType,
} from "../../types/Index";
import { ColorContext } from "../contexts/Index";

export const HeaderHooksData = (
  menuClose: () => void,
  menuOpen: MouseClickFunction
) => {
  const contextColor = useContext(ColorContext);

  const menuData: Array<menuDataType> = [
    { text: "Profile" },
    { text: "My account" },
    { text: "Log out" },
  ];
  const mobileData: mobileDataType[] = [
    {
      text: "Message",
      url: "/message",
      func: menuClose,
      badge: 4,
      icon: <Mail color={contextColor?.color.back} />,
    },
    {
      text: "Notifications",
      url: "notification",
      badge: 17,
      func: menuClose,
      icon: <Notifications color={contextColor?.color.back} />,
    },
    {
      text: "Account",
      func: menuOpen,
      icon: <AccountCircle color={contextColor?.color.back} />,
    },
  ];
  return [
    menuData,
    mobileData,
    contextColor?.color.back,
    contextColor?.color.badge,
  ];
};

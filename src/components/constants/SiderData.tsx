import React, { useContext } from "react";
import {
  Dashboard,
  Message,
  Forum,
  ContactPage,
  DisplaySettings,
} from "@mui/icons-material";
import { ColorContext } from "../contexts/Index";
import { siderDataType } from "../../types/Index";

export const SiderData = () => {
  const contextColor = useContext(ColorContext);
  const siderData: siderDataType[] = [
    {
      text: "Dashboard",
      url: "/dash",
      icon: <Dashboard color={contextColor.color.back} />,
    },
    {
      text: "Forum",
      url: "/forum",
      icon: <Forum color={contextColor.color.back} />,
    },
    {
      text: "Message",
      url: "/message",
      icon: <Message color={contextColor.color.back} />,
    },
    {
      text: "Profile",
      url: "/profile",
      icon: <ContactPage color={contextColor.color.back} />,
    },
    {
      text: "Setting",
      url: "/setting",
      icon: <DisplaySettings color={contextColor.color.back} />,
    },
  ];
  return siderData;
};

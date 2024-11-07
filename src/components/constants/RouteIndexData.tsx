import React from "react";
import { routeDataType } from "../../types/Index";

import SettingIndex from "../pages/settings/Index";
import MessagesIndex from "../pages/messages/Index";
import ProfileIndex from "../pages/profile/Index";
import ForumIndex from "../pages/forum/Index";

export const RouteIndexData = () => {
  const routeData: routeDataType[] = [
    { url: "/setting", component: <SettingIndex /> },
    { url: "/message", component: <MessagesIndex /> },
    { url: "/profile", component: <ProfileIndex /> },
    { url: "/forum", component: <ForumIndex /> },
  ];
  return routeData;
};

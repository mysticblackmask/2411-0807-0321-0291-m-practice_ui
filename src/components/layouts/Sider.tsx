import React, { FC } from "react";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { LayoutProps } from "../../types/Index";
import { DrawerHeader, openedMixin, closedMixin } from "../styles/Index";
import { Link } from "react-router-dom";
import { SiderData } from "../constants/Index";
import { siderDataType } from "../../types/Index";

const LayoutSider: FC<LayoutProps> = ({ open }) => {
  const MtagDrawer = styled(Drawer, {
    shouldForwardProp:
      open === 0 ? (prop) => prop === "open" : (prop) => prop !== "open",
  })(({ theme }) => ({
    width: 200,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        },
      },
    ],
  }));

  return (
    <MtagDrawer
      variant={open === 0 ? "persistent" : "permanent"}
      open={open === 2 ? true : false}
    >
      <DrawerHeader />
      <Divider />
      <List>
        {SiderData().map((data: siderDataType, index: number) => (
          <Link key={index} className="react-link" to={data.url}>
            <ListItem disablePadding>
              <ListItemButton
                sx={[
                  { minHeight: 48, px: 2.5 },
                  open > 1
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open > 1 ? { mr: 3 } : { mr: "auto" },
                  ]}
                >
                  {data.icon}
                </ListItemIcon>
                <ListItemText
                  primary={data.text}
                  sx={[open > 1 ? { opacity: 1 } : { opacity: 0 }]}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      {/* <Divider /> */}
    </MtagDrawer>
  );
};

export default LayoutSider;

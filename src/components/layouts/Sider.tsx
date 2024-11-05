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
import { Mail, Inbox } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { LayoutProps } from "../../types/Index";
import { DrawerHeader, openedMixin, closedMixin } from "../styles/Index";

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
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
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
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[open > 1 ? { opacity: 1 } : { opacity: 0 }]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
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
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[open > 1 ? { opacity: 1 } : { opacity: 0 }]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MtagDrawer>
  );
};

export default LayoutSider;

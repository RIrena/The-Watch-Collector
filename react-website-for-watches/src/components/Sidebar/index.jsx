import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/products" onClick={toggle}>
            Shop
          </SidebarLink>
          <SidebarLink to="/information" onClick={toggle}>
            Information
          </SidebarLink>
          <SidebarLink to="/contact-us" onClick={toggle}>
            Contact Us
          </SidebarLink>
          <SidebarLink to="/cart" onClick={toggle}>
            <Tooltip title="Your Shopping Cart">
              <IconButton sx={{ color: "inherit" }}>
                <ShoppingCartTwoToneIcon />
              </IconButton>
            </Tooltip>
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

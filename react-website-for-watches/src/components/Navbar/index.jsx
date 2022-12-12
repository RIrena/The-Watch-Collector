import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">The Watch Collector</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/products">Shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/information">Information</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact-us">Contact Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/cart">
                <Tooltip title="Your Shopping Cart">
                  <IconButton sx={{ color: "inherit" }}>
                    <ShoppingCartTwoToneIcon />
                  </IconButton>
                </Tooltip>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;

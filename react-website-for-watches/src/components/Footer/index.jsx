import React from "react";
import { FaClock, FaFacebook, FaHome, FaInstagram, FaLinkedin,FaMailBulk,FaPhone,FaYoutube } from "react-icons/fa";
import { animateScroll as scroll} from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Information </FooterLinkTitle>
              <FooterLink to="/about">About us</FooterLink>
              <FooterLink to="/contact">Contact us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Legal </FooterLinkTitle>
              <FooterLink to="/terms&conditions">Terms & Conditions</FooterLink>
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact </FooterLinkTitle>
              <FooterLink>
                <FaHome/> Skopje, Macedonia</FooterLink>
              <FooterLink>
                <FaMailBulk/>  contact@twc.com</FooterLink>
              <FooterLink>
                <FaPhone/> +389 77 807 ***</FooterLink>
              <FooterLink>
                <FaClock/> Mon-Fri 09-17h</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>The Watch Collector</SocialLogo>
            <WebsiteRights>
              © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/irena-risteska-780661217/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

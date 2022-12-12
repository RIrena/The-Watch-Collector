import React from "react";
import ContactUs from "../FooterInformationSection/ContacUs";
import AddressMap from "./AddressMap";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  TextInput,
} from "./Elements";
import { FaClock, FaPhone, FaMailBulk } from "react-icons/fa";

const ContactUsNavbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Row>
            <Column1>
              <TextWrapper>
                <AddressMap />
                <TextInput>
                  <FaMailBulk /> contact@twc.com <br />
                  <FaPhone /> +389 77 807 *** <br />
                  <FaClock /> Mon-Fri 09-17h
                </TextInput>
              </TextWrapper>
            </Column1>
            <Column2>
              <ContactUs />
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactUsNavbar;

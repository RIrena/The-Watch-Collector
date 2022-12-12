import React from "react";
import {
  Container,
  Wrapper,
  TextWrapper,
  Heading,
  TopLine,
  Subtitle,
} from "./FLS-Elements";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Heading>PRIVACY POLICY</Heading>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              height: 5,
            }}
          />
          <Subtitle>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            thewatchcollector.com (the “Site”).
          </Subtitle>

          <TopLine>PERSONAL INFORMATION WE COLLECT</TopLine>
          <Subtitle>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information”.
          </Subtitle>
          <Subtitle>
            We collect Device Information using the following technologies:
            <br /> - “Cookies” are data files that are placed on your device or
            computer and often include an anonymous unique identifier.
            <br /> - “Log files” track actions occurring on the Site, and
            collect data including your IP address, browser type, Internet
            service provider, referring/exit pages, and date/time stamps.
            <br /> - “Web beacons”, “tags”, and “pixels” are electronic files
            used to record information about how you browse the Site.
          </Subtitle>
          <Subtitle>
            Additionally when you make a purchase or attempt to make a purchase
            through the Site, we collect certain information from you, including
            your name, billing address, shipping address, payment information
            (including credit card numbers), email address, and phone number. We
            refer to this information as “Order Information”. <br />
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Order Information.
          </Subtitle>

          <TopLine>HOW DO WE USE YOUR PERSONAL INFORMATION?</TopLine>
          <Subtitle>
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations). Additionally, we use this
            Order Information to:
            <br />- Communicate with you;
            <br />- Screen our orders for potential risk or fraud; and
            <br />- When in line with the preferences you have shared with us,
            provide you with information or advertising relating to our products
            or services.
            <br />
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
          </Subtitle>

          <TopLine>SHARING YOUR PERSONAL INFORMATION</TopLine>
          <Subtitle>
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above.
            <br />
            We may also share your Personal Information to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.
          </Subtitle>

          <TopLine>DO NOT TRACK</TopLine>
          <Subtitle>
            Please note that we do not alter our Site’s data collection and use
            practices when we see a Do Not Track signal from your browser.
          </Subtitle>

          <TopLine>YOUR RIGHTS</TopLine>
          <Subtitle>
            If you are a Macedonian resident, you have the right to access
            personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to
            exercise this right, please contact us through the contact
            information below.
            <br />
            Additionally, if you are a Macedonian resident we note that we are
            processing your information in order to fulfill contracts we might
            have with you (for example if you make an order through the Site),
            or otherwise to pursue our legitimate business interests listed
            above.
          </Subtitle>

          <TopLine>DATA RETENTION</TopLine>
          <Subtitle>
            When you place an order through the Site, we will maintain your
            Order Information for our records unless and until you ask us to
            delete this information.
          </Subtitle>

          <TopLine>CHANGES</TopLine>
          <Subtitle>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </Subtitle>

          <TopLine>CONTACT US</TopLine>
          <Subtitle>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e mail at contact@twc.com
          </Subtitle>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default PrivacyPolicy;

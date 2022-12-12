import React from "react";
import {
  Container,
  Wrapper,
  TextWrapper,
  Heading,
  TopLine,
  Subtitle,
} from "./FLS-Elements";

const TermsAndConditions = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Heading>TERMS & CONDITIONS</Heading>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              height: 5,
            }}
          />
          <Subtitle>
            These terms of use (together with the documents referred to in it)
            tells you the terms of use on which you may make use of our website
            (“our site”), whether as a guest or a registered user. Use of our
            site includes accessing, browsing, or registering to use our site.{" "}
            <br /> <br />
            Please read these terms of use carefully before you start to use our
            site, as these will apply to your use of our site. We recommend that
            you print a copy of this for future reference.
            <br /> <br /> By using our site, you confirm that you accept these
            terms of use and that you agree to comply with them. <br /> <br />{" "}
            If you do not agree to these terms of use, you must not use our
            site.
          </Subtitle>

          <TopLine>Other applicable terms</TopLine>
          <Subtitle>
            These terms of use refer to the following additional terms, which
            also apply to your use of our site:
          </Subtitle>
          <Subtitle>
            • Our Privacy Policy, which sets out the terms on which we process
            any personal data we collect from you, or that you provide to us. By
            using our site, you consent to such processing and you warrant that
            all data provided by you is accurate. <br />
            • Our Cookie Policy, which sets out information about the cookies on
            our site. <br /> <br /> If you purchase goods from our site, our
            Terms of Business will apply to the sales.
          </Subtitle>

          <TopLine>Changes to these terms</TopLine>
          <Subtitle>
            We may revise these terms of use at any time by amending this page.
            <br />
            Please check this page from time to time to take notice of any
            changes we made, as they are binding on you.
          </Subtitle>

          <TopLine>Changes to our site</TopLine>
          <Subtitle>
            We may update our site from time to time, and may change the content
            at any time. However, please note that any of the content on our
            site may be out of date at any given time, and we are under no
            obligation to update it. <br /> We do not guarantee that our site,
            or any content on it, will be free from errors or omissions.
          </Subtitle>

          <TopLine>Accessing our site</TopLine>
          <Subtitle>
            Our site is made available free of charge. <br /> We do not
            guarantee that our site, or any content on it, will always be
            available or be uninterrupted. Access to our site is permitted on a
            temporary basis. We may suspend, withdraw, discontinue or change all
            or any part of our site without notice. We will not be liable to you
            if for any reason our site is unavailable at any time or for any
            period.
            <br /> You are responsible for making all arrangements necessary for
            you to have access to our site. <br /> You are also responsible for
            ensuring that all persons who access our site through your internet
            connection are aware of these terms of use and other applicable
            terms and conditions, and that they comply with them.
          </Subtitle>

          <TopLine>Your account and password</TopLine>
          <Subtitle>
            If you choose, or you are provided with, a user identification code,
            password or any other piece of information as part of our security
            procedures, you must treat such information as confidential. You
            must not disclose it to any third party. <br /> We have the right to
            disable any user identification code or password, whether chosen by
            you or allocated by us, at any time, if in our reasonable opinion
            you have failed to comply with any of the provisions of these terms
            of use.
          </Subtitle>

          <TopLine>Intellectual property rights</TopLine>
          <Subtitle>
            We are the owner or the licensee of all intellectual property rights
            in our site, and in the material published on it, including images,
            photographs, text and videos. Those works are protected by copyright
            laws and treaties around the world. All such rights are reserved.{" "}
            <br />
            You may print off one copy, and may download extracts, of any
            page(s) from our site for your personal use and you may draw the
            attention of others within your organization to content posted on
            our site. <br /> You must not modify the paper or digital copies of
            any materials you have printed off or downloaded in any way, and you
            must not use any illustrations, photographs, video or audio
            sequences or any graphics separately from any accompanying text.{" "}
            <br /> Our status (and that of any identified contributors) as the
            authors of content on our site must always be acknowledged.
            <br /> You must not use any part of the content on our site for
            commercial purposes without obtaining a licence to do so from us or
            our licensors. <br /> If you print off, copy or download any part of
            our site in breach of these terms of use, your right to use our site
            will cease immediately and you must, at our option, return or
            destroy any copies of the materials you have made.
          </Subtitle>

          <TopLine>No reliance on information</TopLine>
          <Subtitle>
            The content on our site is provided for general information only. It
            is not intended to amount to advice on which you should rely. You
            must obtain professional or specialist advice before taking, or
            refraining from, any action on the basis of the content on our site.
            <br />
            Although we make reasonable efforts to update the information on our
            site, we make no representations, warranties or guarantees, whether
            express or implied that the content on our site is accurate,
            complete or up-to-date.
          </Subtitle>

          <TopLine>Third party links and resources in our site</TopLine>
          <Subtitle>
            Where our site contains links to other sites and resources provided
            by third parties, these links are provided for your information
            only.
            <br /> We have no control over the contents of those sites or
            resources.
          </Subtitle>

          <TopLine>Applicable law</TopLine>
          <Subtitle>
            If you are a consumer, please note that these terms of use, its
            subject matter and its formation, are governed by Macedonian law.
            You and we both agree to that the court of Macedonia will have
            non-exclusive jurisdiction.
            <br />
            If you are a business, these terms of use, its subject matter and
            its formation (and any non-contractual disputes or claims) are
            governed by Macedonian law. We both agree to the exclusive
            jurisdiction of the court of Macedonia.
          </Subtitle>

          <TopLine>Trade marks</TopLine>
          <Subtitle>
            The Watch Collector name and logo are trademarks of The Watch
            Collector.
          </Subtitle>

          <TopLine>Contact us</TopLine>
          <Subtitle>
            To contact us, please email: contact@twc.com <br />
            Thank you for visiting our site.
          </Subtitle>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default TermsAndConditions;

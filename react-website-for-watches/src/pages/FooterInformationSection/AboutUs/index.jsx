import React from "react";
import {
  Container,
  Wrapper,
  TextWrapper,
  Heading,
  TopLine,
  Subtitle,
} from "./AboutUsElements";

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Heading>About us</Heading>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              height: 5,
            }}
          />
          <Subtitle>
            The Watch Collector is a leading retailer of brand name designer
            watches for all watch brands listed on our website. We pride
            ourselves on having one of the most efficient shopping systems
            available with communication at every stage to inform you of your
            order status, as well as excellent customer service and support team
            who are glad to assist you with any enquiry or problem, should one
            arise.
          </Subtitle>

          <TopLine> The Idea</TopLine>
          <Subtitle>
            The idea for the site came about because people were often asking
            for advice about which watch they should buy. The more this happened
            — and it happened a lot — the more we realized that searching for a
            watch online is a minefield of information.
          </Subtitle>

          <Subtitle>
            Buy from The Watch Collector with confidence: as an official
            retailer for all brands Since 2022 Listed, all watches purchased
            from us are provided with the official manufacturer's Warranty.
          </Subtitle>
          <br />
          <TopLine>
            Reasons why you should trust The Watch Collector with your purchase:
          </TopLine>

          <TopLine>100% genuine watches</TopLine>
          <Subtitle>
            Every item sold by The Watch Collector is a 100% genuine item,
            supplied to us from the manufacturer directly. We do not sell second
            hand or replica watches.
          </Subtitle>

          <TopLine>We are official retailers for all of our brands</TopLine>
          <Subtitle>
            This means all of our stock comes directly from the manufacturer and
            therefore comes with the correct instructions, packaging and 100%
            valid guarantee.
          </Subtitle>

          <TopLine>Full refund policy</TopLine>
          <Subtitle>
            If for any reason you are unhappy with your purchase, as long as it
            is in brand new and unworn condition, you can return it to us for a
            full refund or exchange within 14 days of delivery. Free delivery.
          </Subtitle>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default AboutUs;

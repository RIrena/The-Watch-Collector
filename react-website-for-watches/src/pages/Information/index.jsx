import React from "react";
import PaymentImage1 from "../../images/payment1.jpg";
import PaymentImage2 from "../../images/payment2.jpg";
import PaymentImage3 from "../../images/payment3.jpg";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoPaymentElements";

const InfoPayment = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <Heading>
            Payment via an Escrow Account - Safest Path to Your Dream Watch!
          </Heading>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Payment via the Escrow Service</TopLine>
                <Subtitle>
                  Thanks to The Watch Collector Escrow Service, your payment is
                  fully covered. We keep your money in our escrow account for 14
                  days after delivery of your watch. Thus, you have time to
                  carefully inspect your order knowing your money is safe in our
                  account. Only then do we transfer payout to the dealer.
                </Subtitle>
              </TextWrapper>

              <ImgWrap>
                <hr />
                <Img
                  src={PaymentImage2}
                  type="payment2/jpg"
                  alt="PaymentImage2 "
                />
              </ImgWrap>
              <TextWrapper>
                <TopLine>14 Days Global money-back guarantee</TopLine>
                <Subtitle>
                  Is your watch defective, malfunction, not as the seller
                  described or does not meet your expectation? No worries! You
                  have 14 days (after the day of delivery) to initiate a return
                  and receive a full refund quickly and easily thanks to our
                  global money-back guarantee. <br />
                  *For details, please inquire via phone or email.
                </Subtitle>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img
                  src={PaymentImage1}
                  type="payment1/jpg"
                  alt="PaymentImage1 "
                />
              </ImgWrap>
              <TextWrapper>
                <hr />
                <TopLine>Authenticity Guarantee</TopLine>
                <Subtitle>
                  Our promise: Every new watch on The Watch Collector is
                  authentic. Our dealers are required to inspect each watch's
                  authenticity and may only list original timepieces. However,
                  should issues arise, you have 14 days upon delivery of your
                  order to contact our support team and get your money back.,
                </Subtitle>
              </TextWrapper>
              <ImgWrap>
                <Img
                  src={PaymentImage3}
                  type="payment3/jpg"
                  alt="PaymentImage3 "
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoPayment;

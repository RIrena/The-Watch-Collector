import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  topLine,
  description,
  img,
  alt,
  topLine2,
  description2,
  topLine3,
  description3,
}) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Subtitle>{description}</Subtitle>
                <TopLine>{topLine2}</TopLine>
                <Subtitle>{description2}</Subtitle>
                <TopLine>{topLine3}</TopLine>
                <Subtitle>{description3}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

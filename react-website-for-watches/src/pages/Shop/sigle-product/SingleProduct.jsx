import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createdContext } from "../../../store-context/context-store";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  Img,
  HeroBtnWrapper,
  Button,
} from "./SingleProductElements";
import Carousel from "react-material-ui-carousel";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";

export const SingleProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { selectProductById } = useContext(createdContext);
  const singleProduct = selectProductById(params.id);

  const { handleAddToCart } = useContext(createdContext);

  return (
    <Container>
      <Wrapper>
        <Row>
          <Column1>
            <ImgWrap>
              <Carousel>
                <Img src={singleProduct.image} alt={singleProduct.brand} />

                <Img src={singleProduct.images[0]} alt={singleProduct.brand} />
                <Img src={singleProduct.images[1]} alt={singleProduct.brand} />
                <Img src={singleProduct.images[2]} alt={singleProduct.brand} />
              </Carousel>
            </ImgWrap>
          </Column1>

          <Column2>
            <TextWrapper>
              <Typography variant="h4" sx={{ textAlign: "left" }}>
                <strong>{singleProduct.brand}</strong>
              </Typography>

              <Typography variant="h6" sx={{ textAlign: "left" }}>
                {singleProduct.model}
              </Typography>

              <Typography
                variant="body1"
                sx={{ textAlign: "left", marginTop: "4rem" }}
              >
                <strong>Description:</strong>
                <br />
                {singleProduct.description}
              </Typography>

              <Typography
                variant="body1"
                sx={{ textAlign: "left", marginTop: "3rem" }}
              >
                <strong>Specification:</strong>
                <br />
                {singleProduct.specification}
              </Typography>

              <Typography
                variant="h6"
                sx={{ textAlign: "left", marginTop: "3rem" }}
              >
                <strong>Price: {singleProduct.price} EUR</strong>
              </Typography>

              <HeroBtnWrapper>
                <Button onClick={() => navigate(location.state.prevPath)}>
                  <ArrowBackTwoToneIcon /> <br />
                  GO BACK
                </Button>
                <Button onClick={() => handleAddToCart(singleProduct)}>
                  <ShoppingCartTwoToneIcon /> <br />
                  Add to cart
                </Button>
              </HeroBtnWrapper>
            </TextWrapper>
          </Column2>
        </Row>
      </Wrapper>
    </Container>
  );
};

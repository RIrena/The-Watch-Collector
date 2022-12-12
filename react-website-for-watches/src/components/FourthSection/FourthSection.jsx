import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue, green, grey, purple, red, yellow } from "@mui/material/colors";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box } from "@mui/material";
import { Heading, Subtitle } from "./FourthSectionElements";
import StarRateIcon from "@mui/icons-material/StarRate";
import Rating from "@mui/material/Rating";
import Carousel from "react-material-ui-carousel";
import "./CarouselDivContainer.css";

export const CustomersReviewCard = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      card: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      card: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      card: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Box
      sx={{
        background: "#03181c",
        maxWidth: "100%",
        padding: "70px 100px 100px 50px",
      }}
    >
      <Heading>What thousands of happy customers are saying about us</Heading>
      <Subtitle>
        <StarRateIcon sx={{ fill: "yellow", width: "2em" }} />
        TrustScore: "Excellent" with 4.6/5 stars
      </Subtitle>

      <Carousel responsive={responsive}>
        <div className="container">
          <Card
            className="card"
            sx={{
              maxWidth: 345,
              height: 340,
              borderRadius: "20px",
              marginTop: "80px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[700] }} aria-label="review">
                  IR
                </Avatar>
              }
              title="Trustworthy"
              subheader="November 10, 2022"
            />
            <br />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                <FormatQuoteIcon />
                They created a website and system where I can feel safe
                purchasing expensive watches overseas without the fear of losing
                my money.
                <FormatQuoteIcon />
              </Typography>
              <br />
              <br />
              <br />
              <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
          <Card
            className="card"
            sx={{
              maxWidth: 345,
              height: 340,
              borderRadius: "20px",
              marginTop: "80px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: grey[500] }} aria-label="review">
                  H
                </Avatar>
              }
              title="First time buying my watch from…"
              subheader="October 15, 2022"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                <FormatQuoteIcon />
                First time buying my watch from The Watch Collector and it was
                an expensive watch. The item came fast from the seller and I
                have no problem with the transaction over all. Will buy again.
                <FormatQuoteIcon />
              </Typography>
              <br />
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
          <Card
            className="card"
            sx={{
              maxWidth: 345,
              height: 340,
              borderRadius: "20px",
              marginTop: "80px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: purple[100] }} aria-label="review">
                  E
                </Avatar>
              }
              title="Recommended"
              subheader="September 13, 2022"
            />
            <br />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                <FormatQuoteIcon />
                The team was very prompt and professional in their replies. The
                information was helpful; the watch is beautiful and authentic,
                and it was quickly shipped. I would buy from them again and
                recommend others check them out.
                <FormatQuoteIcon />
              </Typography>
              <br />
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
          <Card
            className="card"
            sx={{
              maxWidth: 345,
              height: 340,
              borderRadius: "20px",
              marginTop: "80px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[300] }} aria-label="review">
                  S
                </Avatar>
              }
              title="Great prices and customer service"
              subheader="August 27, 2022"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                <FormatQuoteIcon />
                Great prices and customer service. I had some questions about my
                order after placing it and the customer service team was very
                responsive and followed up with me later on to ensure that
                everything was dealt with to my satisfaction. A great experience
                overall.
                <FormatQuoteIcon />
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
          <Card
            className="card"
            sx={{
              maxWidth: 345,
              height: 340,
              borderRadius: "20px",
              marginTop: "80px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[300] }} aria-label="review">
                  M
                </Avatar>
              }
              title="Pretty good experience"
              subheader="July 31, 2022"
            />
            <br />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                <FormatQuoteIcon />
                Pretty good experience with The Watch Collector. The price was
                right, ordering easy, relatively fast shipment The only complain
                - there was no communication about shipment and its tracking.
                The package just showed up at my door.....luckily I was at home
                to sign for it.
                <FormatQuoteIcon />
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
          <Card
            className="card"
            sx={{
              maxWidth: 345,
              height: 340,
              borderRadius: "20px",
              marginTop: "80px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: yellow[600] }} aria-label="review">
                  J
                </Avatar>
              }
              title="Not the worst not the best experience"
              subheader="June 3, 2022"
            />
            <br />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: "italic" }}
              >
                <FormatQuoteIcon />
                There was a delay between the payment and the shipment I did not
                have visibility on.
                <FormatQuoteIcon />
              </Typography>
              <br />
              <br />
              <br />
              <br />
              <Rating
                name="half-rating-read"
                defaultValue={3}
                precision={0.5}
                readOnly
              />
            </CardContent>
          </Card>
        </div>
      </Carousel>
    </Box>
  );
};

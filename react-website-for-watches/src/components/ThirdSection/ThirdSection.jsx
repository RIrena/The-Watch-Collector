import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import {useNavigate } from "react-router-dom";


const images = [
  {
    url: "https://cdn.shopify.com/s/files/1/0580/6325/7754/products/7489-2000x1800-1_1024x1024.jpg?v=1656595362",
    title: "Bestseller",
    width: "25%",
    height: "100%",
    categoryRoutes: "bestseller",
  },
  {
    url: "https://www.montblanc.com/content/images/cms/ycm/resource/blob/347040/5929f7c8a392c4be3c399dc10455226c/wa-dsk-data.png/w1519.jpg",
    title: "Limited",
    width: "25%",
    height: "100%",
    categoryRoutes: "limited-edition",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0002/2039/7595/products/S01-ND02-MI07_naos_xs_weiss_gold_milanaise_16_gold_wrist_900x.jpg?v=1639668645",
    title: "Woman",
    width: "25%",
    height: "100%",
    categoryRoutes: "woman-watch",
  },
  {
    url: "https://i.pinimg.com/originals/5a/1f/44/5a1f44790f64121f6b4d97ae2fccab57.jpg",
    title: "Man",
    width: "25%",
    height: "100%",
    categoryRoutes: "men-watch",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 500,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", 
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ThirdSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 200,
        width: "100%",
        padding: "25px",
      }}
    >
      {images.map((image) => (
        <ImageButton
          onClick={() => navigate(`/products/${image.categoryRoutes}`)}
          focusripples="true"
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}

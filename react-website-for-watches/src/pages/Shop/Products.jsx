import { Box, Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";
import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { createdContext } from "../../store-context/context-store";
import { Container } from "../Shared/index";
import { MediaCard } from "./card/Card";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const categories = [
  "bestseller",
  "limited edition",
  "woman's watch",
  "men's watch",
  "kids watch",
];

const categoryRoutes = {
  bestseller: "bestseller",
  "limited edition": "limited-edition",
  "woman's watch": "woman-watch",
  "men's watch": "men-watch",
  "kids watch": "kids-watch",
};

export const Products = () => {
  const { products } = useContext(createdContext);
  const navigate = useNavigate();
  const location = useLocation();

  const areWeOnRouteProductPath = location.pathname.split("/").length === 2;

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "#03181c",
            padding: "1rem",
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          DON'T MISS OUR NEW PRODUCTS
        </Typography>
      </Box>

      <Divider sx={{ marginTop: "2rem" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            color: "red"
          }}
          variant="outlined"
          aria-label="outlined button group"
          orientation={`${matches ? `horizontal` : `vertical`}`}
        >
          {categories.map((category) => {
            return (
              <Button
                onClick={() => navigate(categoryRoutes[category])}
                key={category}
              >
                {category}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
          gap: 2,
        }}
      >
        {areWeOnRouteProductPath &&
          products.map((product) => {
            return (
              <MediaCard
                key={product.id}
                product={product}
                brand={product.brand}
                model={product.model}
                image={product.image}
                price={product.price}
                id={product.id}
              />
            );
          })}
      </Box>
      <Outlet />
    </Container>
  );
};

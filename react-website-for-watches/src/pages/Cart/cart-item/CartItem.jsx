import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

export const CartItem = (props) => {
  const { handleRemoveFromCart } = props;
  const { brand, model, price, image, id } = props.product;

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          justifyItems: "center",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <img src={image} alt={brand} style={{ height: "100px" }} />
        <Typography variant="h6">{brand}</Typography>
        <Typography variant="body2">{model}</Typography>
        <Typography variant="body1">{price} EUR</Typography>
        <IconButton onClick={() => handleRemoveFromCart(id)}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Divider sx={{ color: "black", backgroundColor: "black", height: 2}} />
    </>
  );
};

import { Box } from "@mui/material";
import React, { useContext } from "react";
import { createdContext } from "../../../store-context/context-store";
import { MediaCard } from "../card/Card";

export const WomanWatch = () => {
  const category = "woman's watch";

  const { selectProductsByCategory } = useContext(createdContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "2rem",
        gap: 2,
      }}
    >
      {selectProductsByCategory(category).map((product) => {
        return (
          <MediaCard
          key={product.id}
          product={product}
          brand={product.brand}
          model={product.model}
          image={product.image}
          description={product.description}
          specification={product.specification}
          price={product.price}
          id={product.id}
          />
        );
      })}
    </Box>
  );
};

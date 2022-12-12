import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import PreviewTwoToneIcon from "@mui/icons-material/PreviewTwoTone";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { createdContext } from "../../../store-context/context-store";

export const MediaCard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {handleAddToCart} = useContext(createdContext);

  return (
    <Card
      sx={{
        width: 345,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignContent: "center",
        ":hover": {
          boxShadow: "3px 3px #A5C4D4",
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        component="img"
        height="345"
        image={props.image}
        alt={props.brand}
        sx={{ objectFit: "contain", maxWidth: "345px" }}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.brand}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {props.model}
        </Typography>
      </CardContent>

      <CardActions sx={{justifyContent: "space-around"}}>
        <Button
          onClick={() =>
            navigate(`/product/${props.id}`, {
              state: { prevPath: location.pathname },
            })
          }
          size="small"
          variant="outlined"
          startIcon={<PreviewTwoToneIcon />}
        >
          View Item
        </Button>

        <Button onClick={() => handleAddToCart(props.product)}
          size="small"
          variant="outlined"
          startIcon={<ShoppingCartTwoToneIcon />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

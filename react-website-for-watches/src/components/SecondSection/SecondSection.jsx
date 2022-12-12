import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Heading} from "./SecondSectionElements";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#EAF4F4",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const SecondSection = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "55px 25px" }}>
      <Heading>Popular brands</Heading>
      <Grid
        paddingTop={"10px"}
        container
        spacing={{ xs: 2, md: 3}}
        columns={{ xs: 2, sm: 3, md: 12 }}
      >
        <Grid item xs={1} sm={2} md={2}>
          <Item>Casio</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Festina</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2} >
          <Item>Jaeger-LeCoultre</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Montblanc</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Omega</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Patek Philippe</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Rolex</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Seiko</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Sternglas</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Tissot</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Tudor</Item>
        </Grid>
        <Grid item xs={1} sm={2} md={2}>
          <Item>Zeppelin</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

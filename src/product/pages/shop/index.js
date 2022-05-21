import * as React from "react";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { images } from "./photos";
import Box from "@mui/material/Box";

export default function Shop() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Grid container style={{ marginLeft: "40vh", marginBottom: "10px" }}>
          <Grid item xs={4}>
            <Typography variant="h2" style={{ color: "#625422" }}>
              Produtos
            </Typography>
            <Divider />
          </Grid>

          <Grid container style={{ marginBottom: "10px" }}>
            {" "}
            <Typography variant="h4" style={{ padding: 10 }}>
              Conheça nossos produtos feitos de forma caseira e com muito amor.
            </Typography>
          </Grid>
          <Grid container spacing={0} display="flex" justifyContent="center">
            <Grid item xs={6}>
              <ImageGallery items={images} />
            </Grid>
          </Grid>
          <Grid container spacing={6} marginTop="15px">
            <Grid item xs={6}>
              <Typography style={{ color: "#625422" }} variant="h2">
                Valores
                <Divider />
              </Typography>

              <Typography variant="h5">
                <b>Pães de mel</b> = R$ 1,50
              </Typography>
              <Typography variant="h5">
                <b>Rosquinhas </b> = R$ 5,00 (pacote)
              </Typography>
              <Typography variant="h5">
                <b>Bolo Santa Beatriz (c/frutas cristalizadas/castanhas) </b> =
                R$ 5,00
              </Typography>
              <Typography variant="h5">
                <b>Doces em Calda </b> = R$ 7,00
              </Typography>
              <Typography variant="h5">
                <b>Licores (canela,cacau,jabuticaba,figo) </b> = R$ 12,00
              </Typography>
              <Typography variant="h5">
                <b>Licor de Marula </b> = R$ 20,00
              </Typography>
              <Typography variant="h5">
                <b>Pão caseiro </b> = R$ 5,00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

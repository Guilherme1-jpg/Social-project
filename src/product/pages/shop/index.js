import * as React from "react";

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
            <Typography variant="h6" style={{ padding: 10 }}>
              Conheça nossos produtos feitos de forma caseira e com muito amor.
            </Typography>
          </Grid>

          <Grid item sm={6}>
            <ImageGallery items={images} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

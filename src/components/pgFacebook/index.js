import React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const PgFacebook = () => {
  return (
    <>
      <Box
        md={3}
        display="flex"
        justifyContent="space-evenly"
        marginBottom="50px"
        flexDirection="column"
        marginTop="30px"
      >
        <Box display="flex" justifyContent="center">
          <Grid container spacing={2}>
            <Grid item xs={6} marginLeft="300px">
              <Typography style={{ color: "#625422" }} variant="h3">
                Conheça Nossa Redes Sociais
              </Typography>
              <Divider />
              <Typography
                marginTop={5}
                style={{ fontSize: "20px" }}
                variant="subtitle1"
              ></Typography>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Grid item sm={6} marginRight="250px">
                  <div
                    class="fb-page"
                    data-href="https://www.facebook.com/monjasconcepcionistas/"
                    data-tabs="timeline"
                    data-width="400"
                    data-height="610"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="false"
                  >
                    <blockquote
                      cite="https://www.facebook.com/monjasconcepcionistas/"
                      class="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/monjasconcepcionistas/">
                        Mosteiro Imaculada Conceição e São José
                      </a>
                    </blockquote>
                  </div>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid item xs={6} marginTop="160px" marginRight="100px">
              <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src="http://www.youtube.com/embed/my2eBQEESDk"
                frameborder="0"
              />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PgFacebook;

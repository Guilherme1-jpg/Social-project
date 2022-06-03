import React from "react";
import Box from "@mui/material/Box";
import { Divider, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Fraternity from "../../_assets/img/fraternidade.jpg";

const CustomizedText = styled(Typography)`
  @media (max-width: 650px) {
    color: #fff;
  }
`;

const Fraternidade = () => {
  return (
    <>
      <Box
        display="flex"
        marginBottom="50px"
        flexDirection="column"
        marginTop="30px"
      >
        <Box display="flex" justifyContent="center">
          <Grid container>
            <Grid item xs={12} sm={6} marginLeft="300px">
              <img src={Fraternity} />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "50px",
            }}
          >
            <Grid item xs={12} sm={6} marginRight="350px">
              <Typography style={{ color: "#625422" }} variant="h3">
                Fraternidade
              </Typography>
              <Divider />
              <CustomizedText
                marginTop={5}
                style={{ fontSize: "20px" }}
                variant="subtitle1"
              >
                “A Vida Fraterna em comum é uma manifestação do Amor de Deus que
                Une as Irmãs entre si e as congrega em torno de Cristo, formando
                uma família , na qual cada Irmã é um lugar privilegiado de
                Comunhão com Deus”.
                <br /> CCGG 95 O Mosteiro é uma “Nazaré” feita de silêncio,
                fraternidade, trabalho, alegria e paz.
              </CustomizedText>
              <figure class="text-center fs-8">
                <blockquote>
                  <b>
                    “ Consagradas ao generoso Serviço do Altíssimo e da Virgem
                    Maria em honra da sua Imaculada Consceição.”
                  </b>
                </blockquote>
              </figure>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Fraternidade;

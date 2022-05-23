import React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import IrmasWork from "../../_assets/img/irmasWork.jpg";
import ChurchWork from "../../_assets/img/workChurch.jpg";
const Work = () => {
  return (
    <>
      <Box
        display="flex"
        marginBottom="50px"
        flexDirection="column"
        marginTop="30px"
      >
        <Box display="flex" justifyContent="center">
          <Grid container spacing={3}>
            <Grid item xs={4} sm={6} marginLeft="300px">
              <Typography style={{ color: "#625422" }} variant="h3">
                Trabalhos
              </Typography>
              <Divider />
              <Typography
                marginTop={5}
                style={{ fontSize: "20px" }}
                variant="subtitle1"
              >
                Pelo trabalho, vivido como Graça, as Concepcionistas ganham sua
                vida e a de suas Irmãs e auxiliam os pobres. (CCGG art. 177§3)
                <br />
                As Monjas Concepcionistas, trabalhem fiel e devotamente, de modo
                que, afugentando a ociosidade,inimiga da alma, atestem o sentido
                humano do trabalho e o convertam em meio de sustento e serviço.
                (CCGG art. 177§1)
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginRight: "200px",
            }}
          >
            <Grid item xs={8} sm={6}>
              <img src={ChurchWork} width="650px" height="450px" />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Work;

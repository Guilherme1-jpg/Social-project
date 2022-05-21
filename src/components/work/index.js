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
        md={3}
        display="flex"
        justifyContent="space-evenly"
        marginBottom="50px"
        flexDirection="column"
        marginTop="30px"
      >
        <Box display="flex" justifyContent="center">
          <Grid container>
            <Grid item xs={12} sm={6} marginLeft="500px">
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid item xs={12} sm={6} marginRight="450px">
              <img src={ChurchWork} width="400px" height="300px" />
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Work;

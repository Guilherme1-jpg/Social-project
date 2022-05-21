import React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";

const Maps = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14755.104199563497!2d-49.1336876!3d-22.3997985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc57896ced75f294!2zTW9zdGVpcm8gSW1hY3VsYWRhIENvbmNlacOnw6NvIGUgU8OjbyBKb3PDqQ!5e0!3m2!1spt-BR!2sbr!4v1653140125717!5m2!1spt-BR!2sbr"
          width="1200px"
          height="400px"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default Maps;

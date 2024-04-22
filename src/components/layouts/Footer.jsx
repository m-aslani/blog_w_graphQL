import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        padding="10px"
        textAlign="center"
        mt={10}
        bgcolor="#e8e1e9"
        color="primary"
      >
        ✨ simple blog website with graphQL ✨
      </Typography>
    </footer>
  );
}

export default Footer;

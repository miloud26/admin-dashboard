import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({ title, subTitle, slug }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "5",
          "@media(max-width:600px)": { textAlign: "center" },
        }}
      >
        {title} / {subTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          "@media(max-width:600px)": { textAlign: "center" },
        }}
      >
        {slug}
      </Typography>
    </Box>
  );
};

export default Header;

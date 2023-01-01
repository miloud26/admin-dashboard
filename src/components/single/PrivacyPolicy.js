import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../global/Header";
import { useColorContext } from "../../context/colorContext";
const PrivacyPolicy = () => {
  const { colors } = useColorContext();
  return (
    <Box
      padding={5}
      paddingTop="100px"
      paddingLeft="100px"
      sx={{
        "@media(max-width:900px)": {
          paddingTop: "100px",
          paddingLeft: "40px",
        },
        "@media(max-width:600px)": {
          padding: "100px 6px",
        },
      }}
    >
      <Box
        padding={3}
        backgroundColor={colors.white}
        borderRadius={2}
        marginBottom={5}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
      >
        <Header
          title={"Settings"}
          subTitle="Privacy Policy"
          slug="You can show You're Privacy that you like here and that suit your work"
        />
      </Box>
      <Box>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;

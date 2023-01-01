import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";
import imgHome from "./img/ecom.png";
import { useColorContext } from "./context/colorContext";
const Home = () => {
  document.getElementsByTagName("title")[0].textContent = "Manora | home";
  const { colors } = useColorContext();
  return (
    <Box
      background={colors.bg}
      width="100%"
      height="100vh"
      padding="80px 270px"
      sx={{
        "@media(max-width: 1500px)": {
          padding: "80px 133px",
        },
        "@media(max-width: 600px)": {
          padding: "40px 20px",
          fontSize: "32px",
        },
      }}
    >
      <Box marginBottom={"10px"}>
        <nav style={{ width: "100%", height: "50px" }}>
          <Link to="/">
            <Box width="230px">
              <img src={Logo} alt="logo" />
            </Box>
          </Link>
        </nav>
      </Box>
      <Box
        display={"flex"}
        height="100%"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box
          width={"45%"}
          sx={{
            "@media(max-width: 1000px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "49px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
            variant="h1"
          >
            Manage Your <span style={{ color: "blue" }}>Business</span> Now.
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              marginBottom: "50px",
              lineHeight: "1.5",
            }}
            variant="h4"
          >
            You can now manage your own store while you are independent. You can
            also add, modify and delete the products you want. You can do
            anything and any problems. Comply with us immediately. It seems
            crazy right. What are you waiting for, let's try together .
          </Typography>
          <Link to="/singin">
            <Button
              variant="contained"
              sx={{
                color: colors.white,
                background: colors.blue,
                padding: "5px 15px",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "22px",
              }}
            >
              Sing in
            </Button>
          </Link>
        </Box>
        <Box
          width="50%"
          sx={{
            "@media(max-width: 1000px)": {
              display: "none",
            },
          }}
        >
          <img src={imgHome} alt="imh home" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

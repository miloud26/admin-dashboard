import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import LoginIcon from "@mui/icons-material/Login";
const Logout = () => {
  const { collapsed, setCollapsed } = useGlobalContext();
  const { colors } = useColorContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box padding="0px 30px 4px 30px" onClick={() => setCollapsed(!collapsed)}>
      <Box
        onClick={handleLogout}
        sx={{
          cursor: "pointer",
          transition: "0.5s",
          "&:hover": {
            background: `${collapsed ? "" : colors.light}`,
          },
        }}
        display="flex"
        gap={"1px"}
        alignItems="center"
        justifyContent={collapsed ? "center" : ""}
      >
        <Box>
          <Tooltip title="Logout">
            <IconButton>
              <LoginIcon
                sx={{
                  color: `${colors.light2}`,
                  fontSize: `${collapsed ? "32px" : "25"}`,
                  "@media(max-width: 700px)": {
                    fontSize: "22px",
                  },
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box display={collapsed ? "none" : "block"}>
          <Typography
            sx={{
              color: `${colors.light2}`,
              fontSize: `17px`,
            }}
          >
            Logout
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Logout;

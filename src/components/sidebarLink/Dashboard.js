import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Dashboard = () => {
  const { collapsed, setCollapsed, setProductMenu, productMenu } =
    useGlobalContext();
  const { colors } = useColorContext();
  return (
    <Box
      padding="35px 30px 4px 30px"
      onClick={() => {
        setCollapsed(true);
        setProductMenu(productMenu === false ? false : false);
      }}
    >
      <Link to="/dashboard">
        <Box
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
            <Tooltip title="Dashboard">
              <IconButton>
                <DashboardIcon
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
              Dashboard
            </Typography>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Dashboard;

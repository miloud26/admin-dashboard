import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Apps = () => {
  const { collapsed, setCollapsed } = useGlobalContext();
  const { colors } = useColorContext();
  const [appstMenu, setAppsMenu] = useState(false);
  return (
    <Box
      padding="0px 30px 8px 30px"
      height={appstMenu ? "120px" : "40px"}
      sx={{
        transition: "0.5s",
      }}
    >
      <Box
        onClick={() => setAppsMenu(!appstMenu)}
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
          <Tooltip title="Apps">
            <IconButton>
              <AppsIcon
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
          <Box
            width="193px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              "@media(max-width: 1300px)": {
                width: "175px",
              },
              "@media(max-width: 900px)": {
                width: "193px",
              },
            }}
          >
            <Typography
              sx={{
                color: `${colors.light2}`,
                fontSize: `17px`,
              }}
            >
              Apps
            </Typography>
            <Box>
              {appstMenu ? (
                <KeyboardArrowUpIcon
                  sx={{
                    color: `${colors.light2}`,
                  }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: `${colors.light2}`,
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        paddingLeft="30px"
        sx={{
          display: `${appstMenu ? "block" : "none"}`,
          transition: "0.5s",
        }}
      >
        <Link
          to="/apps/facebook-pixel"
          onClick={() => {
            setCollapsed(!collapsed);
            setAppsMenu(appstMenu === false ? false : false);
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              color: `${colors.white}`,
              fontSize: "15px",
              marginBottom: "5px",
              padding: "5px 12px",
              width: "fit-content",
              transition: "0.5s",
              "&:hover": {
                background: `${colors.light}`,
              },
            }}
          >
            Facebook Pixel
          </Typography>
        </Link>
        <Link
          to="/apps/google-sheet"
          onClick={() => {
            setCollapsed(!collapsed);
            setAppsMenu(appstMenu === false ? false : false);
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
              color: `${colors.white}`,
              fontSize: "15px",
              marginBottom: "5px",
              padding: "5px 12px",
              width: "fit-content",
              transition: "0.5s",
              "&:hover": {
                background: `${colors.light}`,
              },
            }}
          >
            Google Sheet
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Apps;

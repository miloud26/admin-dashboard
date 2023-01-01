import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Setting = () => {
  const { collapsed, setCollapsed } = useGlobalContext();
  const { colors } = useColorContext();
  const [settingMenu, setSettingMenu] = useState(false);
  return (
    <Box
      padding="0px 30px 8px 30px"
      height={settingMenu ? "220px" : "40px"}
      sx={{
        transition: "0.5s",
      }}
    >
      <Box
        onClick={() => setSettingMenu(!settingMenu)}
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
          <Tooltip title="Settings">
            <IconButton>
              <SettingsIcon
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
              Settings
            </Typography>
            <Box>
              {settingMenu ? (
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
          display: `${settingMenu ? "block" : "none"}`,
          transition: "0.5s",
        }}
      >
        <Link to="/settings/account">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setSettingMenu(settingMenu === false ? false : false);
            }}
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
            Account
          </Typography>
        </Link>

        <Link to="/settings/privacy-policy">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setSettingMenu(settingMenu === false ? false : false);
            }}
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
            Privacy Policy
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Setting;

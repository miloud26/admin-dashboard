import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Orders = () => {
  const { collapsed, setCollapsed } = useGlobalContext();
  const { colors } = useColorContext();
  const [orderstMenu, setOrderstMenu] = useState(false);
  return (
    <Box
      padding="0px 30px 8px 30px"
      height={orderstMenu ? "80px" : "40px"}
      sx={{
        transition: "0.5s",
      }}
    >
      <Box
        onClick={() => setOrderstMenu(!orderstMenu)}
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
          <Tooltip title="Orders">
            <IconButton>
              <ShoppingBagIcon
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
              Orders
            </Typography>
            <Box>
              {orderstMenu ? (
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
          display: `${orderstMenu ? "block" : "none"}`,
          transition: "0.5s",
        }}
      >
        <Link to="/all-orders">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setOrderstMenu(orderstMenu === false ? false : false);
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
            All Orders
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Orders;

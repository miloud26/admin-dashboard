import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import SellIcon from "@mui/icons-material/Sell";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Coupon = () => {
  const { collapsed, setCollapsed } = useGlobalContext();
  const { colors } = useColorContext();
  const [coupontMenu, setCouponMenu] = useState(false);
  return (
    <Box
      padding="0px 30px 8px 30px"
      height={coupontMenu ? "130px" : "40px"}
      sx={{
        transition: "0.5s",
      }}
    >
      <Box
        onClick={() => setCouponMenu(!coupontMenu)}
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
          <Tooltip title="Coupons">
            <IconButton>
              <SellIcon
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
              Coupons
            </Typography>
            <Box>
              {coupontMenu ? (
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
          display: `${coupontMenu ? "block" : "none"}`,
          transition: "0.5s",
        }}
      >
        <Link to="/coupons/all-coupons">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setCouponMenu(coupontMenu === false ? false : false);
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
            All Coupons
          </Typography>
        </Link>
        <Link to="/coupons/add-coupon">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setCouponMenu(coupontMenu === false ? false : false);
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
            Add Coupon
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Coupon;

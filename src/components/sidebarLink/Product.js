import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import SellIcon from "@mui/icons-material/Sell";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Product = () => {
  const { collapsed, setCollapsed, productMenu, setProductMenu } =
    useGlobalContext();
  const { colors } = useColorContext();

  return (
    <Box
      padding="0px 30px 8px 30px"
      height={productMenu ? "180px" : "40px"}
      sx={{
        transition: "0.5s",
      }}
    >
      <Box
        onClick={() => setProductMenu(!productMenu)}
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
          <Tooltip title="Products">
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
              Products
            </Typography>
            <Box>
              {productMenu ? (
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
          display: `${productMenu ? "block" : "none"}`,
          transition: "0.5s",
        }}
      >
        <Link to="/products/all-product">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setProductMenu(productMenu === false ? false : false);
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
            All Products
          </Typography>
        </Link>
        <Link to="/products/add-product">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setProductMenu(productMenu === false ? false : false);
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
            Add Product
          </Typography>
        </Link>

        <Link to="/products/all-category">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setProductMenu(productMenu === false ? false : false);
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
            All Categorys
          </Typography>
        </Link>

        <Link to="/products/add-category">
          <Typography
            onClick={() => {
              setCollapsed(!collapsed);
              setProductMenu(productMenu === false ? false : false);
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
            Add Category
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Product;

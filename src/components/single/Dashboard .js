import React from "react";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import { Box, Typography, Button } from "@mui/material";
import Welcome from "../../img/welcome.png";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
const Dashboard = () => {
  document.getElementsByTagName("title")[0].textContent = "Manora | Dashboard";
  const { colors } = useColorContext();
  const { orders } = useGlobalContext();
  const getTotal = (time) => {
    let total = 0;
    orders
      .filter((item) => {
        const dateCreateOrder = new Date(item.createdAt).getTime();
        const beginDay = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - time,
          new Date().getHours() - new Date().getHours(),
          new Date().getMinutes() - new Date().getMinutes(),
          new Date().getSeconds() - new Date().getSeconds()
        ).getTime();
        const finDay = beginDay + 24 * 60 * 60 * 1000 * (time + 1);
        return beginDay <= dateCreateOrder && dateCreateOrder <= finDay;
      })
      .map((item) => {
        total += item.price;
      });

    return total;
  };

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
      <Box>
        <Typography sx={{ fontSize: "43px", fontWeight: "bold" }} variant="h1">
          Good Morning
        </Typography>
      </Box>
      <Box
        padding={4}
        width="100%"
        borderRadius={4}
        display="flex"
        alignItems={"center"}
        gap={5}
        backgroundColor={colors.blueThree}
        color={colors.white}
        marginTop={5}
        marginBottom={20}
      >
        <Box
          width="230px"
          sx={{
            "@media(max-width:1300px)": {
              width: "260px",
            },
            "@media(max-width:1100px)": {
              width: "340px",
            },
            "@media(max-width:1100px)": {
              display: "none",
            },
          }}
        >
          <img src={Welcome} alt="welcome img " />
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "bold", marginBottom: "10px" }}
          >
            Welcome Back{" "}
            <span style={{ color: `${colors.green}`, fontSize: "42px" }}>
              B.Miloud
            </span>
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Your dashboard has been improved! Explore new features like
            Notifications, Search, Jobs Platform and more.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              color: `${colors.white}`,
              background: `${colors.green}`,
              borderRadius: "7px",
              padding: "8px 22px",
              fontWeight: "bold",
              "&:hover": {
                background: "#10b981f0",
              },
            }}
          >
            Upgrade
          </Button>
        </Box>
      </Box>

      <Box>
        <Box
          display="flex"
          flexWrap="wrap"
          width="100%"
          justifyContent="space-between"
          marginTop={14}
          padding={3}
          backgroundColor={colors.white}
          borderRadius={2}
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
          sx={{
            "@media(max-width:600px)": {
              padding: "22px 6px",
            },
          }}
        >
          <Box
            backgroundColor={colors.bg}
            width={"49%"}
            padding={3}
            sx={{
              "@media(max-width:1024px)": {
                width: "100%",
                marginBottom: "25px",
              },
              "@media(max-width:600px)": {
                padding: "22px 6px",
              },
            }}
            borderRadius={2}
          >
            <Typography
              sx={{
                fontSize: "30px",
                color: `${colors.dark}`,
                fontWeight: "bold",
              }}
            >
              <ShoppingBagIcon
                sx={{
                  fontSize: "32px",
                  color: `${colors.blueTwo}`,
                  marginBottom: "-5px",
                  marginRight: "10px",
                }}
              />
              Orders
            </Typography>
            <Box
              width="100%"
              marginTop={2}
              padding={2}
              backgroundColor={colors.white}
              borderRadius={2}
              boxShadow={
                "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
              }
              sx={{
                "@media(max-width:600px)": {
                  padding: "22px 6px",
                },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                borderRadius={2}
                padding="16px 24px"
                marginBottom={1}
                backgroundColor={colors.bg}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  Today
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  2
                  {
                    orders.filter((item) => {
                      const dateCreateOrder = new Date(
                        item.createdAt
                      ).getTime();
                      const beginDay = new Date(
                        new Date().getFullYear(),
                        new Date().getMonth(),
                        new Date().getDate(),
                        new Date().getHours() - new Date().getHours(),
                        new Date().getMinutes() - new Date().getMinutes(),
                        new Date().getSeconds() - new Date().getSeconds()
                      ).getTime();
                      const finDay = beginDay + 24 * 60 * 60 * 1000;
                      return (
                        beginDay <= dateCreateOrder && dateCreateOrder <= finDay
                      );
                    }).length
                  }
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                borderRadius={2}
                padding="16px 24px"
                marginBottom={1}
                backgroundColor={colors.bg}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  This Week
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  5
                  {
                    orders.filter((item) => {
                      const dateCreateOrder = new Date(
                        item.createdAt
                      ).getTime();
                      const beginDay = new Date(
                        new Date().getFullYear(),
                        new Date().getMonth(),
                        new Date().getDate() - 7,
                        new Date().getHours() - new Date().getHours(),
                        new Date().getMinutes() - new Date().getMinutes(),
                        new Date().getSeconds() - new Date().getSeconds()
                      ).getTime();
                      const finDay = beginDay + 24 * 60 * 60 * 1000 * 8;
                      return (
                        beginDay <= dateCreateOrder && dateCreateOrder <= finDay
                      );
                    }).length
                  }
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                borderRadius={2}
                padding="16px 24px"
                marginBottom={1}
                backgroundColor={colors.bg}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  This Month
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  12
                  {
                    orders.filter((item) => {
                      const dateCreateOrder = new Date(
                        item.createdAt
                      ).getTime();
                      const beginDay = new Date(
                        new Date().getFullYear(),
                        new Date().getMonth(),
                        new Date().getDate() - 30,
                        new Date().getHours() - new Date().getHours(),
                        new Date().getMinutes() - new Date().getMinutes(),
                        new Date().getSeconds() - new Date().getSeconds()
                      ).getTime();
                      const finDay = beginDay + 24 * 60 * 60 * 1000 * 31;
                      return (
                        beginDay <= dateCreateOrder && dateCreateOrder <= finDay
                      );
                    }).length
                  }
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                borderRadius={2}
                padding="16px 24px"
                marginBottom={1}
                backgroundColor={colors.bg}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  This Year
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  23
                  {
                    orders.filter((item) => {
                      const dateCreateOrder = new Date(
                        item.createdAt
                      ).getTime();
                      const beginDay = new Date(
                        new Date().getFullYear(),
                        new Date().getMonth(),
                        new Date().getDate() - 366,
                        new Date().getHours() - new Date().getHours(),
                        new Date().getMinutes() - new Date().getMinutes(),
                        new Date().getSeconds() - new Date().getSeconds()
                      ).getTime();
                      const finDay = beginDay + 24 * 60 * 60 * 1000 * 367;
                      console.log(beginDay);
                      console.log(dateCreateOrder);
                      console.log(finDay);
                      console.log(beginDay <= dateCreateOrder);
                      return (
                        beginDay <= dateCreateOrder && dateCreateOrder <= finDay
                      );
                    }).length
                  }
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            backgroundColor={colors.bg}
            width={"49%"}
            sx={{
              "@media(max-width:1024px)": {
                width: "100%",
              },
              "@media(max-width:600px)": {
                padding: "22px 6px",
              },
            }}
            padding={3}
            borderRadius={2}
          >
            <Typography
              sx={{
                fontSize: "30px",
                color: `${colors.dark}`,
                fontWeight: "bold",
              }}
            >
              <MonetizationOnIcon
                sx={{
                  fontSize: "32px",
                  color: `${colors.blueTwo}`,
                  marginBottom: "-5px",
                  marginRight: "10px",
                }}
              />
              Earnings
            </Typography>
            <Box
              width="100%"
              marginTop={2}
              padding={2}
              backgroundColor={colors.white}
              borderRadius={2}
              boxShadow={
                "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
              }
              sx={{
                "@media(max-width:600px)": {
                  padding: "22px 6px",
                },
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                borderRadius={2}
                padding="16px 24px"
                marginBottom={1}
                backgroundColor={colors.bg}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  Today
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  2000{getTotal(0)} DA
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                borderRadius={2}
                padding="16px 24px"
                marginBottom={1}
                backgroundColor={colors.bg}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  This Week
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  5000 {getTotal(7)} DA
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                borderRadius={2}
                padding="16px 24px"
                marginBottom={1}
                backgroundColor={colors.bg}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  This Month
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  30000{getTotal(30)} DA
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                borderRadius={2}
                padding="16px 24px"
                marginBottom={1}
                backgroundColor={colors.bg}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  This Year
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: `${colors.dark}`,
                  }}
                >
                  100000 {getTotal(366)} DA
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
import { useColorContext } from "../../context/colorContext";
import MenuIcon from "@mui/icons-material/Menu";
import Dashboard from "../sidebarLink/Dashboard";
import Product from "../sidebarLink/Product";
import Orders from "../sidebarLink/orders";
import Coupon from "../sidebarLink/Coupon";
import Analytics from "../sidebarLink/Analitycs";
import Apps from "../sidebarLink/Apps";
import Support from "../sidebarLink/Support";
import Store from "../sidebarLink/Store";
import Setting from "../sidebarLink/Setting";
import Logout from "../sidebarLink/Logout";
import User from "../../img/user.jpg";

const Sidebar = () => {
  const { colors } = useColorContext();
  const { collapsed, setProductMenu, productMenu, setCollapsed, refrech } =
    useGlobalContext();
  ////////////////////////////////////////////////////////////

  const [userImg, setUserImg] = React.useState("");
  const [fName, setFNmae] = React.useState("");
  const [lName, setLName] = React.useState("");
  const getUserInfo = async () => {
    const userInfo = await fetch(
      `http://localhost:1337/api/profiles/1?populate=userimg`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await userInfo.json();
    setFNmae(data.data.attributes.fname);
    setLName(data.data.attributes.lname);
    setUserImg(
      `http://localhost:1337${data.data.attributes.userimg.data.attributes.url}`
    );
  };

  useEffect(() => {
    getUserInfo();
  }, [refrech]);
  ////////////////////////////////////////////////////////////

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      zIndex="100000"
      height="100%"
      className="hide-scrollbar"
      padding="0px"
      width={collapsed ? "74px" : "286px"}
      backgroundColor={colors.blueTwo}
      sx={{
        overflow: "hidden",
        overflowY: "auto",
        transition: "0.5s",
        "@media(max-width: 900px)": {
          borderRight: "0px solid #eee",
          position: "fixed",

          paddingBottom: "35px",
          height: "100vh",
          top: "0px",
          left: "0px",
          zIndex: "100000",
          width: `${collapsed ? "0px" : "286px"}`,
        },
      }}
    >
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        padding="15px 30px"
        sx={{
          "@media(max-width: 700px)": {
            padding: "15px 15px",
          },
        }}
      >
        <Box
          display={collapsed ? "none" : " block"}
          sx={{
            "@media(max-width: 900px)": {
              display: "none",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              color: `${colors.white}`,
            }}
          >
            {collapsed ? "" : "Menu"}
          </Typography>
        </Box>
        <Box
          display="flex"
          width="100%"
          flexDirection={"column"}
          alignItems={collapsed ? "center" : "flex-end"}
          sx={{
            "@media(max-width: 700px)": {
              alignItems: "center",
            },
          }}
        >
          <Tooltip title="Menu">
            <IconButton>
              <MenuIcon
                onClick={() => {
                  setCollapsed(!collapsed);
                  setProductMenu(productMenu === false ? false : false);
                }}
                sx={{
                  color: `${colors.white}`,
                  fontSize: "35px",
                  "@media(max-width: 700px)": {
                    fontSize: "22px",
                  },
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box
        display="flex"
        padding="15px 30px"
        flexDirection="column"
        alignItems="center"
        borderTop={collapsed ? "" : "1px solid rgba(255, 255, 255, 0.5)"}
        borderBottom={collapsed ? "" : "1px solid rgba(255, 255, 255, 0.5)"}
        width="100%"
      >
        <Link to="/settings/account">
          <Avatar
            alt="user avatar"
            src={User || userImg}
            sx={{
              cursor: "pointer",
              width: `${collapsed ? "40px" : "150px"}`,
              height: `${collapsed ? "40px" : "150px"}`,
              transition: "0.5s",
              "@media(max-width: 700px)": {
                width: `${collapsed ? "30px" : "150px"}`,
                height: `${collapsed ? "30px" : "150px"}`,
              },
            }}
          />
        </Link>
        <Box display={collapsed ? "none" : "block"}>
          <Typography
            sx={{
              marginTop: "12px",
              fontSize: "32px",
              color: `${colors.white}`,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {/* from server  */}
            {`${lName.slice(0, 1).toUpperCase()}.${fName}`}
            {/* from server  */}
            {/* from local  */}
            B.Miloud26
            {/* from local  */}
          </Typography>
          <Typography
            sx={{
              marginTop: "5px",
              fontSize: "22px",
              color: `${colors.light2}`,
              textAlign: "center",
            }}
          >
            Admin
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        height={collapsed ? "83%" : "60%"}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box>
            <Dashboard />
          </Box>
          <Box>
            <Product />
          </Box>
          <Box mt={0.7}>
            <Orders />
          </Box>
          <Box mt={0.7}>
            <Coupon />
          </Box>
          <Box mt={0.7}>
            <Analytics />
          </Box>
          <Box>
            <Apps />
          </Box>
          <Box mt={0.7}>
            <Store />
          </Box>
          <Box>
            <Setting />
          </Box>
        </Box>

        <Box>
          <Box>
            <Support />
          </Box>

          <Box>
            <Logout />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

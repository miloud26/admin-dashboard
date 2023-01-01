import {
  Box,
  IconButton,
  Avatar,
  Tooltip,
  InputBase,
  Menu,
  MenuItem,
  Typography,
  Badge,
} from "@mui/material";
import React, { useEffect } from "react";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import User from "../../img/user.jpg";

import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import { userDataMenu } from "../../data/Data";
const Topbar = () => {
  const { collapsed, setCollapsed, refrech } = useGlobalContext();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { colors } = useColorContext();
  return (
    <Box
      di
      position="fixed"
      top="0"
      zIndex="1000"
      width={collapsed ? "97%" : "85%"}
      height="82px"
      display={"flex"}
      justifyContent="space-between"
      p="15px 56px "
      sx={{
        transition: "0.5s",
        right: "0",
        background: `${colors.blueTwo}`,
        "@media(max-width: 900px)": {
          justifyContent: "center",
          "@media(max-width:900px)": {
            width: "100%",
          },
          p: "0px 15px",
        },
        "@media(max-width: 600px)": {
          width: "100%",
        },
      }}
    >
      <Box
        display="flex"
        borderRadius="3px"
        backgroundColor={colors.light}
        p={1}
        sx={{
          "@media(max-width: 900px)": {
            display: "none",
          },
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: "white" }}
          placeholder="Search"
        />
        <IconButton type="button">
          <SearchOutlinedIcon
            sx={{
              color: colors.white,
            }}
          />
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
        gap={2}
        sx={{
          "@media(max-width: 700px)": {
            gap: "28px",
            width: "260px",
          },
        }}
      >
        <Box
          onClick={() => setCollapsed(!collapsed)}
          sx={{
            display: "none",
            "@media(max-width: 900px)": {
              display: "block",
            },
          }}
        >
          <Tooltip title="Menu">
            <IconButton>
              <MenuIcon
                sx={{
                  color: colors.white,
                  fontSize: "30px",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          {" "}
          <Tooltip title="Translate">
            <IconButton>
              <GTranslateOutlinedIcon
                sx={{
                  color: colors.white,
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Email">
            <IconButton>
              <Badge badgeContent={4} color="success">
                <MailIcon
                  sx={{
                    color: colors.white,
                  }}
                />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Notifications">
            <IconButton>
              <Badge badgeContent={8} color="success">
                <NotificationsIcon
                  sx={{
                    color: colors.white,
                  }}
                />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>

        <Box className="miloud">
          <Tooltip title="Profil">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="avatar user" src={User || userImg} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{
              m: "45px 12px -12px 0",
              ".css-6hp17o-MuiList-root-MuiMenu-list": { width: "270px" },
              "@media(max-width: 700px)": {
                m: "45px -10px -12px 25px",
              },
            }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box
              display={"flex"}
              justifyContent="space-between"
              gap={2}
              alignItems="center"
              sx={{
                "@media(max-width: 700px)": {
                  width: "150px",
                },
              }}
            >
              <Box
                width="110px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="15px"
                paddingLeft="6px"
              >
                <Box>
                  <Avatar alt="avatar img" src={User || userImg} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "22px", textAlign: "start" }}>
                    B.Miloud
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    Admin
                  </Typography>
                </Box>
              </Box>
            </Box>
            {userDataMenu.map((setting, index) => (
              <MenuItem
                sx={{
                  mb: "12px",
                  "@media(max-width: 700px)": {
                    m: "0",
                  },
                }}
                key={index}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;

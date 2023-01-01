import { Box, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, Navigate } from "react-router-dom";
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.pathname = "/";
};
export const userDataMenu = [
  <Box>
    <hr
      style={{
        marginLeft: "-17px",
        width: "270px",
        border: "1px solid #eee",
      }}
    />
  </Box>,
  <Link to="/settings/account">
    <Box
      display={"flex"}
      justifyContent="space-between"
      gap={2}
      alignItems="center"
      sx={{
        "@media(max-width: 700px)": {
          width: "83px",
        },
      }}
    >
      <AccountCircleOutlinedIcon />
      <Typography>Profile</Typography>
    </Box>
  </Link>,

  <Box>
    <hr
      style={{
        marginLeft: "-17px",
        width: "270px",
        border: "1px solid #eee",
      }}
    />
  </Box>,

  <Box
    onClick={handleLogout}
    width={"270px"}
    display={"flex"}
    gap={2}
    alignItems="center"
    sx={{
      "@media(max-width: 700px)": {
        width: "100px",
      },
    }}
  >
    <LogoutIcon />
    <Typography>Logout</Typography>
  </Box>,
];

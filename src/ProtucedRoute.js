import { useAccessContext } from "./context/accessContext";
import { Outlet, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

const ProtucedRoute = () => {
  const { token } = useAccessContext();
  return (
    <Box
      sx={{ "@media(max-width:600px)": { padding: "2px" } }}
      padding="22px"
      width="100%"
      height="100%"
      backgroundColor="#F2F5F9"
    >
      {token ? <Outlet /> : <Navigate to="/" replace />}
    </Box>
  );
};

export default ProtucedRoute;

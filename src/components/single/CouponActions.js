import { Box, Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { RiEditBoxFill } from "react-icons/ri";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
const CouponAction = ({ id }) => {
  const navigate = useNavigate();
  const { refrech, setRefrech } = useGlobalContext();
  const handleDelete = async (id) => {
    {
      /*  try {
      await fetch(`http://localhost:1337/api/coupons/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/coupons/all-coupons");
      setRefrech(!refrech);
    } catch (error) {
      console.log(error);
    } */
    }
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        width="49%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Tooltip title="Update">
          <IconButton
            onClick={() => {
              {
                /* navigate(`/coupons/edit-coupon/${id}`); */
              }
            }}
          >
            <RiEditBoxFill />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        width="49%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Tooltip title="Delete">
          <IconButton onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default CouponAction;

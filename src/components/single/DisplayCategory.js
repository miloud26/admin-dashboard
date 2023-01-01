import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { RiEditBoxFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
const DisplayCategory = ({ id, name, description }) => {
  const { colors } = useColorContext();
  const { setRefrech, refrech } = useGlobalContext();
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    {
      /*try {
      await fetch(`http://localhost:1337/api/categorys/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/products/all-category");
      setRefrech(!refrech);
    } catch (error) {
      console.log(error);
    } */
    }
  };
  return (
    <Box
      padding={3}
      backgroundColor={colors.white}
      borderRadius={2}
      marginBottom={1}
      boxShadow={
        "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
      }
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Box
        width="60%"
        borderRadius={2}
        padding="16px 24px"
        marginBottom={1}
        backgroundColor={colors.bg}
        sx={{
          "@media(max-width:600px)": {
            width: "100%",
          },
        }}
      >
        <Typography sx={{ marginBottom: "6px", width: "100%" }}>
          <span style={{ fontSize: "22px", fontWeight: "bold" }}> Name : </span>{" "}
          {name}
        </Typography>
        <Typography>
          <span style={{ fontSize: "22px", fontWeight: "bold" }}>
            Description :
          </span>{" "}
          {description}{" "}
        </Typography>
      </Box>
      <Box
        width="38%"
        borderRadius={2}
        padding="16px 24px"
        marginBottom={1}
        backgroundColor={colors.bg}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          "@media(max-width:600px)": {
            width: "100%",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width="40%"
          borderRadius={2}
          padding="16px 24px"
          marginBottom={1}
          backgroundColor={colors.white}
          sx={{
            "@media(max-width:1024px)": {
              width: "100%",
            },
          }}
        >
          <Link to={/*`/products/edit-category/${id}`*/ ""}>
            <Tooltip title="Edit">
              <IconButton
                sx={{
                  padding: "14px",
                  borderRadius: "50%",
                  background: `${colors.bg}`,
                  transition: "0.5s",
                  "&:hover": {
                    background: `#d1d6dd`,
                  },
                }}
              >
                <RiEditBoxFill fontSize="25px" />
              </IconButton>
            </Tooltip>
          </Link>
          <Tooltip title="Delete" onClick={() => handleDelete(id)}>
            <IconButton
              sx={{
                padding: "14px",
                borderRadius: "50%",
                background: `${colors.bg}`,
                transition: "0.5s",
                "&:hover": {
                  background: `#d1d6dd`,
                },
              }}
            >
              <DeleteIcon
                sx={{
                  fontSize: "25px",
                  color: `#6f7072`,
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayCategory;

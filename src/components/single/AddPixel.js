import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../global/Header";
import { useColorContext } from "../../context/colorContext";
import { useNavigate } from "react-router-dom";
const AddPixel = () => {
  const { colors } = useColorContext();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pixel, setPixel] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      /*  if (!pixel) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setLoading(true);
      await fetch(`http://localhost:1337/api/pixels/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },

        body: JSON.stringify({
          data: {
            pixel: pixel,
          },
        }),
      });
      setLoading(false);
      navigate("/dashboard");
    } */
    }
  };

  return (
    <>
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
        <Box
          padding={3}
          backgroundColor={colors.white}
          borderRadius={2}
          marginBottom={5}
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
        >
          <Header
            title={"Apps"}
            subTitle="Add Facebook Pixel"
            slug="You can add pixel that you like here and that suit your work"
          />
        </Box>
      </Box>
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <Box
          padding={3}
          width="50%"
          backgroundColor={colors.white}
          borderRadius={2}
          marginBottom={5}
          marginTop="199px"
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
          sx={{
            "@media(max-width:1024px)": {
              padding: "6px",
              width: "80%",
              marginRight: "-40px",
            },
            "@media(max-width:600px)": {
              padding: "6px",
              marginTop: "9px",
              width: "98%",
              marginRight: "0px",
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "25px",
              }}
            >
              Add Facebook Pixel
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              label="add you're pixel ID here ..."
              onChange={(e) => setPixel(e.target.value)}
            ></TextField>

            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              marginTop={4}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: `200px`,
                  fontWeight: "600",
                  fontSize: "15px",
                  padding: "12px 12px",
                  color: colors.white,
                  background: colors.blue,
                  "@media(max-width: 1024px)": {
                    marginTop: "25px",
                  },
                  "@media(max-width:600px)": { marginTop: "15px" },
                }}
              >
                {loading ? (
                  <CircularProgress
                    sx={{
                      ".css-1idz92c-MuiCircularProgress-svg": {
                        color: `white !important`,
                        circle: {},
                      },
                    }}
                  />
                ) : (
                  "Add Pixel"
                )}
              </Button>
            </Box>
          </form>
          {error && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Please Check Your Information !
            </span>
          )}
        </Box>
      </Box>
    </>
  );
};

export default AddPixel;

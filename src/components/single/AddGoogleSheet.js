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
import Poster from "../../img/poster.png";
import Video from "../../img/googleSheet.mp4";
const AddGoogleSheet = () => {
  const { colors } = useColorContext();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      /* if (!link) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setLoading(true);
      await fetch(`http://localhost:1337/api/sheets/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },

        body: JSON.stringify({
          data: {
            link: link,
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
            subTitle="Add Google Sheet"
            slug="You can add Google Sheet that you like here and that suit your work"
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
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
          sx={{
            "@media(max-width:1025px)": {
              marginTop: "100px",
              width: "80%",
            },
            "@media(max-width:600px)": {
              marginTop: "0px",
              padding: "6px",
              width: "98%",
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
              Add Googel Sheet
            </Typography>
            <TextField
              sx={{
                width: "100%",
              }}
              label="add you're googel sheet url here ..."
              onChange={(e) => setLink(e.target.value)}
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
                  "Add Google Sheet"
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
      <Box width="100%" display={"flex"} justifyContent="center">
        <Box
          padding={3}
          backgroundColor={colors.white}
          borderRadius={2}
          marginBottom={5}
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
          width="660px"
          height="350px"
        >
          <video
            width="100%"
            height="100%"
            src={Video}
            controls
            poster={Poster}
            style={{ border: "1px solid #333" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AddGoogleSheet;

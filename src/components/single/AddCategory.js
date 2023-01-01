import { Box, Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import Header from "../global/Header";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
  document.getElementsByTagName("title")[0].textContent =
    "Manora | Add Category";
  const { setRefrech, refrech } = useGlobalContext();
  const { colors } = useColorContext();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      /* if (!name || !desc) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setLoading(true);
      await fetch(`http://localhost:1337/api/categorys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          data: {
            name: name,
            description: desc,
          },
        }),
      });

      setLoading(false);
      setRefrech(!refrech);
      navigate("/products/all-category");
    } */
    }
  };
  return (
    <Box
      padding={5}
      paddingTop="100px"
      paddingLeft="100px"
      height="95vh"
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
          title={"Products"}
          subTitle="Add Category"
          slug="You can add the categories that you like here and that suit your work"
        />
      </Box>
      <Box
        width="100%"
        height={"70%"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          padding={3}
          backgroundColor={colors.white}
          borderRadius={2}
          width="680px"
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
        >
          <form
            onSubmit={handleSubmit}
            style={{
              marginBottom: "12px",
              display: "flex",
              flexDirection: "column",

              gap: "32px",
              width: "100%",
            }}
          >
            <TextField
              label="Category Name"
              type="text"
              sx={{
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
                width: "100%",
                "@media(max-width: 1024px)": {
                  marginBottom: "25px",
                },
                "@media(max-width: 600px)": {
                  marginBottom: "25px",
                },
              }}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="textArea"
              placeholder="Category Description"
              style={{
                border: "1px solid #c4c4c4",
                width: "100%",
                height: "200px",
                fontSize: "17px",
                padding: "14px",
                borderRadius: "12px",
                resize: "none",
              }}
              onChange={(e) => setDesc(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
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
                "Add Category"
              )}
            </Button>
          </form>
          {error && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Please Check Your Information !
            </span>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AddCategory;

import React, { useState } from "react";
import { useColorContext } from "../../context/colorContext";
import { useNavigate } from "react-router-dom";
import { useAccessContext } from "../../context/accessContext";
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  CircularProgress,
} from "@mui/material";

const Singin = () => {
  document.getElementsByTagName("title")[0].textContent = "Manora | sing in";
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [cheak, setCheak] = useState("");
  const [error, setError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setToken } = useAccessContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email != "admin" && password != "admin") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      navigate("/dashboard");
      localStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY5MTQ0ODgzLCJleHAiOjE2NzE3MzY4ODN9.BYeY4ggm4lQL0etIiVP-5rnIvLBJ5G6Pl8a8hWlRNy4"
      );
      window.location.pathname = "/dashboard";
    }
    /*
    if (!email || !password || !cheak) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setLoading(true);
      const userLogin = await fetch(`http://localhost:1337/api/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      const data = await userLogin.json();
      if (data.user) {
        const { jwt } = data;
        localStorage.setItem("token", jwt);
        setToken(localStorage.getItem("token"));
        navigate("/dashboard");
        setLoading(false);
      } else {
        setLoading(false);
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 3000);
      }
    }
    */
  };
  const { colors } = useColorContext();
  const Label = () => {
    return (
      <div>
        I accept the{" "}
        <span style={{ color: colors.blue }}>terms and conditions.</span>
      </div>
    );
  };
  return (
    <Box
      width="100%"
      height={"100vh"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="box"
        width="570px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor={colors.white}
        p={7}
        borderRadius={3}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
        sx={{
          "@media(max-width: 600px)": {
            width: "350px",
            gap: "25px",
            padding: "56px 12px",
          },
        }}
      >
        <Box
          width={600}
          textAlign="center"
          mb={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "32px", fontWeight: "700", marginBottom: "12px" }}
          >
            Sing in
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "15px",
              fontWeight: "300",
              "@media(max-width: 600px)": {
                width: "250px",
              },
            }}
          >
            Fill in the fields below to sign into your account.{" "}
          </Typography>
        </Box>
        <Box>
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
              label="Email Adresse Or Username"
              type="text"
              sx={{
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
                width: "100%",
                "@media(max-width: 600px)": {
                  marginBottom: "25px",
                },
              }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              label="Password"
              type={"password"}
              sx={{
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
                width: "100%",
                "@media(max-width: 600px)": {
                  marginBottom: "25px",
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<Label />}
              onChange={(e) => setCheak(e.target.value)}
              sx={{
                "@media(max-width: 600px)": {
                  marginBottom: "25px",
                },
              }}
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
                "Sing in"
              )}
            </Button>
          </form>
          {error && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Please Check Your Information !
            </span>
          )}
          {loginError && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Invalid Username/Email or Password !
            </span>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Singin;

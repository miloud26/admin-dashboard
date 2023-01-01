import {
  Box,
  Select,
  TextField,
  MenuItem,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../global/Header";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";

const AddCoupon = () => {
  const { colors } = useColorContext();
  const { allProduct, setRefrech, refrech } = useGlobalContext();

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [dateOne, setDateOne] = useState("2022-12-31");
  const [dateTwo, setDateTwo] = useState("2022-12-31");
  const [info, setInfo] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      /*if (
      !code ||
      !discount ||
      !dateOne ||
      !dateTwo ||
      !info ||
      new Date(dateOne).getTime() > new Date(dateTwo).getTime()
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      try {
        setLoading(true);
        await fetch(`http://localhost:1337/api/coupons`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },

          body: JSON.stringify({
            data: {
              productID: `${info}`,
              code: `${code.toLocaleUpperCase()}`,
              discount: `${discount}`,
              dateOne: `${new Date(dateOne).getTime()}`,
              dateTwo: `${new Date(dateTwo).getTime()}`,
            },
          }),
        });
        setLoading(false);
        setRefrech(!refrech);
        navigate("/coupons/all-coupons");
      } catch (error) {
        console.log(error);
      }
    } */
    }
  };

  return (
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
        marginBottom={15}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
      >
        <Header
          title={"Coupons"}
          subTitle="Add Coupon"
          slug="You can add Coupon that you like here and that suit your work"
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <Box
          width="80%"
          padding={3}
          sx={{ "@media(max-width:600px)": { width: "100%" } }}
          backgroundColor={colors.white}
          borderRadius={2}
          marginBottom={5}
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
        >
          <form onSubmit={handleSubmit}>
            {" "}
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Code
            </Typography>
            <TextField
              label="Code"
              sx={{ width: "100%", marginBottom: "15px" }}
              onChange={(e) => setCode(e.target.value)}
            />
            <Typography
              sx={{
                marginTop: "25px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Discount
            </Typography>
            <TextField
              label="Discount On Percentage"
              sx={{ width: "100%", marginBottom: "15px" }}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <Typography
              sx={{
                marginTop: "25px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Date From --- To
            </Typography>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              mt={4}
            >
              <TextField
                type="date"
                sx={{
                  width: "49%",
                  marginBottom: "15px",
                  "@media(max-width:1024px)": { width: "100%" },
                }}
                onChange={(e) => setDateOne(e.target.value)}
                value={dateOne}
              />

              <TextField
                type="date"
                sx={{
                  width: "49%",
                  marginBottom: "15px",
                  "@media(max-width:1024px)": { width: "100%" },
                }}
                onChange={(e) => setDateTwo(e.target.value)}
                value={dateTwo}
              />
            </Box>
            <Typography
              sx={{
                marginTop: "25px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Select Product
            </Typography>
            <Select
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              sx={{ width: "100%" }}
            >
              {allProduct.map((item) => {
                const { id, title, url } = item;
                return (
                  <MenuItem key={id} value={`${id},${url}`}>
                    {title}
                  </MenuItem>
                );
              })}
            </Select>
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
                  "Add Coupon"
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
    </Box>
  );
};

export default AddCoupon;

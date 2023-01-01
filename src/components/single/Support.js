import { Box, Button, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import Header from "../global/Header";
import { useColorContext } from "../../context/colorContext";
const PrivacyPolicy = () => {
  const form = useRef();
  const { colors } = useColorContext();
  const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /*emailjs
      .sendForm(
        "service_znifs3c",
        "template_ys5y8pl",
        form.current,
        "xILnu3lNfLTBFXCYL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
          setTimeout(() => {
            setSend(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      ); */
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
          title={"Support"}
          subTitle="Support"
          slug="You can show You're Support that you like here and that suit your work"
        />
      </Box>
      <Box
        padding={3}
        backgroundColor={colors.white}
        borderRadius={2}
        marginBottom={5}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
      >
        <form onSubmit={handleSubmit} ref={form}>
          <TextField
            label="You're Name"
            sx={{ width: "100%", margin: "20px 0" }}
            name="name"
          />
          <TextField
            label="You're Email"
            sx={{ width: "100%", margin: "20px 0" }}
            name="email"
          />
          <textarea
            placeholder="You're Message Here ..."
            style={{
              fontSize: "17px",
              width: "100%",
              borderRadius: "6px",
              padding: "12px",
              height: "200px",
              resize: "none",
            }}
            name="message"
          />
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
              send
            </Button>
          </Box>
        </form>
        {send && (
          <span
            style={{
              color: "green",
              fontSize: "15px",
              width: "100%",
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            you're message recevied , Thank you
          </span>
        )}
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;

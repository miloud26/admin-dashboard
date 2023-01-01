import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import user from "../../img/user.jpg";
import React, { useEffect, useState } from "react";
import Header from "../global/Header";
import { useColorContext } from "../../context/colorContext";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useGlobalContext } from "../../context/globalContext";
const Account = () => {
  const { colors } = useColorContext();
  const { refrech, setRefrech } = useGlobalContext();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgPrev, setImgPrev] = useState("");

  ////////////////// send to db ////////////////////////
  const [userImg, setUserImg] = useState(user);
  const [fName, setFname] = useState("Miloud");
  const [lName, setLname] = useState("Boudjellal");
  const [email, setEmail] = useState("miloud26@test.com");
  const [phone, setPhone] = useState("07277651022");
  const [aboutUser, setAboutUser] = useState("I' front end developer");
  const [webUrl, setWebUrl] = useState("https://miloudb.org");

  ////////////////// get data from db /////////////////////
  const getUserInfo = async () => {
    {
      /*   const userInfo = await fetch(
      `http://localhost:1337/api/profiles/1?populate=userimg`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await userInfo.json();

    setFname(data.data.attributes.fname);
    setLname(data.data.attributes.lname);
    setEmail(data.data.attributes.email);
    setPhone(data.data.attributes.phone);
    setAboutUser(data.data.attributes.about);
    setWebUrl(data.data.attributes.weburl);
    setUserImg(
      `http://localhost:1337${data.data.attributes.userimg.data.attributes.url}`
    ); */
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [refrech]);
  /////////////////// submit info to db //////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      /*if (!userImg || !fName || !lName || !email || !phone) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setLoading(true);
      const item = await fetch(`http://localhost:1337/api/profiles/${1}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },

        body: JSON.stringify({
          data: {
            fname: fName,
            lname: lName,
            email: email,
            phone: phone,
            about: aboutUser,
            weburl: webUrl,
          },
        }),
      });
      const itemData = await item.json();

      const { id } = itemData.data;
      const formData = new FormData();
      formData.append("files", userImg);
      formData.append("refId", id);
      formData.append("ref", "api::profile.profile");
      formData.append("field", "userimg");

      await fetch("http://localhost:1337/api/upload", {
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
      setLoading(false);
      setRefrech(!refrech);
    } */
    }
  };

  /////////////////// submit info to db //////////////////

  const hendleImage = (e) => {
    const selectedFile = e.target.files[0];
    setUserImg(selectedFile);
    const fileURL = URL.createObjectURL(selectedFile);
    setImgPrev(fileURL);
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
        marginBottom={5}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
      >
        <Header
          title={"Settings"}
          subTitle="Account"
          slug="You can show You're account that you like here and that suit your work"
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
        sx={{ "@media(max-width:600px)": { padding: "6px" } }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            padding={3}
            marginBottom={3}
            backgroundColor={colors.bg}
            borderRadius={2}
            height="100%"
            boxShadow={
              "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
            }
            width="100%"
            display="flex"
            marginTop="30px"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Box width="100%" borderRadius={2} marginBottom="20px">
              <Typography
                sx={{
                  marginBottom: "20px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Product Image
              </Typography>
              <Button
                variant="contained"
                component="label"
                startIcon={<AccountCircleOutlinedIcon />}
                sx={{ marginBottom: "20px" }}
              >
                Image Profile
                <input type="file" hidden onChange={hendleImage} />
              </Button>
              <Typography
                style={{
                  color: "red",
                  fontSize: "12px",
                }}
              >
                (Please upload a clear, square image to display well in your
                store )
              </Typography>
            </Box>
            {
              <Box
                sx={{ aspectRatio: "1/1" }}
                width="300px"
                padding={3}
                backgroundColor={colors.white}
                borderRadius={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow={
                  "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
                }
              >
                {
                  <img
                    alt={"name img"}
                    src={imgPrev || userImg}
                    style={{ height: "100%", width: "100%" }}
                  />
                }
              </Box>
            }
          </Box>
          <Box
            padding={3}
            backgroundColor={colors.bg}
            borderRadius={2}
            marginBottom={5}
            boxShadow={
              "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
            }
            flexWrap="wrap"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <TextField
              label="First Name"
              onChange={(e) => setFname(e.target.value)}
              value={fName}
              sx={{
                width: "48%",
                "@media(max-width:600px)": {
                  width: "100%",
                  marginBottom: "15px",
                },
              }}
            />
            <TextField
              label="Last Name"
              sx={{
                width: "48%",
                "@media(max-width:600px)": {
                  width: "100%",
                },
              }}
              onChange={(e) => setLname(e.target.value)}
              value={lName}
            />
          </Box>
          <Box
            padding={3}
            backgroundColor={colors.bg}
            borderRadius={2}
            marginBottom={5}
            boxShadow={
              "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
            }
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <TextField
              label="Email"
              sx={{
                width: "48%",
                "@media(max-width:600px)": {
                  width: "100%",
                  marginBottom: "15px",
                },
              }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              label="Phone Number"
              sx={{
                width: "48%",
                "@media(max-width:600px)": {
                  width: "100%",
                },
              }}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </Box>
          <Box
            padding={3}
            backgroundColor={colors.bg}
            borderRadius={2}
            marginBottom={5}
            boxShadow={
              "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
            }
          >
            <TextField
              label="About You"
              sx={{ width: "100%" }}
              onChange={(e) => setAboutUser(e.target.value)}
              value={aboutUser}
            />
          </Box>
          <Box
            padding={3}
            backgroundColor={colors.bg}
            borderRadius={2}
            marginBottom={5}
            boxShadow={
              "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
            }
          >
            <TextField
              label="Website"
              sx={{ width: "100%" }}
              onChange={(e) => setWebUrl(e.target.value)}
              value={webUrl}
            />
          </Box>
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
                "Save"
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
  );
};

export default Account;

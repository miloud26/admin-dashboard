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
import { useGlobalContext } from "../../context/globalContext";
import DisplayCategory from "./DisplayCategory";
import { Link } from "react-router-dom";
const categorys = [
  {
    id: 1,
    name: "category one",
    description: "category one",
  },
  {
    id: 2,
    name: "category two",
    description: "category two",
  },
];
const AllCategory = () => {
  document.getElementsByTagName("title")[0].textContent =
    "Manora | All Category";
  const { colors } = useColorContext();
  const { allCategory, setAllCategory, loading } = useGlobalContext();
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    const tempCategory = allCategory.filter((item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setAllCategory(tempCategory);
  };

  if (0) {
    return (
      <Box
        width="100%"
        height="95vh"
        padding={5}
        paddingTop="100px"
        paddingLeft="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
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
        <Box>
          {" "}
          <CircularProgress
            sx={{
              ".css-1idz92c-MuiCircularProgress-svg": {
                color: `blue !important`,
                "	.MuiCircularProgress-root": {
                  span: {
                    width: "150px",
                    height: "150px",
                  },
                },
              },
            }}
          />
        </Box>
      </Box>
    );
  }

  if (categorys.length <= 0) {
    return (
      <Box
        width="100%"
        height="95vh"
        padding={5}
        paddingTop="100px"
        paddingLeft="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
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
        <Box>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", marginBottom: "35px" }}
          >
            Ooops !! Result Not Found{" "}
          </Typography>
          <Link to="/products/add-category">
            <Box width="100%" display="flex" justifyContent="center">
              <Button
                sx={{
                  background: `${colors.blue}`,
                  padding: "7px 12px",
                  fontSize: "17px",
                }}
                variant="contained"
              >
                Add New Category
              </Button>
            </Box>
          </Link>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      height={allCategory.length >= 3 ? "100%" : "95vh"}
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
          title="Products"
          subTitle="All Categorys"
          slug="Show all your categories and share them with customers for more sales"
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
        <form
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onSubmit={handleSearch}
        >
          <Box
            sx={{
              width: "90%",
              "@media(max-width:1024px)": {
                width: "80%",
              },
              "@media(max-width:1024px)": {
                width: "60%",
              },
            }}
          >
            <TextField
              onChange={(e) => setSearch(e.target.value)}
              id="outlined-basic"
              label="Search"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              sx={{
                background: `${colors.blue}`,
                padding: "7px 12px",
                fontSize: "17px",
              }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </form>
      </Box>

      <Box marginTop={11}>
        {showAll
          ? categorys.map((item) => {
              const { id } = item;
              return (
                <Box key={id}>
                  <DisplayCategory {...item} />
                </Box>
              );
            })
          : categorys.slice(0, 4).map((item) => {
              const { id } = item;
              return (
                <Box key={id}>
                  <DisplayCategory {...item} />
                </Box>
              );
            })}
      </Box>
      {showAll ? undefined : (
        <Box display="flex" justifyContent="center" paddingBottom="20px">
          <Button
            onClick={() => setShowAll(true)}
            sx={{ background: `${colors.blue}`, marginTop: "15px" }}
            variant="contained"
          >
            Show All
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AllCategory;

import moment from "moment";
import ProductAction from "./ProductAction";
import Sport1 from "../../img/sport1.webp";
import Sport2 from "../../img/art2.webp";
import Sport3 from "../../img/phone2.webp";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import Header from "../global/Header";

const AllProduct = () => {
  document.getElementsByTagName("title")[0].textContent =
    "Manora | All Product";
  const { colors } = useColorContext();
  const { allProduct, loading, setAllProduct } = useGlobalContext();
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = React.useState(7);

  const handleSearch = (e) => {
    e.preventDefault();

    const tempProduct = allProduct.filter((item) => {
      item.title.toLowerCase().startsWith(search.toLowerCase());
    });
    setAllProduct(tempProduct);
  };
  const product = [
    {
      id: 2,
      url: Sport2,
      title: "Man Pants Autumn And ",
      description: "Man Pants Autumn And Winter ",
      category: "Sport",
      price: 15420,
      shipping: 1205,
      metaTitle: "Man Pants Autumn And Winter New In Men's",
      metaDescription:
        "Man Pants Autumn And Winter New In Men's Clothing Casual Trousers Sport Jogging Tracksuits Sweatpants Harajuku Streetwear Pants",
      createdAt: new Date().getTime(),
      publishedAt: new Date().getTime(),
    },
    {
      id: 3,
      url: Sport3,
      title: "Man Pants Autumn And ",
      description: "Man Pants Autumn And Winter ",
      category: "Sport",
      price: 15420,
      shipping: 1205,
      metaTitle: "Man Pants Autumn And Winter New In Men's",
      metaDescription:
        "Man Pants Autumn And Winter New In Men's Clothing Casual Trousers Sport Jogging Tracksuits Sweatpants Harajuku Streetwear Pants",
      createdAt: new Date().getTime(),
      publishedAt: new Date().getTime(),
    },
    {
      id: 1,
      url: Sport1,
      title: "Man Pants Autumn And ",
      description: "Man Pants Autumn And Winter ",
      category: "Sport",
      price: 15420,
      shipping: 1205,
      metaTitle: "Man Pants Autumn And Winter New In Men's",
      metaDescription:
        "Man Pants Autumn And Winter New In Men's Clothing Casual Trousers Sport Jogging Tracksuits Sweatpants Harajuku Streetwear Pants",
      createdAt: new Date().getTime(),
      publishedAt: new Date().getTime(),
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      width: 150,
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.id}
        </Typography>
      ),
    },
    {
      field: "url",
      headerName: "Image",
      headerAlign: "center",
      renderCell: (params) => (
        <Box width="100%" display="flex" justifyContent="center">
          <Avatar
            src={params.row.url}
            sx={{ border: "1px solid #F2F5F9", width: "60px", height: "60px" }}
          />
        </Box>
      ),
      sortable: false,
      filterable: false,
      width: 150,
    },

    {
      field: "title",
      headerAlign: "center",
      headerName: "Title",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.title}
        </Typography>
      ),
      width: 300,
    },
    {
      field: "description",
      headerAlign: "center",
      headerName: "Description",
      renderCell: (params) => {
        const div = document.createElement("div");
        div.innerHTML = params.row.description;
        return (
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              width: "100%",
              textAlign: `${div.textContent.length < 30 ? "center" : "start"}`,
            }}
          >
            {`${div.textContent.slice(0, 30)} ${
              div.textContent.length < 30 ? "" : "..."
            }`}
          </Typography>
        );
      },

      width: 400,
    },
    {
      field: "category",
      headerAlign: "center",
      headerName: "Category",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.category}
        </Typography>
      ),
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.price}
        </Typography>
      ),
      width: 120,
    },
    {
      field: "shipping",
      headerName: "Shipping",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.shipping}
        </Typography>
      ),
      width: 120,
    },
    {
      field: "metaTitle",
      headerName: "Meta Title",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.metaTitle}
        </Typography>
      ),
      width: 150,
    },
    {
      field: "metaDescription",
      headerName: "Meta Desc",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.metaDescription}
        </Typography>
      ),
      width: 200,
    },
    {
      field: "createdAt",
      headerAlign: "center",
      headerName: "Created At",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS")}
        </Typography>
      ),
      width: 250,
    },
    {
      field: "publishedAt",
      headerName: "Published At",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {moment(params.row.publishedAt).format("YYYY-MM-DD HH:MM:SS")}
        </Typography>
      ),
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 250,
      renderCell: (params) => {
        return (
          <Box width="60%">
            <ProductAction id={params.id} />
          </Box>
        );
      },
    },
  ];

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

  if (product.length === 0) {
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
          <Link to="/products/add-product">
            <Box width="100%" display="flex" justifyContent="center">
              <Button
                sx={{
                  background: `${colors.blue}`,
                  padding: "7px 12px",
                  fontSize: "17px",
                }}
                variant="contained"
              >
                Add New Product
              </Button>
            </Box>
          </Link>
        </Box>
      </Box>
    );
  }

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
          title={"Products"}
          subTitle="All Product"
          slug="You can show All products that you like here and that suit your work"
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
      <Box
        padding={3}
        backgroundColor={colors.white}
        borderRadius={2}
        marginBottom={5}
        sx={{
          "@media(max-width:600px)": { padding: "6px" },
        }}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
      >
        <DataGrid
          rows={product || allProduct}
          columns={columns}
          checkboxSelection
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[7, 14, 21]}
          pagination
          rowHeight={85}
          components={{
            Toolbar: GridToolbar,
          }}
          sx={{
            height: "803px",
            padding: "22px",
            paddingBottom: "0",
            backgroundColor: `${colors.bg}`,

            boxShadow:
              "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px",
          }}
        />
      </Box>
    </Box>
  );
};

export default AllProduct;

import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import Header from "../global/Header";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import OrdersActions, { OrderPDF } from "./OrdersActions";
import { PDFViewer } from "@react-pdf/renderer";
import Sport1 from "../../img/sport1.webp";
import Sport2 from "../../img/art2.webp";
import Sport3 from "../../img/phone2.webp";

const AllOrders = () => {
  const { colors } = useColorContext();
  const { loading, orders } = useGlobalContext();
  const [pageSize, setPageSize] = React.useState(7);

  ///////////////////////////////////////////
  const orders1 = [
    {
      id: 1,
      url: Sport1,
      productName: "Man Pants Autumn And Winter New In Men's",
      name: "Miloud Boudjellal",
      phone: "+213777651022",
      state: "Ain Defla",
      city: "Ain Soltan",
      quantity: 2,
      price: 8500,
      shipping: 1200,
    },
    {
      id: 2,
      url: Sport2,
      productName: "Man Pants Autumn And Winter New In Men's",
      name: "Miloud Boudjellal",
      phone: "+213777651022",
      state: "Ain Defla",
      city: "Ain Soltan",
      quantity: 2,
      price: 8500,
      shipping: 1200,
    },
    {
      id: 3,
      url: Sport3,
      productName: "Man Pants Autumn And Winter New In Men's",
      name: "Miloud Boudjellal",
      phone: "+213777651022",
      state: "Ain Defla",
      city: "Ain Soltan",
      quantity: 2,
      price: 8500,
      shipping: 1200,
    },
  ];
  ///////////////////////////////////////////
  if (0) {
    return (
      <Box width="100%" height="95vh">
        <PDFViewer width="100%" height="100%">
          <OrderPDF
            name={"boudeja jgh"}
            state="ain defla "
            phone="07777"
            city="ain soltan"
            productName="best product"
            price="125"
            shipping={"22"}
          />
        </PDFViewer>
      </Box>
    );
  }

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

  if (orders1.length === 0) {
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

          <Box width="100%" display="flex" justifyContent="center">
            <Typography
              sx={{
                fontSize: "37px",
              }}
              variant="contained"
            >
              No Orders
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

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
      field: "productName",
      headerAlign: "center",
      headerName: "Product Name",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.productName?.slice(0, 15)}
        </Typography>
      ),
      width: 220,
    },
    {
      field: "name",
      headerAlign: "center",
      headerName: "Name",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.name}
        </Typography>
      ),
      width: 220,
    },
    {
      field: "phone",
      headerAlign: "center",
      headerName: "Phone",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.phone}
        </Typography>
      ),
      width: 220,
    },
    {
      field: "state",
      headerAlign: "center",
      headerName: "Sate",
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              width: "100%",
              textAlign: `center`,
            }}
          >
            {params.row.state}
          </Typography>
        );
      },

      width: 220,
    },
    {
      field: "city",
      headerAlign: "center",
      headerName: "City",
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              width: "100%",
              textAlign: `center`,
            }}
          >
            {params.row.city}
          </Typography>
        );
      },

      width: 220,
    },
    {
      field: "quantity",
      headerAlign: "center",
      headerName: "Quantity",
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              width: "100%",
              textAlign: `center`,
            }}
          >
            {params.row.quantity}
          </Typography>
        );
      },

      width: 220,
    },
    {
      field: "price",
      headerAlign: "center",
      headerName: "Price",
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              width: "100%",
              textAlign: `center`,
            }}
          >
            {params.row.price}
          </Typography>
        );
      },

      width: 220,
    },
    {
      field: "shipping",
      headerAlign: "center",
      headerName: "Shipping",
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              width: "100%",
              textAlign: `center`,
            }}
          >
            {params.row.shipping}
          </Typography>
        );
      },

      width: 220,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 250,
      renderCell: (params) => {
        return (
          <Box width="60%">
            <OrdersActions {...params.row} />
          </Box>
        );
      },
    },
  ];
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
          title={"Orders"}
          subTitle="All Orders"
          slug="You can show All Coupon that you like here and that suit your work"
        />
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
          rows={orders1 || orders}
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

export default AllOrders;

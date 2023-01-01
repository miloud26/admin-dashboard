import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import Sport1 from "../../img/sport1.webp";
import Sport2 from "../../img/art2.webp";
import Sport3 from "../../img/phone2.webp";
import React from "react";
import Header from "../global/Header";
import { useColorContext } from "../../context/colorContext";
import { useGlobalContext } from "../../context/globalContext";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import moment from "moment";
import CouponAction from "./CouponActions";

const AllCoupons = () => {
  const { colors } = useColorContext();
  const { loading, coupons } = useGlobalContext();
  const [pageSize, setPageSize] = React.useState(7);
  ///////////////////////////////////////////
  const coupons1 = [
    {
      id: 2,
      url: Sport2,
      code: "MILOUD1452",
      discount: "50",
      formatDateOne: moment(new Date().getTime()).format("YYYY-MM-DD HH:MM:SS"),
      formatDateTwo: moment(new Date().getTime()).format("YYYY-MM-DD HH:MM:SS"),
      createdAt: new Date().getTime(),
      publishedAt: new Date().getTime(),
    },
    {
      id: 1,
      url: Sport1,
      code: "BOUOUD1452",
      discount: "30",
      formatDateOne: moment(new Date().getTime()).format("YYYY-MM-DD HH:MM:SS"),
      formatDateTwo: moment(new Date().getTime()).format("YYYY-MM-DD HH:MM:SS"),
      createdAt: new Date().getTime(),
      publishedAt: new Date().getTime(),
    },
    {
      id: 3,
      url: Sport3,
      code: "YEARSUD1452",
      discount: "80",
      formatDateOne: moment(new Date().getTime()).format("YYYY-MM-DD HH:MM:SS"),
      formatDateTwo: moment(new Date().getTime()).format("YYYY-MM-DD HH:MM:SS"),
      createdAt: new Date().getTime(),
      publishedAt: new Date().getTime(),
    },
  ];
  ///////////////////////////////////////////
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

  if (coupons1.length === 0) {
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
          <Link to="/coupons/add-coupon">
            <Box width="100%" display="flex" justifyContent="center">
              <Button
                sx={{
                  background: `${colors.blue}`,
                  padding: "7px 12px",
                  fontSize: "17px",
                }}
                variant="contained"
              >
                Add New Coupon
              </Button>
            </Box>
          </Link>
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
      field: "code",
      headerAlign: "center",
      headerName: "Code",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.code}
        </Typography>
      ),
      width: 220,
    },
    {
      field: "discount",
      headerAlign: "center",
      headerName: "Discount",
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
            {params.row.discount}
          </Typography>
        );
      },

      width: 220,
    },
    {
      field: "formatDateOne",
      headerAlign: "center",
      headerName: "From ",
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
            {params.row.formatDateOne}
          </Typography>
        );
      },

      width: 220,
    },
    {
      field: "formatDateTwo",
      headerAlign: "center",
      headerName: "To ",
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
            {params.row.formatDateTwo}
          </Typography>
        );
      },

      width: 220,
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
            <CouponAction id={params.id} />
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
          title={"Coupons"}
          subTitle="All Coupons"
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
          rows={coupons1 || coupons}
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

export default AllCoupons;

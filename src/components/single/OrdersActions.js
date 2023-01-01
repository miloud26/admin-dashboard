import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
import {
  Page,
  Text,
  Image,
  Document,
  View,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Logo from "../../img/logo-pdf.png";
import Byme from "../../img/byme.png";
import moment from "moment";
import { useState } from "react";
export const OrderPDF = ({
  name,
  state,
  city,
  phone,
  productName,
  price,
  quantity,
  shipping,
}) => {
  return (
    <Document>
      <Page style={{ padding: "50px" }} size="A3">
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "50px",
              letterSpacing: "1.9px",
              marginBottom: "40px",
            }}
          >
            Miloud-B
          </Text>
        </View>

        <View style={{ position: "absolute", top: "140px", right: "10px" }}>
          <Image
            src={Logo}
            style={{
              width: "320px",
              height: "200px",
            }}
          />
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              marginBottom: "15px",
            }}
          >
            Miloud-B
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Ain Defla , Ain Soltan 44019 <br /> Hay Zmala
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Phone: 0777651022
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Email: contact@miloudb.com
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "40px",
              letterSpacing: "1.9px",
              marginTop: "50px",
            }}
          >
            Invoice# :{" "}
            {`MILOUDB${new Date().getFullYear()}${new Date().getDay()}`}
          </Text>
        </View>
        <View style={{ margin: "30px 0" }}>
          <Text>
            Tracking Number :{" "}
            {`MILOUDB${new Date().getFullYear() + 1}${new Date().getDay()}`}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "26px",
              marginBottom: "15px",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "5px",
            }}
          >
            {`${state} - ${city}`}
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Algeria
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Phone: {phone}
          </Text>
        </View>
        <View style={{ position: "absolute", top: "550px", right: "160px" }}>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Date : {moment(new Date().getTime()).format("DD/MM/YYYY HH:MM")}
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Shipping type : Home
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "40px",
              letterSpacing: "1.9px",
              marginTop: "50px",
            }}
          >
            Product Details
          </Text>
        </View>
        <View style={{ marginTop: "50px", paddingLeft: "80px" }}>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Product Name :
          </Text>

          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Unit Price :
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Shipping :
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Quantity :
          </Text>
        </View>
        <View>
          <Text>
            _________________________________________________________________________
          </Text>
        </View>
        <View style={{ position: "absolute", top: "762px", right: "300px" }}>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            {productName?.slice(0, 17)}
          </Text>

          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            {price} DA
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            {shipping} DA
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            {quantity} Piece
          </Text>
        </View>
        <View style={{ marginTop: "30px", paddingLeft: "80px" }}>
          <Text>Total Price : {+price * +quantity + +shipping} DA</Text>
        </View>
        <View style={{ marginTop: "50px", paddingLeft: "80px" }}>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Create By : B.Miloud
          </Text>
          <Text
            style={{
              fontSize: "19px",
              marginBottom: "15px",
            }}
          >
            Date : {moment(new Date().getTime()).format("DD/MM/YYYY HH:MM")}
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: "40px", right: "50px" }}>
          <Image
            src={Byme}
            style={{
              width: "200px",
              height: "100px",
            }}
          />
        </View>
      </Page>
    </Document>
  );
};
const OrdersActions = ({
  id,
  name,
  state,
  city,
  phone,
  productName,
  price,
  quantity,
  shipping,
}) => {
  const navigate = useNavigate();
  const { refrech, setRefrech } = useGlobalContext();
  const handleDelete = async (id) => {
    {
      /*   try {
      await fetch(`http://localhost:1337/api/orders/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/all-orders");
      setRefrech(!refrech);
    } catch (error) {
      console.log(error);
    } */
    }
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        width="49%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Tooltip title="Download">
          <IconButton>
            <PDFDownloadLink
              document={
                <OrderPDF
                  name={name}
                  phone={phone}
                  state={state}
                  city={city}
                  price={price}
                  productName={productName}
                  quantity={quantity}
                  shipping={shipping}
                />
              }
              fileName={`order-miloudb-${id}`}
            >
              <AiFillFilePdf style={{ color: "#0000008a" }} />
            </PDFDownloadLink>
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        width="49%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Tooltip title="Delete">
          <IconButton onClick={() => handleDelete(id)}>
            <DeleteIcon sx={{ fontSize: "28px", marginTop: "-6px" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default OrdersActions;

import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../global/Header";
import { useGlobalContext } from "../../context/globalContext";
import { useColorContext } from "../../context/colorContext";
import ImageIcon from "@mui/icons-material/Image";
const AddProduct = () => {
  document.getElementsByTagName("title")[0].textContent =
    "Manora | Add Product";
  const editor = useRef(null);
  // states for sending to back-End
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [error, setError] = useState(false);
  // states for sending to back-End

  const { allCategory, setRefrech, refrech } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const { colors } = useColorContext();

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      /* if (
      !title ||
      !slug ||
      !desc ||
      !imgProduct ||
      !price ||
      !shipping ||
      !productCategory ||
      !metaDesc ||
      !metaTitle
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setLoading(true);
      const item = await fetch(`http://localhost:1337/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },

        body: JSON.stringify({
          data: {
            title: title,
            slug: slug,
            description: desc,
            price: price,
            shipping: shipping,
            category: productCategory,
            metaTitle: metaTitle,
            metaDescription: metaDesc,
          },
        }),
      });
      const itemData = await item.json();
      const { id } = itemData.data;

      const formData = new FormData();
      formData.append("files", imgProduct);
      formData.append("refId", id);
      formData.append("ref", "api::product.product");
      formData.append("field", "productImage");

      await fetch("http://localhost:1337/api/upload", {
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
      setLoading(false);
      setRefrech(!refrech);
      navigate("/products/all-product");
    } */
    }
  };

  const hendleImage = (e) => {
    const selectedFile = e.target.files[0];
    setImgProduct(selectedFile);
    const fileURL = URL.createObjectURL(selectedFile);
    setImagePreview(fileURL);
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
          title={"Products"}
          subTitle="Add Product"
          slug="You can add products that you like here and that suit your work"
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
        sx={{
          "@media(max-width:600px)": {
            padding: "6px",
          },
        }}
      >
        <Box
          padding={3}
          backgroundColor={colors.bg}
          borderRadius={2}
          marginBottom={5}
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
          sx={{
            "@media(max-width:600px)": {
              padding: "6px",
              paddingBottom: "15px",
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box
              padding={3}
              backgroundColor={colors.white}
              borderRadius={2}
              marginBottom={5}
              boxShadow={
                "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
              }
            >
              <Typography
                sx={{
                  marginBottom: "25px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Product Title
              </Typography>
              <TextField
                placeholder="Product Name"
                sx={{ width: "100%", marginBottom: "15px" }}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                placeholder="Slug"
                sx={{ width: "100%", marginBottom: "15px" }}
                onChange={(e) => setSlug(e.target.value)}
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
              <Typography
                sx={{
                  marginBottom: "25px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Product Description
              </Typography>
              <JoditEditor
                ref={editor}
                value={desc}
                tabIndex={2} // tabIndex of textarea
                onBlur={(newContent) => setDesc(newContent)}
                onChange={(newContent) => {}}
              />
            </Box>
            <Box
              padding={3}
              marginBottom={3}
              backgroundColor={colors.white}
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
                  Product Image{" "}
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<ImageIcon />}
                  sx={{ marginBottom: "20px" }}
                >
                  Upload Image
                  <input type="file" hidden onChange={hendleImage} />
                </Button>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "12px",
                  }}
                >
                  (Please upload a clear, square image to display well in your
                  store ) <br /> (You cannot change the image later)
                </Typography>
              </Box>
              {imagePreview && (
                <Box
                  sx={{ aspectRatio: "1/1" }}
                  width="800px"
                  padding={3}
                  backgroundColor={colors.bg}
                  borderRadius={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow={
                    "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
                  }
                >
                  {imagePreview && (
                    <img
                      alt={imgProduct.name}
                      src={imagePreview}
                      style={{ height: "100%", width: "100%" }}
                    />
                  )}
                </Box>
              )}
            </Box>
            <Box
              width="100%"
              padding={3}
              backgroundColor={colors.white}
              borderRadius={2}
              marginBottom="20px"
              boxShadow={
                "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
              }
            >
              <Typography
                sx={{
                  marginBottom: "25px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Product Pricing
              </Typography>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <TextField
                  placeholder="Price"
                  sx={{ width: "49%", marginBottom: "15px" }}
                  onChange={(e) => setPrice(e.target.value)}
                />{" "}
                <TextField
                  placeholder="Shipping"
                  sx={{ width: "49%", marginBottom: "15px" }}
                  onChange={(e) => setShipping(e.target.value)}
                />{" "}
              </Box>
            </Box>
            <Box
              width="100%"
              padding={3}
              backgroundColor={colors.white}
              borderRadius={2}
              marginBottom="20px"
              boxShadow={
                "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
              }
            >
              <Typography
                sx={{
                  marginBottom: "25px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Product Category
              </Typography>
              <Select
                value={categorys}
                onChange={(e) => setProductCategory(e.target.value)}
                sx={{ width: "100%" }}
              >
                {categorys.map((item) => {
                  const { name } = item;

                  return <MenuItem value={name}>{name}</MenuItem>;
                })}
              </Select>
            </Box>
            <Box
              width="100%"
              padding={3}
              backgroundColor={colors.white}
              borderRadius={2}
              marginBottom="20px"
              boxShadow={
                "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
              }
            >
              <Typography
                sx={{
                  marginBottom: "25px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                CEO
              </Typography>
              <TextField
                type="text"
                placeholder="Meta Title"
                sx={{ width: "100%", marginBottom: "15px" }}
                onChange={(e) => setMetaTitle(e.target.value)}
              />{" "}
              <TextField
                placeholder="Meta Description"
                sx={{ width: "100%", marginBottom: "15px" }}
                onChange={(e) => setMetaDesc(e.target.value)}
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
                  "Add Product"
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

export default AddProduct;

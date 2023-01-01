import React, { useState, useRef, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import Header from "../global/Header";
import { useGlobalContext } from "../../context/globalContext";
import { useColorContext } from "../../context/colorContext";

const EditProduct = () => {
  document.getElementsByTagName("title")[0].textContent =
    "Manora | Edit Product";
  const { id } = useParams();
  const editor = useRef(null);

  // states for sending to back-End
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [error, setError] = useState(false);
  // states for sending to back-End

  const { allCategory, setRefrech, refrech, loading, setLoading } =
    useGlobalContext();

  ////////////////////////////// get single product /////////////////////////
  useEffect(() => {
    const getSingleProduct = async () => {
      const data = await fetch(
        `http://localhost:1337/api/products/${id}?populate=productImage`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const productData = await data.json();
      const {
        title,
        slug,
        description,
        shipping,
        price,
        metaDescription,
        metaTitle,
        category,
      } = productData.data.attributes;

      setTitle(title);
      setSlug(slug);
      setDesc(description);
      setShipping(shipping);
      setPrice(price);
      setMetaDesc(metaDescription);
      setMetaTitle(metaTitle);
      setProductCategory(category);
    };
    getSingleProduct();
  }, [id]);
  ////////////////////////////// get single product /////////////////////////

  const { colors } = useColorContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !slug ||
      !desc ||
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
      await fetch(`http://localhost:1337/api/products/${id}`, {
        method: "PUT",
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

      setLoading(false);
      navigate("/products/all-product");
      setRefrech(!refrech);
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
        marginBottom={5}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
      >
        <Header
          title={"Products"}
          subTitle="Edit Product"
          slug="You can Edit products that you like here and that suit your work"
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
                value={title}
              />
              <TextField
                placeholder="Slug"
                sx={{ width: "100%", marginBottom: "15px" }}
                onChange={(e) => setSlug(e.target.value)}
                value={slug}
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
                  value={price}
                />{" "}
                <TextField
                  placeholder="Shipping"
                  sx={{ width: "49%", marginBottom: "15px" }}
                  onChange={(e) => setShipping(e.target.value)}
                  value={shipping}
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
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                sx={{ width: "100%" }}
              >
                {allCategory.map((item) => {
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
                value={metaTitle}
              />{" "}
              <TextField
                placeholder="Meta Description"
                sx={{ width: "100%", marginBottom: "15px" }}
                onChange={(e) => setMetaDesc(e.target.value)}
                value={metaDesc}
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
                  "Edit Product"
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

export default EditProduct;

import React, { useEffect, useState } from "react";
import Singin from "./components/global/Singin";
import { useColorContext } from "./context/colorContext";
import ProtucedRoute from "./ProtucedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./components/single/Dashboard ";
import Topbar from "./components/global/Topbar";
import Sidebar from "./components/global/Sidebar";
import EditCoupon from "./components/single/EditCoupon";
import "./app.scss";
import { useAccessContext } from "./context/accessContext";
import { Box } from "@mui/material";
import AddCategory from "./components/single/AddCategory";
import AllCategory from "./components/single/AllCategory";
import EditCategory from "./components/single/EditCategory";
import AddProduct from "./components/single/AddProduct";
import AllProduct from "./components/single/AllProduct";
import EditProduct from "./components/single/EditProduct";
import AddCoupon from "./components/single/AddCoupon";
import AllCoupons from "./components/single/AllCoupons";
import { useGlobalContext } from "./context/globalContext";
import AddPixel from "./components/single/AddPixel";
import AddGoogleSheet from "./components/single/AddGoogleSheet";
import Account from "./components/single/Account";
import PrivacyPolicy from "./components/single/PrivacyPolicy";
import Support from "./components/single/Support";
import AllOrders from "./components/single/AllOrders";
const App = () => {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY5MTQ0ODgzLCJleHAiOjE2NzE3MzY4ODN9.BYeY4ggm4lQL0etIiVP-5rnIvLBJ5G6Pl8a8hWlRNy4"
  );
  const { token } = useAccessContext();
  const { colors } = useColorContext();
  const { coupons, setRefrech, refrech } = useGlobalContext();

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:1337/api/coupons/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRefrech(!refrech);
    } catch (error) {
      console.log(error);
    }
  };

  for (let i = 0; i < coupons.length; i++) {
    if (new Date().getTime().toString() > coupons[i].dateTwo.toString()) {
      const id = parseInt(coupons[i].id);

      handleDelete(id);
    }
  }

  return (
    <div
      className="conetnt"
      style={{ background: colors.bg, position: "relative", height: "100vh" }}
    >
      <Router>
        {!token ? (
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route path="/singin" element={<Singin />} />
            <Route element={<ProtucedRoute />}>
              <Route element={<Dashboard />} path="/dashboard" />
            </Route>
          </Routes>
        ) : (
          <>
            {window.location.pathname === "/" ||
            window.location.pathname === "/singin" ? (
              <Routes>
                <Route element={<Home />} path="/" exact />
                <Route path="/singin" element={<Singin />} />
                <Route element={<ProtucedRoute />}>
                  {" "}
                  <Route element={<Dashboard />} path="/dashboard" />
                </Route>
              </Routes>
            ) : (
              <>
                <Box display={"flex"} justifyContent="space-between">
                  <Sidebar />

                  <Box
                    width={"100%"}
                    height={"100%"}
                    sx={{
                      "@media(max-width: 900px)": {
                        paddingLeft: "0px",
                      },
                    }}
                  >
                    <Topbar />
                    <Routes>
                      <Route element={<Home />} path="/" exact />
                      <Route path="/singin" element={<Singin />} />
                      <Route element={<ProtucedRoute />}>
                        <Route element={<Dashboard />} path="/dashboard" />
                        <Route
                          element={<AddCategory />}
                          path="/products/add-category"
                        />
                        <Route
                          element={<AllCategory />}
                          path="/products/all-category"
                        />
                        <Route
                          element={<EditCategory />}
                          path="/products/edit-category/:id"
                        />
                        <Route
                          element={<AddProduct />}
                          path="/products/add-product"
                        />
                        <Route
                          element={<AllProduct />}
                          path="/products/all-product"
                        />
                        <Route
                          element={<EditProduct />}
                          path="/edit-product/:id"
                        />
                        <Route
                          element={<AddCoupon />}
                          path="/coupons/add-coupon"
                        />
                        <Route
                          element={<AllCoupons />}
                          path="/coupons/all-coupons"
                        />
                        <Route
                          element={<EditCoupon />}
                          path="/coupons/edit-coupon/:id"
                        />
                        <Route
                          element={<AddPixel />}
                          path="/apps/facebook-pixel"
                        />
                        <Route
                          element={<AddGoogleSheet />}
                          path="/apps/google-sheet"
                        />
                        <Route element={<Account />} path="/settings/account" />
                        <Route
                          element={<PrivacyPolicy />}
                          path="/settings/privacy-policy"
                        />
                        <Route element={<Support />} path="/support" />
                        <Route element={<AllOrders />} path="/all-orders" />
                      </Route>
                    </Routes>
                  </Box>
                </Box>
              </>
            )}
          </>
        )}
      </Router>
    </div>
  );
};

export default App;

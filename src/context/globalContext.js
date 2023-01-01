import moment from "moment";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [refrech, setRefrech] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [productMenu, setProductMenu] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [ID, setID] = useState("");
  const [NAME, setName] = useState("");
  const [DESC, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [orders, setOrders] = useState([]);
  const [url, setUrl] = useState([]);
  // get All category
  //////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const getCategory = async () => {
      try {
        setLoading(true);

        const data = await fetch("http://localhost:1337/api/categorys", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const allCategory = await data.json();
        const tempAllcategory = allCategory.data.map((item) => {
          const { id } = item;
          const { name, description } = item.attributes;
          return { id, name, description };
        });
        setAllCategory(tempAllcategory);
        console.log(tempAllcategory);

        setLoading(false);
      } catch (error) {}
    };
    getCategory();
  }, [refrech]);
  //////////////////////////////////////////////////////////////////////////////////
  // get All category

  // get one item category
  //////////////////////////////////////////////////////////////////////////////////
  const getItem = async (idCategory) => {
    try {
      setLoading(true);
      const item = await fetch(
        `http://localhost:1337/api/categorys/${idCategory}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await item.json();
      const { id } = data.data;
      const { name, description } = data.data.attributes;

      setID(id);
      setName(name);
      setDesc(description);

      setLoading(false);
    } catch (error) {}
  };
  //////////////////////////////////////////////////////////////////////////////////
  ////////////////////// get single category

  //////////////////// get all products /////////////////////

  const getAllProduct = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        `http://localhost:1337/api/products?populate=productImage`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const allProducts = await data.json();

      const tempAllProduct = allProducts.data.map((item) => {
        const { id } = item;
        const {
          description,
          title,
          slug,
          shipping,
          price,
          publishedAt,
          createdAt,
          metaDescription,
          metaTitle,
          category,
        } = item.attributes;

        const { url } = item.attributes.productImage.data[0].attributes;

        return {
          url: `http://localhost:1337${url}`,
          id,
          title,
          category,
          createdAt,
          slug,
          shipping,
          price,
          publishedAt,
          metaDescription,
          description,
          metaTitle,
        };
      });
      setLoading(false);
      setAllProduct(tempAllProduct);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, [refrech]);
  //////////////////// get all products /////////////////////

  //////////////////////// get coupons /////////////////////////////
  const getAllCoupons = async () => {
    try {
      setLoading(true);
      const data = await fetch(`http://localhost:1337/api/coupons`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const allCoupons = await data.json();

      const tempCoupons = allCoupons.data.map((item) => {
        const info = item.attributes.productID.split(",");
        const [ProductId, url] = info;
        const { id } = item;
        const { code, discount, dateOne, dateTwo, createdAt, publishedAt } =
          item.attributes;
        const formatDateOne = moment(new Date(+dateOne)).format("DD-MM-YYYY");
        const formatDateTwo = moment(new Date(+dateTwo)).format("DD-MM-YYYY");

        return {
          id,
          ProductId,
          url,
          code,
          formatDateOne,
          formatDateTwo,
          discount,
          dateOne,
          dateTwo,
          createdAt,
          publishedAt,
        };
      });
      setCoupons(tempCoupons);

      console.log(tempCoupons);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCoupons();
  }, [refrech]);

  const getAllOrders = async () => {
    try {
      setLoading(true);
      const data = await fetch(`http://localhost:1337/api/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const allOrders = await data.json();

      const tempOrders = allOrders.data.map((item) => {
        const { id } = item;
        const {
          name,
          phone,
          productName,
          shipping,
          state,
          city,
          quantity,
          price,
          url,
          createdAt,
        } = item.attributes;

        return {
          id,
          name,
          phone,
          shipping,
          createdAt,
          state,
          city,
          quantity,
          price,
          productName,
          url,
        };
      });

      setOrders(tempOrders);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllOrders();
  }, [refrech]);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        ID,
        DESC,
        NAME,
        getItem,
        setCurrentItem,
        productMenu,
        setProductMenu,
        allCategory,
        collapsed,
        setCollapsed,
        setAllCategory,
        currentItem,
        setRefrech,
        refrech,
        allProduct,
        coupons,
        orders,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Context);
};

export { Provider };

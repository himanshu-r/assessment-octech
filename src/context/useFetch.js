import { useState, useEffect } from "react";


export const API_URL = "https://fakestoreapi.com/products";


const useFetch = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [products, setProducts] = useState(null);

  const getProducts = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      if (data) {
        setIsLoading(false);
        setProducts(data);
        setIsError({ show: "false", msg: "" });
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getProducts(`${API_URL}/${id}`);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [id]);

  return { isLoading, isError, products };
};

export default useFetch;
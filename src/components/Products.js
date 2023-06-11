import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Products = () => {
  const { products, isLoading } = useGlobalContext();
  console.log(products)
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <>
      <section className="container product-page">
        <div className="grid grid-4-col">
          {products
            ? products.map((product) => {
                const { id, category, image, title, price } = product;
                const productName = title.substring(0, 15);

                return (
                  <NavLink to={`products/${id}`} key={id}>
                    <div className="card">
                      <div className="card-info">
                            <img src={image} alt="#" />
                        <h2>
                          {productName.length > 13
                            ? `${productName}...`
                            : productName}
                        </h2>
                        <h3>
                        ₹ {price}
                        </h3>
                        <h4>
                            {category.toUpperCase()}
                        </h4>
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Products;
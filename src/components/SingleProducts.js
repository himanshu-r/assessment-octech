import { NavLink, useParams } from "react-router-dom";
import useFetch from "../context/useFetch";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, products, isError } = useFetch(`/${id}`);
  
  if (isLoading) {
    return (
      <section className="product-section ">
        <div className="loading">Loading...</div>;
        {console.log(products)}
      </section>
    );
  }

  return (
    <section className="product-section">
      {console.log(products)}
      <div className="product-card">
        <figure>
          <img src={products.image} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{products.title}</p>
          <p className="card-text">{products.category.toUpperCase()}</p>
          <p className="card-text">₹ {products.price}</p>
          <p className="card-text">{products.description} / 10</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
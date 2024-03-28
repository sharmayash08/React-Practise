import { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="card-container">
      <div className="cards">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img className="thumbnail" src={product.thumbnail} alt="" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetching;

import { Link } from 'react-router-dom';
//import data from '../data';
import { useEffect, useState } from 'react';
import axios from 'axios';

function HomeScreen() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setproducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Product</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>Rs.{product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;

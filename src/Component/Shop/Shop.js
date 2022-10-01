import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
  const [products,setProducts] = useState([]);
  useEffect( () =>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  const handleAddToCart = (product) =>{
   console.log(product);
}
    return (
        <div className='body-ct'> 
            <div className="product-container">
               {
                  products.map(product => <Product
                  key={product.id}
                  product ={product}
                  handleAddToCart = {handleAddToCart}
                  ></Product>)
               }
            </div>
            <div className="summery">
               <h1>Summery</h1>
            </div>
        </div>
    );
};

export default Shop;
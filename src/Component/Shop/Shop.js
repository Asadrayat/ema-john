import { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
  const [products,setProducts] = useState([]);
  useEffect( () =>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
    return (
        <div className='body-ct'> 
            <div className="product-container">
               <h1>this is product : {products.length}</h1>
            </div>
            <div className="summery">
               <h1>Summery</h1>
            </div>
        </div>
    );
};

export default Shop;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Component/Shop/Shop'
import './App.css';
import Root from './Component/Root/Root';
import Order from './Component/Order/Order';
import About from './Component/About/About';
import Inventory from './Component/Inventory/Inventory';
import { productAndStorderCartLoader } from './Loader/ProductAndStoredCart';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <Root></Root>,
      children : [
        {
          path : "/",
          loader : () => fetch('./fakeData/products.json'),
          element : <Shop></Shop>
        },
        {
          path : "/shop",
          loader : () => fetch('./fakeData/products.json'),
          element : <Shop></Shop>
        },
        {
          path : "/order",
          loader : productAndStorderCartLoader,
          element : <Order></Order>
        },
        {
          path : "/about",
          element : <About></About>
        },
        {
          path : "/inventory",
          element : <Inventory></Inventory>
        },
      ]
    },
  ]);
  return (
    <div >
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;

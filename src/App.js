import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Component/Shop/Shop'
import './App.css';
import Root from './Component/Root/Root';
import Order from './Component/Order/Order';
import About from './Component/About/About';
import Inventory from './Component/Inventory/Inventory';
import { productAndStorderCartLoader } from './Loader/ProductAndStoredCart';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Shipping from './Component/Shipping/Shipping';
import PrivateRoute from './Route/PrivateRoute';
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
          element : <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path : "/login",
          element : <Login></Login>
        },
        {
          path : "/shipping",
          element : <PrivateRoute><Shipping></Shipping></PrivateRoute> 
        },
        {
          path : "/signin",
          element : <SignUp></SignUp>
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

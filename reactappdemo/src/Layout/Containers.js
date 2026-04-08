import "../App.css";
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../Membership/Login';
import Register from '../Membership/Register';
import List from '../ProductCatalog/List';
import Orders from '../OrderProcessiong/Orders';
import Cart from '../ShoppingCart/Cart';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import GoodBye from "./Goodbye";
import Hello from "./Hello";


function BasicRouting() {
  return (
    <div className='text-center'>
      <h1>Transflower Store</h1>

      <Link to="/Home">Home</Link> |
      <Link to="/About">About us</Link> |
      <Link to="/Contact">Contact</Link> |
      <Link to="/Flowers">Flowers</Link> |
      <Link to="/Login">Login</Link> |
      <Link to="/Register">Register</Link>|
      <Link to="/orders">Orders</Link>|
      <Link to="/hello">Hello</Link>|
      <Link to="/cart">Shopping Cart</Link>|


      <hr />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Flowers" element={<List />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/goodbye" element={<GoodBye />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/hello" element={<Hello />} />

      </Routes>
    </div>
  );
}

export default BasicRouting;
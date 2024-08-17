import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Garage from "../pages/Garage";
import Services from "../pages/Services";
import OrderDetail from "../pages/OrderDetail";
import Login from "../pages/Login";
import CartList from "../pages/CartList";
const RoutePath = () => {
    return (
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/orderDetail" element={<OrderDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path='cartList' element={<CartList />} />
       </Routes>
    );
};
 export default RoutePath;
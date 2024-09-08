import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Garage from '../pages/Garage';
import Services from '../pages/Services';
import OrderDetail from '../pages/OrderDetail';
import Login from '../pages/Login';
import CartList from '../pages/CartList';
import Register from '../pages/Register';
import { ItemDetailContainer } from '../components/Container/ItemDetailContainer';

const RoutePath = () => {
    return (
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/item/:id" element={<OrderDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="cartList" element={<CartList />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/register" element={<Register />} />
       </Routes>
    );
};

export default RoutePath;
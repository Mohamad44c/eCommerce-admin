import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Home from "./Pages/home/Home";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />

          {admin && (
            <>
              <Route exact path="" element={<Topbar />} />
              <Route exact path="" element={<Sidebar />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<UserList />} />
              <Route exact path="/user/:userId" element={<User />} />
              <Route exact path="/newUser" element={<NewUser />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/product/:productId" element={<Product />} />
              <Route exact path="/newproduct" element={<NewProduct />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

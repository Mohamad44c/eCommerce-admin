import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  // console.log(admin);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/"><Home /></Route>
              <Route path="/users"><UserList /></Route>
              <Route path="/user/:userId"><User /></Route>
              <Route path="/newUser"><NewUser /></Route>
              <Route path="/products"><ProductList /></Route>
              <Route path="/product/:productId"><Product /></Route>
              <Route path="/newproduct"><NewProduct /></Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import "./app.css"
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
      <Route path="/login"  element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      {user && 
        <>
          <Topbar /> 
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/"  element={<Home />} />      
              <Route path="/users"  element={<UserList />} />
              <Route path="/user/:userId"  element={<User />} />
              <Route path="/newUser"  element={<NewUser />} />
              <Route path="/movies"  element={<MovieList />} />
              <Route path="/product/:productId"  element={<Movie />} />
              <Route path="/newProduct"  element={<NewMovie />} />
            </Routes>
          </div> 
        </>}
        
    </Router>
  );
}

export default App;

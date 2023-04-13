import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToDoList from "./component/content/ToDoList";
import WeatherPage from "./component/content/WeatherPage";
import HomePage from "./component/HomePage";
import Welcome from "./component/access/Login";
import NotFound from "./component/NotFound";
import Register from "./component/access/Register";
import Login from "./component/access/Login";

import './index.css';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});


  const handleLogin = (userInfo) => {
    setLoggedIn(true);
    setUser(userInfo);
  };
  console.log(user);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              loggedIn ? <HomePage name={user.name} /> : <Welcome onLogin={handleLogin} />
            }
          />
          <Route path="/Register" element={<Register onLogin={handleLogin} />} />

          <Route path="/Login" element={<Welcome onLogin={handleLogin} />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

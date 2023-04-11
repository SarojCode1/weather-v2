import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToDoList from "./component/ToDoList";
import WeatherPage from "./component/WeatherPage";
import HomePage from "./component/HomePage";
import Welcome from "./component/Welcome";
import NotFound from "./component/NotFound";
import './index.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (userInfo) => {
    setLoggedIn(true);
    setUser(userInfo);
  };

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
          <Route path="/login" element={<Welcome onLogin={handleLogin} />} />
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

import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import LoginPage from "./Components/LoginPage";
import Footer from "./Components/NavBar/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

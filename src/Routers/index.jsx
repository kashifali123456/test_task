import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Marketplace from "../Pages/Marketplace";
import Activity from "../Pages/Activity";
import CuratedDrops from "../Pages/CuratedDrops";
import VarifiedDrops from "../Pages/VarifiedDrops";
const Routers = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Marketplace />} />
        <Route path="/" exact element={<Activity />} />
        <Route path="/" exact element={<CuratedDrops />} />
        <Route path="/" exact element={<VarifiedDrops />} />
      </Routes>
    </Router>
  );
};

export default Routers;

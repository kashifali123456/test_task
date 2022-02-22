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
        <Route path="activity" exact element={<Activity />} />
        <Route path="curateddrops" exact element={<CuratedDrops />} />
        <Route path="varifieddrops" exact element={<VarifiedDrops />} />
      </Routes>
    </Router>
  );
};

export default Routers;

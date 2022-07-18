import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Series from "./pages/Series";
import Header from "./components/header";
import BottomNavigation from "./components/BottomNavigation";

const App = () => {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <BottomNavigation/>
    </>
  );
};

export default App;

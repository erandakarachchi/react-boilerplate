import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers...
import { HomeScreen, ExampleScreen } from "./../containers";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="example" element={<ExampleScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

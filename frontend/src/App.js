import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="sm:m-1 lg:mx-24">
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/blog" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

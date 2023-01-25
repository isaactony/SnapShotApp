import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from './Gallery';
import People from './People';

function App() {
  return (
    <div className="container">
      
        
      <NavBar />
      <Routes>
          <Route path="/" element={<Navigate to="/Gallery" />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/people" element={<People />} />

   
    </Routes>
   
      
    </div>
  );
}

export default App;

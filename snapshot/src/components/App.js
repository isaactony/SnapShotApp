
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from './Gallery';
import People from './People';
import Nature from './Nature';
import Cities from './Cities';
import Animals from './Animals';


function App() {
  return (
    <div className="container">
        <NavBar />
      <Routes>
          <Route path="/" element={<Navigate to="/Gallery" />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/people" element={<People />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/animals" element={<Animals/>} />

   
        </Routes>
   
      
    </div>
  );
}

export default App;

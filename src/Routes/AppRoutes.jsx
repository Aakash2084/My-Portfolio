import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home, About, Contact, Education, Projects, Skills } from "../index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/skills" element={<Skills />} />

      <Route path="/education" element={<Education />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;

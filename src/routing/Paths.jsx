import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Index } from "../components/pages/Index";
import { Results } from "../components/pages/Results";

export const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/relationship-time-tracker/" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

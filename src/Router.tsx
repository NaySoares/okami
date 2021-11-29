import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { NotFound } from "./pages/NotFound";

export function Routers() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
  );
}
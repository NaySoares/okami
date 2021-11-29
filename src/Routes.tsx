import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { NotFound } from "./pages/NotFound";

export function Routers() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/project" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
  );
}
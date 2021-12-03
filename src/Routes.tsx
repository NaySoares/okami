import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { ChapterPage } from "./pages/ChapterPage";
import { Team } from "./pages/Team";
import { NotFound } from "./pages/NotFound";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="/project" element={<NotFound />} />
      <Route path="/project/:id/:volume/:chapterId" element={<ChapterPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "../src/pages/About";
import Project from "../src/pages/Project";

function App() {
  return (
    <MainLayout>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
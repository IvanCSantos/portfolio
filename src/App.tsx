import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header.tsx";
import { Routes, Route, useNavigate } from "react-router";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Career } from "./pages/Carreer/Career";
import { Curriculum } from "./pages/Curriculum/Curriculum";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

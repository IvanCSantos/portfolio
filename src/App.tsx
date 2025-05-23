import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Routes, Route, useNavigate } from "react-router";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Career } from "./pages/Carreer/Career";
import { Curriculum } from "./pages/Curriculum/Curriculum";
import type { Language } from "./config/types";

function App() {
  const [lang, setLang] = React.useState<Language>("ptBR");

  React.useEffect(() => {
    getPreferredLanguage();
  }, []);

  React.useEffect(() => {
    localStorage.setItem("preferredLanguage", lang);
  }, [lang]);

  function getPreferredLanguage() {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang === "ptBR" || storedLang === "en") {
      setLang(storedLang);
    }
  }

  function handleChangeLang() {
    setLang((prev) => (prev === "ptBR" ? "en" : "ptBR"));
  }

  return (
    <>
      <Header lang={lang} changeLang={handleChangeLang} />
      <main className="max-w-[1400px] lg:w-[1400px] mx-auto">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/career" element={<Career lang={lang} />} />
          <Route path="/curriculum" element={<Curriculum lang={lang} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Career } from "./pages/Carreer/Career";
import { Projects } from "./pages/Projects/Projects";
import type { Language } from "./config/types";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [lang, setLang] = React.useState<Language>(null);

  React.useEffect(() => {
    const preferredLanguage = localStorage.getItem("preferredLanguage");
    if (
      preferredLanguage &&
      (preferredLanguage === "ptBR" || preferredLanguage === "en")
    ) {
      setLang(preferredLanguage);
    } else {
      setLang("ptBR");
    }
  }, []);

  React.useEffect(() => {
    if (lang) {
      localStorage.setItem("preferredLanguage", lang);
    }
  }, [lang]);

  function handleChangeLang() {
    setLang((prev) => (prev === "ptBR" ? "en" : "ptBR"));
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-secondary">
      <Header lang={lang} changeLang={handleChangeLang} />
      <main className="flex-grow px-4 md:px-8 xl:max-w-[1400px] mx-auto">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/career" element={<Career lang={lang} />} />
          <Route path="/projects" element={<Projects lang={lang} />} />
        </Routes>
      </main>
      <Analytics />
      <Footer lang={lang} />
    </div>
  );
}

export default App;

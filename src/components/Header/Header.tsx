import React from "react";
import logo from "../../assets/logo_roxo.svg";
import { NavLink } from "react-router";
import { Link as Anchor } from "../../components/Link/Link";
import { ptBR, en } from "../../config/texts.ts";
import { Button } from "../Button/Button";
import type { Language } from "../../config/types.js";
import { Globe, List, X } from "phosphor-react";
import { Text } from "../../components/Text/Text";

interface HeaderProps {
  lang: Language;
  changeLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, changeLang }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const cvUrl = lang === "ptBR" ? "curriculo.pdf" : "resume.pdf";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex flex-row px-4 md:px-8 xl:max-w-[1400px] mx-auto h-24 w-full">
        <div className="flex items-center">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center px-4 ${
                isActive ? "*:text-hover" : "*:text-secondary"
              }`
            }
          >
            <img
              className="w-20 hover:scale-110 transition-all"
              src={logo}
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* DESKTOP MENU md+ (768px+) */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 block ${
                    isActive ? "*:text-hover" : "*:text-secondary"
                  }`
                }
              >
                <Text
                  as="h3"
                  className="hover:text-hover hover:scale-110 transition-all"
                >
                  {lang === "ptBR"
                    ? ptBR.header.about.toUpperCase()
                    : en.header.about.toUpperCase()}
                </Text>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  `px-4 py-2 block ${
                    isActive ? "*:text-hover" : "*:text-secondary"
                  }`
                }
              >
                <Text
                  as="h3"
                  className="hover:text-hover hover:scale-110 transition-all"
                >
                  {lang === "ptBR"
                    ? ptBR.header.career.toUpperCase()
                    : en.header.career.toUpperCase()}
                </Text>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `px-4 py-2 block ${
                    isActive ? "*:text-hover" : "*:text-secondary"
                  }`
                }
              >
                <Text
                  as="h3"
                  className="hover:text-hover hover:scale-110 transition-all"
                >
                  {lang === "ptBR"
                    ? ptBR.header.projects.toUpperCase()
                    : en.header.projects.toUpperCase()}
                </Text>
              </NavLink>
            </li>
            <li>
              <Anchor
                url={cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 block"
              >
                <Text
                  as="h3"
                  className="text-purple-1 hover:text-hover hover:scale-110 transition-all"
                >
                  {lang === "ptBR"
                    ? ptBR.header.curriculum.toUpperCase()
                    : en.header.curriculum.toUpperCase()}
                </Text>
              </Anchor>
            </li>
          </ul>
        </div>

        {/* LANGUAGE */}
        <div className="flex flex-1 md:flex-none md:items-center md:w-20 justify-between gap-4">
          {/* HAMBURGER MENU */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-purple-1 hover:text-hover transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>

          {/* LANGUAGE BUTTON */}
          <Button
            onClick={changeLang}
            // className="text-purple-1 hover:text-hover hover:scale-110 transition-all"
          >
            <Globe size={24} />
            <span className="hidden sm:inline">
              {lang === "ptBR" ? "PT" : "EN"}
            </span>
          </Button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-purple-8">
            <img className="w-20" src={logo} alt="Logo" />
            <button
              onClick={closeMenu}
              className="p-2 text-purple-1 hover:text-hover transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8 p-8">
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-center ${isActive ? "text-hover" : "text-secondary"}`
              }
            >
              <Text as="h2" className="hover:text-hover transition-colors">
                {lang === "ptBR"
                  ? ptBR.header.about.toUpperCase()
                  : en.header.about.toUpperCase()}
              </Text>
            </NavLink>

            <NavLink
              to="/career"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-center ${isActive ? "text-hover" : "text-secondary"}`
              }
            >
              <Text as="h2" className="hover:text-hover transition-colors">
                {lang === "ptBR"
                  ? ptBR.header.career.toUpperCase()
                  : en.header.career.toUpperCase()}
              </Text>
            </NavLink>

            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-center ${isActive ? "text-hover" : "text-secondary"}`
              }
            >
              <Text as="h2" className="hover:text-hover transition-colors">
                {lang === "ptBR"
                  ? ptBR.header.projects.toUpperCase()
                  : en.header.projects.toUpperCase()}
              </Text>
            </NavLink>

            <Anchor
              url={cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-center"
            >
              <Text
                as="h2"
                className="text-purple-1 hover:text-hover transition-colors"
              >
                {lang === "ptBR"
                  ? ptBR.header.curriculum.toUpperCase()
                  : en.header.curriculum.toUpperCase()}
              </Text>
            </Anchor>
          </nav>
        </div>
      )}
    </>
  );
};

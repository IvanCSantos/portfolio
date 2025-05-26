import React from "react";
import logo from "../../assets/logo_roxo.svg";
import { NavLink } from "react-router";
import { Link as Anchor } from "../../components/Link/Link";
import { ptBR, en } from "../../config/texts.ts";
import { Button } from "../Button/Button";
import type { Language } from "../../config/types.js";
import { Globe } from "phosphor-react";
import { Text } from "../../components/Text/Text";

interface HeaderProps {
  lang: Language;
  changeLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, changeLang }) => {
  const cvUrl = lang === "ptBR" ? "curriculo.pdf" : "resume.pdf";

  return (
    <header className="flex flex-row w-full h-24">
      <div className="max-w-[1400px] lg:w-[1400px] flex flex-row h-full mx-auto">
        {/* LOGO */}
        <div className="flex w-[180px] h-full items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center h-full px-4 ${
                isActive ? "*:text-purple-1" : "*:text-white"
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

        {/* MENU */}
        <div className="flex h-full flex-1 items-center justify-center">
          <ul className="flex items-center justify-center gap-8 h-full">
            <li className="h-full">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 align-middle h-full ${
                    isActive ? "*:text-hover" : "*:text-purple-1"
                  }`
                }
              >
                <Text
                  as="h3"
                  variant="title3"
                  className="hover:text-hover hover:scale-110 transition-all"
                >
                  {lang === "ptBR"
                    ? ptBR.header.about.toUpperCase()
                    : en.header.about.toUpperCase()}
                </Text>
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  `px-4 align-middle h-full ${
                    isActive ? "*:text-hover" : "*:text-purple-1"
                  }`
                }
              >
                <Text
                  as="h3"
                  variant="title3"
                  className="hover:text-hover hover:scale-110 transition-all"
                >
                  {lang === "ptBR"
                    ? ptBR.header.career.toUpperCase()
                    : en.header.career.toUpperCase()}
                </Text>
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `px-4 align-middle h-full ${
                    isActive ? "*:text-hover" : "*:text-purple-1"
                  }`
                }
              >
                <Text
                  as="h3"
                  variant="title3"
                  className="hover:text-hover hover:scale-110 transition-all"
                >
                  {lang === "ptBR"
                    ? ptBR.header.projects.toUpperCase()
                    : en.header.projects.toUpperCase()}
                </Text>
              </NavLink>
            </li>
            <li className="h-full">
              <Anchor
                url={cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 align-middle h-full"
              >
                <Text
                  as="h3"
                  variant="title3"
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

        {/* BUTTON */}
        <div className="flex h-24 w-[180px] items-center justify-end p-8 text-purple-1 hover:text-hover hover:scale-110 transition-all">
          <Button onClick={changeLang}>
            <Globe size={24} />
            <span>{lang === "ptBR" ? "PT" : "EN"}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

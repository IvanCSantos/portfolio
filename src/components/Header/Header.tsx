import React from "react";
import logo from "../../assets/logo_preto.svg";
import { Link } from "react-router";
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
  return (
    <header className="flex flex-row w-full h-24">
      <div className="max-w-[1400px] lg:w-[1400px] flex flex-row h-full mx-auto">
        {/* LOGO */}
        <div className="flex w-[180px] h-full items-center">
          <Link to="/" className="flex items-center h-full px-4">
            <img className="w-20" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* MENU */}
        <div className="flex h-full flex-1 items-center justify-center">
          <ul className="flex items-center justify-center gap-4 h-full">
            <li className="h-full">
              <Link to="/about" className="px-4 align-middle h-full">
                <Text as="h3" variant="title3">
                  {lang === "ptBR"
                    ? ptBR.header.about.toUpperCase()
                    : en.header.about.toUpperCase()}
                </Text>
              </Link>
            </li>
            <li className="h-full">
              <Link to="/career" className="px-4 align-middle h-full">
                <Text as="h3" variant="title3">
                  {lang === "ptBR"
                    ? ptBR.header.career.toUpperCase()
                    : en.header.career.toUpperCase()}
                </Text>
              </Link>
            </li>
            <li className="h-full">
              <Link to="/projects" className="px-4 align-middle h-full">
                <Text as="h3" variant="title3">
                  {lang === "ptBR"
                    ? ptBR.header.projects.toUpperCase()
                    : en.header.projects.toUpperCase()}
                </Text>
              </Link>
            </li>
            <li className="h-full">
              <Link to="/curriculum" className="px-4 align-middle h-full">
                <Text as="h3" variant="title3">
                  {lang === "ptBR"
                    ? ptBR.header.curriculum.toUpperCase()
                    : en.header.curriculum.toUpperCase()}
                </Text>
              </Link>
            </li>
          </ul>
        </div>

        {/* BUTTON */}
        <div className="flex h-24 w-[180px] items-center justify-end p-8">
          <Button onClick={changeLang}>
            <Globe size={24} />
            <span>{lang === "ptBR" ? "PT" : "EN"}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

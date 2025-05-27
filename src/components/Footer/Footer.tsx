import React from "react";
import { Link } from "../Link/Link";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "phosphor-react";
import type { Language } from "../../config/types.js";

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="pt-8 md:pt-0 flex flex-row gap-4 items-center justify-center h-12 *:hover:text-hover">
      <Link url="mailto:ivancsantos@hotmail.com.br" newTab>
        <EnvelopeSimple
          size={32}
          className="transition-transform hover:scale-110"
        />
      </Link>
      <Link
        url={
          lang === "ptBR"
            ? "https://www.linkedin.com/in/ivancsantos/"
            : "https://www.linkedin.com/in/ivancsantos/?locale=en_US"
        }
        newTab
      >
        <LinkedinLogo
          size={32}
          className="transition-transform hover:scale-110"
        />
      </Link>
      <Link url="https://github.com/IvanCSantos" newTab>
        <GithubLogo
          size={32}
          className="transition-transform hover:scale-110"
        />
      </Link>
      <Link url="https://www.instagram.com/ivancsantoss/" newTab>
        <InstagramLogo
          size={32}
          className="transition-transform hover:scale-110"
        />
      </Link>
    </footer>
  );
};

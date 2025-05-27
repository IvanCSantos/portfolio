import React from "react";
import { Text } from "../../components/Text/Text";
import { ptBR, en } from "../../config/texts.ts";
import type { Language } from "../../config/types.js";

interface HomeProps {
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  const textContent =
    lang === "ptBR" ? ptBR.home.textContent : en.home.textContent;

  return (
    <div className="mt-12 md:mt-24 xl:mt-36">
      <section className="flex flex-col">
        <Text
          as="h1"
          className="text-center text-4xl md:text-6xl xl:text-7xl font-bold mx-auto --font-primary text-white"
        >
          {lang === "ptBR"
            ? ptBR.home.siteTitle.toUpperCase()
            : en.home.siteTitle.toUpperCase()}
        </Text>
        <Text
          as="h2"
          className="text-center text-3xl md:text-5xl xl:text-6xl font-bold py-2 mx-auto --font-primary text-secondary"
        >
          {lang === "ptBR"
            ? ptBR.home.professionalTitle
            : en.home.professionalTitle}
        </Text>
      </section>
      <section className="flex flex-col mt-24">
        {textContent &&
          textContent.map((paragraph) => (
            <Text
              as="p"
              className="text-center text-lg md:text-xl xl:w-1/2 h-fit p-4 mx-auto --font-secondary text-secondary"
            >
              {paragraph}
            </Text>
          ))}
      </section>
    </div>
  );
};

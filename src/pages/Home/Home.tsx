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
    <div className="mt-24">
      <section className="flex flex-col mt-36">
        <Text
          as="h1"
          variant="title1"
          className="text-7xl font-bold mx-auto --font-primary text-white"
        >
          {lang === "ptBR"
            ? ptBR.home.siteTitle.toUpperCase()
            : en.home.siteTitle.toUpperCase()}
        </Text>
        <Text
          as="h2"
          variant="title2"
          className="font-bold py-2 mx-auto text-4xl --font-primary text-secondary"
        >
          {lang === "ptBR"
            ? ptBR.home.professionalTitle
            : en.home.professionalTitle}
        </Text>
      </section>
      <section className="flex flex-col mt-36">
        {textContent &&
          textContent.map((paragraph) => (
            <Text
              as="p"
              variant="paragraph"
              className="w-1/2 h-fit p-4 mx-auto text-center text-xl --font-secondary text-secondary"
            >
              {paragraph}
            </Text>
          ))}
      </section>
    </div>
  );
};

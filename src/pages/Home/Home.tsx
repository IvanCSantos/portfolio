import React from "react";
import { Text } from "../../components/Text/Text";
import { ptBR, en } from "../../config/texts.ts";
import type { Language } from "../../config/types.js";

interface HomeProps {
  lang: Language;
}

export const Home: React.FC<HomeProps> = ({ lang }) => {
  return (
    <div className="mt-24">
      <section className="flex flex-col mt-36">
        <Text as="h1" variant="title1" className="text-5xl font-bold mx-auto">
          {lang === "ptBR"
            ? ptBR.home.siteTitle.toUpperCase()
            : en.home.siteTitle.toUpperCase()}
        </Text>
        <Text as="h2" variant="title2" className="font-bold mx-auto">
          {lang === "ptBR"
            ? ptBR.home.professionalTitle
            : en.home.professionalTitle}
        </Text>
      </section>
      <section className="flex flex-col mt-36">
        <Text
          as="p"
          variant="paragraph"
          className="w-1/2 h-fit p-4 mx-auto text-justify"
        >
          {lang === "ptBR" ? ptBR.home.descriptionP1 : en.home.descriptionP1}
        </Text>
        <Text
          as="p"
          variant="paragraph"
          className="w-1/2 h-fit p-4 mx-auto text-justify"
        >
          {lang === "ptBR" ? ptBR.home.descriptionP2 : en.home.descriptionP2}
        </Text>
      </section>
    </div>
  );
};

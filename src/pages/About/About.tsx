import React from "react";
import { Text } from "../../components/Text/Text";
import { ptBR, en } from "../../config/texts.ts";
import type { Language } from "../../config/types.js";

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <div className="mt-4">
      <section className="flex flex-col mt-36">
        <Text
          as="p"
          variant="paragraph"
          className="w-1/2 h-fit p-4 mx-auto text-justify"
        >
          {lang === "ptBR" ? ptBR.about.pagragraph1 : en.about.pagragraph1}
        </Text>
        <Text
          as="p"
          variant="paragraph"
          className="w-1/2 h-fit p-4 mx-auto text-justify"
        >
          {lang === "ptBR" ? ptBR.about.paragraph2 : en.about.paragraph2}
        </Text>
      </section>
    </div>
  );
};

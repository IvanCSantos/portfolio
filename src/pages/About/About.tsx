import React from "react";
import { Text } from "../../components/Text/Text";
import { ptBR, en } from "../../config/texts.ts";
import type { Language } from "../../config/types.js";

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const textContent =
    lang === "ptBR" ? ptBR.about.textContent : en.about.textContent;

  return (
    <div className="mt-4">
      <section className="flex flex-col mt-36">
        {textContent &&
          textContent.map((paragraph) => (
            <Text
              as="p"
              variant="paragraph"
              className="w-1/2 h-fit p-4 mx-auto text-justify"
            >
              {paragraph}
            </Text>
          ))}
      </section>
    </div>
  );
};

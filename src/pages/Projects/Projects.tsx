import React from "react";
import { Text } from "../../components/Text/Text";
import { Card } from "../../components/Containers/Card/Card";
import { ptBR, en } from "../../config/texts.ts";
import type { Language } from "../../config/types.js";

interface ProjectProps {
  lang: Language;
}

export const Projects: React.FC<ProjectProps> = ({ lang }) => {
  const texts = lang === "ptBR" ? ptBR : en;

  return (
    <div className="mt-24 px-16">
      <Text as="h2" variant="title2" className="mb-8">
        Projetos em destaque
      </Text>
      <div className="grid grid-cols-3">
        {texts.projects.highlights.map((project) => (
          <Card />
        ))}
      </div>
      <Text as="h2" variant="title2" className="mb-8">
        Outros projetos
      </Text>
      <div className="grid grid-cols-3">
        {texts.projects.others.map((project) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

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
      <Text as="h2" variant="title2" className="mb-4">
        {lang === "ptBR" ? "Projetos em destaque" : "Featured Projects"}
      </Text>
      <div className="grid grid-cols-3 gap-8">
        {texts.projects.highlights.map((project) => (
          <Card
            title={project.name}
            description={project.description}
            tags={project.tags}
            github={project.github}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
      <Text as="h2" variant="title2" className="mt-16 mb-4">
        {lang === "ptBR" ? "Outros projetos" : "Other projects"}
      </Text>
      <div className="grid grid-cols-3 gap-8">
        {texts.projects.others.map((project) => (
          <Card
            title={project.name}
            description={project.description}
            tags={project.tags}
            github={project.github}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

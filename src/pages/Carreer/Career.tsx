import React from "react";
import { Experience } from "../../components/Experience/Experience";
import { ptBR, en } from "../../config/texts.ts";
import type { Language } from "../../config/types.js";

interface CareerProps {
  lang: Language;
}

export const Career: React.FC<CareerProps> = ({ lang }) => {
  const texts = lang === "ptBR" ? ptBR : en;

  return texts.career.map((job) => {
    return (
      <Experience
        key={job.date}
        date={job.date}
        title={job.title}
        company={job.company}
        experience={job.experience}
      />
    );
  });
};

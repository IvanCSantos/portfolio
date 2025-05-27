import React from "react";
import { Text } from "../../components/Text/Text";
import { ptBR, en } from "../../config/texts.ts";
import type { Language } from "../../config/types.js";

interface AboutProps {
  lang: Language;
}

type TextBlock = string | { highlight: string };

export const About: React.FC<AboutProps> = ({ lang }) => {
  const textContent: TextBlock[][] =
    lang === "ptBR" ? ptBR.about.textContent : en.about.textContent;

  const undergraduateDegree =
    lang === "ptBR"
      ? `${ptBR.about.undergratuateDegree.course} - ${ptBR.about.undergratuateDegree.institution} (${ptBR.about.undergratuateDegree.date})`
      : `${en.about.undergratuateDegree.course} - ${en.about.undergratuateDegree.institution} (${en.about.undergratuateDegree.date})`;

  const courses = lang === "ptBR" ? ptBR.about.courses : en.about.courses;

  return (
    <div className="mt-4 md:mt-12">
      <section className="flex flex-col">
        {textContent.map((paragraph, i) => (
          <Text
            as="p"
            key={i}
            className="px-4 md:w-2/3 xl:w-1/2 h-fit p-4 mx-auto text-justify text-secondary"
          >
            {paragraph.map((chunk, index) =>
              typeof chunk === "string" ? (
                chunk
              ) : (
                <span key={index} className="font-bold text-highlight">
                  {chunk.highlight}
                </span>
              )
            )}
          </Text>
        ))}
      </section>
      <section className="flex flex-col mt-2">
        <Text
          as="h3"
          className="px-4 md:w-2/3 xl:w-1/2 h-fit p-4 md:mx-auto font-bold text-primary"
        >
          {lang === "ptBR" ? "Graduação" : "Undergraduate Degree"}
        </Text>
        <Text
          as="p"
          className="px-4 md:w-2/3 xl:w-1/2 h-fit md:mx-auto text-secondary"
        >
          {undergraduateDegree}
        </Text>
        <Text
          as="h3"
          className="mt-4 px-4 md:w-2/3 xl:w-1/2 h-fit md:mx-auto font-bold text-primary"
        >
          {lang === "ptBR" ? "Cursos" : "Courses"}
        </Text>
        {courses &&
          courses.map((course) => {
            const courseString = `${course.course} - ${course.school} (${course.hours})`;
            return (
              <Text
                as="p"
                key={course.course.replace(" ", "_")}
                className="px-4 md:w-2/3 xl:w-1/2 h-fit md:mx-auto text-secondary"
              >
                {courseString}
              </Text>
            );
          })}
      </section>
    </div>
  );
};

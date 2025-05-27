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
    <div className="mt-4">
      <section className="flex flex-col mt-16">
        {textContent.map((paragraph, i) => (
          <Text
            as="p"
            variant="paragraph"
            key={i}
            className="w-1/2 h-fit p-4 mx-auto text-justify text-purple-1"
          >
            {paragraph.map((chunk, index) =>
              typeof chunk === "string" ? (
                chunk
              ) : (
                <span key={index} className="font-bold text-white">
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
          variant="title3"
          className="w-1/2 h-fit p-4 mx-auto font-bold text-white"
        >
          {lang === "ptBR" ? "Graduação" : "Undergraduate Degree"}
        </Text>
        <Text
          as="p"
          variant="paragraph"
          className="w-1/2 h-fit px-4 mx-auto text-purple-1"
        >
          {undergraduateDegree}
        </Text>
        <Text
          as="h3"
          variant="title3"
          className="w-1/2 h-fit p-4 mx-auto font-bold text-white"
        >
          {lang === "ptBR" ? "Cursos" : "Courses"}
        </Text>
        {courses &&
          courses.map((course) => {
            const courseString = `${course.course} - ${course.school} (${course.hours})`;
            return (
              <Text
                as="p"
                variant="paragraph"
                key={course.course.replace(" ", "_")}
                className="w-1/2 h-fit px-4 mx-auto text-purple-1"
              >
                {courseString}
              </Text>
            );
          })}
      </section>
    </div>
  );
};

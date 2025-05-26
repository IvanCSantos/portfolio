import React from "react";
import { Text } from "../Text/Text";

interface ExperienceProps {
  date: string;
  title: string;
  company: string;
  experience: string[];
}

export const Experience: React.FC<ExperienceProps> = ({
  date,
  title,
  company,
  experience,
}) => {
  return (
    <div className="mt-16">
      <article className="grid grid-cols-[1fr_2fr] justify-center gap-8">
        <div className="text-right">
          <Text
            as="span"
            variant="muted"
            className="font-extralight text-purple-1"
          >
            {date}
          </Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text
            as="h2"
            variant="title2"
            className="font-extrabold text-purple-1"
          >
            {`${title} @ ${company}`}
          </Text>
          <ul>
            {experience &&
              experience.map((xp) => (
                <Text
                  key={xp}
                  as="li"
                  variant="listItem"
                  className="text-purple-1"
                >
                  {xp}
                </Text>
              ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

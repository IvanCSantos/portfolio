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
    <div className="">
      <article className="px-4 flex flex-col justify-start md:grid md:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_2fr] md:justify-center md:gap-8">
        <div className="text-start md:text-right">
          <Text as="span" className="font-extralight text-muted text-lg">
            {date}
          </Text>
        </div>
        <div className="flex flex-col gap-4 md:px-0">
          <Text as="h2" className="font-extrabold text-primary text-2xl">
            {`${title} @ ${company}`}
          </Text>
          <ul>
            {experience &&
              experience.map((xp) => (
                <Text
                  key={xp}
                  as="li"
                  variant="listItem"
                  className="text-secondary"
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

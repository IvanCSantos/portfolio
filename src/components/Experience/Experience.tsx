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
    <div className="mt-24">
      <article className="flex flex-row gap-4">
        <div className="min-w-64">
          <Text as="span" variant="muted">
            {date}
          </Text>
        </div>
        <div>
          <Text as="h3" variant="title3">
            {`${title} @ ${company}`}
          </Text>
          <ul>
            {experience &&
              experience.map((xp) => (
                <Text key={xp} as="li" variant="listItem">
                  {xp}
                </Text>
              ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

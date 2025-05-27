import { Text } from "../../Text/Text";
import { Tag } from "../../Tag/Tag";
import { Link } from "../../Link/Link";

type CardProps = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
};

export const Card = ({
  title,
  description,
  tags,
  github,
  liveUrl,
}: CardProps) => {
  const liveString = liveUrl ? `Live: ${liveUrl}` : "";

  return (
    <div className="flex flex-col justify-between border rounded-lg p-4 min-h-48 hover:bg-div-hover transition-colors">
      <div className="pb-8">
        {github ? (
          <Link url={github}>
            <Text
              as="h3"
              variant="link"
              className="text-xl text-primary hover:text-hover"
            >
              {title}
            </Text>
          </Link>
        ) : (
          <Text as="h3" variant="title3" className="text-primary">
            {title}
          </Text>
        )}

        <Text as="span" variant="paragraph" className="text-secondary">
          {description}
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        {liveUrl ? (
          <Link url={liveUrl}>
            <Text className="text-secondary">{liveString}</Text>
          </Link>
        ) : (
          <Text className="text-secondary">{liveString}</Text>
        )}

        <div className="flex flex-row flex-wrap justify-start gap-x-2 gap-y-1">
          {tags.map((tag) => (
            <Tag text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

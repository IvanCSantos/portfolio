import { Text } from "../../Text/Text";
import { Tag } from "../../Tag/Tag";
import { Link } from "../../Link/Link";
import { Link as LinkIcon, GithubLogo } from "phosphor-react";

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
  return (
    <div className="flex flex-col justify-between border rounded-lg p-4 min-h-48 hover:bg-div-hover transition-colors">
      <div className="pb-8">
        {github ? (
          <Link url={github}>
            <Text
              as="h3"
              variant="link"
              className="flex gap-2 items-center text-md md:text-xl text-primary hover:text-hover"
            >
              {title}
              <GithubLogo />
            </Text>
          </Link>
        ) : (
          <Text
            as="h3"
            className="text-md md:text-xl text-primary hover:text-hover"
          >
            {title}
          </Text>
        )}

        <Text as="span" className="text-sm md:text-md text-secondary">
          {description}
        </Text>
      </div>
      <div className="flex flex-col gap-4">
        {liveUrl && (
          <Link url={liveUrl} className="flex items-center gap-2">
            <Text className="text-secondary">Live:</Text>
            <Text variant="link" className="break-all">
              {liveUrl}
              {/* <LinkIcon size={16} /> */}
            </Text>
          </Link>
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

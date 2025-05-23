import React from "react";
import { Text } from "../../components/Text/Text";

export const Home = () => {
  return (
    <div className="m-12">
      <Text as="h1" variant="title1" className="font-bold bg-amber-400">
        Home
      </Text>
      <Text as="h2" variant="title2">
        Home
      </Text>
      <Text as="h3" variant="title3">
        Home
      </Text>
      <Text as="p" variant="paragraph">
        Home
      </Text>
      <Text as="p" variant="muted">
        Home
      </Text>
    </div>
  );
};

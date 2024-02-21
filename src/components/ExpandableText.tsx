import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limitTextChar = 250;

  if (!children) return null;

  if (children.length < limitTextChar) {
    return <Text>{children}</Text>;
  }

  const summary = expanded
    ? children
    : children.substring(0, limitTextChar - 3) + "...";

  return (
    <Text>
      {summary}
      <Button
        marginLeft={2}
        size="sm"
        fontWeight="bold"
        colorScheme="red"
        variant="link"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;

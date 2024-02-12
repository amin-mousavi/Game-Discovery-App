import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Card,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  const dummyGenresSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <List>
      {dummyGenresSkeleton.map((g) => (
        <ListItem key={g} marginY="5px">
          <Card>
            <HStack>
              <Skeleton boxSize="32px" borderRadius={8} />
              <SkeletonText />
            </HStack>
          </Card>
        </ListItem>
      ))}
      ;
    </List>
  );
};

export default GameCardSkeleton;

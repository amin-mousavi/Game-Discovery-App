import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Link to={`/games/${game.slug}`}>
      {" "}
      <Image src={getCroppedImageUrl(game.background_image)} />
    </Link>
    <CardBody>
      <HStack justifyContent={"space-between"}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
      <Heading fontSize="2xl">
        <Link to={`/games/${game.slug}`}>{game.name}</Link>{" "}
        <Emoji rating={game.rating_top} />
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;

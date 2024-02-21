import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data?.results[0]);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  if (!data?.results[0]) return null;

  return (
    <video
      controls
      src={data?.results[0].data[480]}
      poster={data?.results[0].preview}
    ></video>
  );
};

export default GameTrailer;

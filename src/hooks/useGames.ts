import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchedResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchedResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: async () => {
      const res = await apiClient.get<FetchedResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
        },
      });
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default useGames;

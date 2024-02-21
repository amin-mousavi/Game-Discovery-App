import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "../entities/Game";

const useGame = (id: string | number) => {
  return useQuery({
    queryKey: ["game", id],
    queryFn: async () => {
      const res = await apiClient.get<Game>(`/games/${id}`);
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default useGame;

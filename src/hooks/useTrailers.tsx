import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import apiClient, { FetchedResponse } from "../services/api-client";

const useTrailers = (gameId: number) =>
  useQuery({
    queryKey: ["trailers", gameId],
    queryFn: async () => {
      const res = await apiClient.get<FetchedResponse<Trailer>>(
        `/games/${gameId}/movies`
      );
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default useTrailers;

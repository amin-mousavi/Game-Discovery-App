import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchedResponse } from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: async () => {
      const res = await apiClient.get<FetchedResponse<Screenshot>>(
        `/games/${gameId}/screenshots`
      );
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default useScreenshots;

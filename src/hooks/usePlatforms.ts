import apiClient, { FetchedResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "../entities/Platform";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: async () => {
      const res = await apiClient.get<FetchedResponse<Platform>>(
        "/platforms/lists/parents"
      );
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default usePlatforms;

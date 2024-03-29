import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchedResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: async () => {
      const res = await apiClient.get<FetchedResponse<Genre>>("/genres");
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default useGenres;

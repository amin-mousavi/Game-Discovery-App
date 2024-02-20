import axios from "axios";

export interface FetchedResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "97960211d76248de838b6c7296b554e7",
  },
});

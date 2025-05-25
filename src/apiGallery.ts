import axios from "axios";
import { Photo } from "./types.ts/images";

type Props = {
  searchQuery: string;
  page: number;
};

export default async function fetchGalleryApi({
  searchQuery,
  page,
}: Props): Promise<Photo[]> {
  const url = "https://api.unsplash.com/search/photos";
  const clientID = "bbUeesVMBQyVLMvP0ZjpqARBJoIYfi7cWTnilFt9mFM";
  const response = await axios.get(url, {
    params: {
      client_id: clientID,
      query: searchQuery,
      per_page: 12,
      orientation: "portrait",
      page: page,
    },
  });
  return response.data.results;
}

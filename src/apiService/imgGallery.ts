import axios from "axios";
import { Image } from "../types";

const API_KEY = "TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

interface ApiResponse {
  results: Image[];
  total_pages: number;
}

export const getImg = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  try {
  const { data } = await axios.get<ApiResponse>("search/photos", {
      params: {
        query,
        page,
      },
    });
  console.log(data);

  return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

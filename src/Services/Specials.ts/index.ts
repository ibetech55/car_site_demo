import axios from "axios";

export const getSpecials = async () => {
  const { data } = await axios.get("http://localhost:5000/specials");
  return data;
};

import axios from "axios";

export const getMakes = async () => {
  const { data } = await axios.get("http://localhost:5000/makes");
  return data;
};

export const getModels = async (make: string) => {
  const { data } = await axios.get(`http://localhost:5000/models?make=${make}`);
  return data;
};

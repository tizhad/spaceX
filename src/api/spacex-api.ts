import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
});

export const getLaunches = async () => {
  const response = await api.get("/launches");
  return response.data;
};

export const getLaunchById = async (id: string) => {
  const response = await api.get(`/launches/${id}`);
  return response.data;
};

export const getCrewData = async (crewIds: string[]) => {
  const crewData = await Promise.all(
    crewIds.map(async (id: string) => {
      const response = await api.get(`/crew/${id}`);
      return response.data;
    })
  );
  return crewData;
};

export const getLaunchRocketData = async (id: string) => {
  const response = await api.get(`/rockets/${id}`);
  return response.data.name;
};

import axiosClient from "../axiosClient";

const BASE_URL = `http://172.17.0.2:8080/switch`;

export const getSwitches = async () => {
  return axiosClient.get(`${BASE_URL}`);
};

export const updateSwitch = async (isActive: boolean) => {
  return axiosClient.patch(`${BASE_URL}`, { isActive });
};

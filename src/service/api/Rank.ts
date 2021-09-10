import axios from "axios";

import {IRankApi} from "../Interface";

const serverUrl = "http://localhost:8080/rank"

const clearTop10 = () => {
  const url = `${serverUrl}/clear/top10`;
  return axios.get(url);
}

const clearRoom = (params: any) => {
  const url = `${serverUrl}/clear/room/${params.roomId}`;
  return axios.get(url);
}

export const RankApi: IRankApi = {
  clearTop10: clearTop10,
  clearRoom: clearRoom,
}
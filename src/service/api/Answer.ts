import axios from "axios";

import {IAnswerApi} from "../Interface";

const serverUrl = "http://localhost:8080/answer"

const check = (params: any): Promise<any> => {
  const {roomId, answer} = params;

  const url = `${serverUrl}/check/${roomId}`;
  const body = { answer: answer }

  return axios.post(url, body);
}

export const AnswerApi: IAnswerApi = {
  check,
}
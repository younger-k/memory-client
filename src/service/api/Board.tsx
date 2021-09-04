import axios from "axios";

import {IBoardApi} from "../Interface";

const serverUrl = "http://localhost:8080/board"

const allBoard = () => {
    const url = `${serverUrl}/all?pageNum=0`;
    return axios.get(url);
    alert(url)
}

export const BoardApi: IBoardApi = {
    allBoard: allBoard,

}
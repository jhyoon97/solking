import axios from "axios";
import config from "config";

const nexonAxios = axios.create({
  baseURL: config.nexonHost,
  headers: {
    "x-nxopen-api-key": config.apiKey,
  },
});

export default nexonAxios;

import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.DOMAIN,
});

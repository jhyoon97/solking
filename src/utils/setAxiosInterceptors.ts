import axios from "axios";

export default () => {
  axios.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );
};

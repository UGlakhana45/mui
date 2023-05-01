import Axios from "axios";
const AxiosApi = Axios.create({
  baseURL: "https://api.punkapi.com",
});

export default AxiosApi;

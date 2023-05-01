import Axios from "axios";
export const AxiosApi = Axios.create({
  baseURL: "https://api.punkapi.com",
});
export const AxiosApi1 = Axios.create({
  baseURL:'https://fakestoreapi.com',
});
export const AxiosApi2 = Axios.create({
  baseURL:'https://jsonplaceholder.typicode.com',
})




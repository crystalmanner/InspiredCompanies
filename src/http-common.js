import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/",
  // baseURL: "https://pazzin.herokuapp.com/api",
  // baseURL: "https://paziin.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});

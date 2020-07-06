import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api",
  // baseURL: "http://staging.inspiredcompanies.global/api",
  // baseURL: "https://pazzin.herokuapp.com/api",
  // baseURL: "https://paziin.herokuapp.com/api",
  baseURL: "https://inspiredcompanies.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});

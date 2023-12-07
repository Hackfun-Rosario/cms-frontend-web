import axios from "axios";

const ajax = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
  headers:{
    Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`
  }
});


export default ajax;


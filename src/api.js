import Axios from "axios";
 const axios= Axios.create({
    baseURL:'http://127.0.0.1:8000'
 });
 export default {
     getData(){
         return axios.get("/latest-products/")
     }
 }
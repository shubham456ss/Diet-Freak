import axios from "axios";
import { API_KEY, API_HOST } from '@env';


export default async function fetchApi(url) {

   try {
     const response = await axios.get(url, {
       headers: {
         'X-RapidAPI-Key':API_KEY ,
         'X-RapidAPI-Host': API_HOST,
       },
     });

       console.log(response.data["results"]);

       return response.data["results"];

   } catch (error) {
     console.log(error);
   }
 }

/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { API_KEY, API_HOST } from '@env';


export default async function fetchApi(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    });

    const { results } = response.data;
    
    return results;

   } catch (error) {
     console.log(error);
  }

 }

import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '55f999586dmsh712b8e9993089f3p1cb26ajsn204da1185ba7',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}
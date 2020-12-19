import axios from "axios";
 

const KEY = "AIzaSyDIJaxZhcUcSu4HNf0unUSYEd13Xag89EI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params:{
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    q: 'surfboards'
  }
});




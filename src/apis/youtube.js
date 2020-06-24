import axios from "axios";
const KEY = 'AIzaSyDGvtPIwx2QRZHyN4-JYpqRB3F_wob3utI';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
  }
}); 
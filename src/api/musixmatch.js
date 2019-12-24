import axios from "axios";

export default axios.create({
  baseURL: "https://api.musixmatch.com/ws/1.1/",
  params: {
    apikey: "f1bc8e8500a911e37f66519f4be3e398"
  }
});

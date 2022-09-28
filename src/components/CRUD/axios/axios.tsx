import axios from "axios";

export default axios.create({
    baseURL: "https://632aa5291090510116c4ad64.mockapi.io",
    headers: {
      "Content-type": "application/json"
    }
  });
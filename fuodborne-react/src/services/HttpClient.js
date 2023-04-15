import axios from "axios";

export default class HttpClient {
  baseUrl;
  constructor(url) {
    this.baseUrl = url;
  }

  async get(url) {
    return await axios.get(`${this.baseUrl}/${url}`);
  }
}

import HttpClient from "./HttpClient";

class ServicesService extends HttpClient {
  constructor() {
    super("https://localhost:5001/api");
  }

  getAllServices() {
    return this.get("services");
  }
}

const servicesService = new ServicesService();

export default servicesService;

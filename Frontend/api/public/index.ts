import { API, handleResponse } from "@/helper/utils";

const Public = {
  GetProducts: async () => {
    let response = null;
    try {
      response = await API.get("/public/randomproducts");
    } catch (e) {
      response = e;
    }
    // return response
    return handleResponse(response);
  },
  GetProductById: async (id:any) => {
    let response = null;
    try {
      response = await API.get(`/public/randomproducts/${id}`);
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
};
export default Public;

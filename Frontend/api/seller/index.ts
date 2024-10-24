import { API, getToken, handleResponse } from "@/helper/utils";

const Seller = {
  AddProduct: async (data: any) => {
    const token = await getToken();
    let response = null;
    try {
      response = await API.post("/seller/new-product", data, {
        headers: { Authorization: "Bearer: " + token },
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
};
export default Seller;

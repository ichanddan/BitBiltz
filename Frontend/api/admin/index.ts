import { API, getToken, handleResponse } from "@/helper/utils";

const Admin = {
  getAccounts: async () => {
    const token = await getToken();
    let response = null;
    try {
      response = await API.get("/admin/accounts", {
        headers: { Authorization: "Bearer: " + token },
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  getProducts: async () => {
    const token = await getToken();
    let response = null;
    try {
      response = await API.get("/admin/products", {
        headers: { Authorization: "Bearer: " + token },
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
};
export default Admin;

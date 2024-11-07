import { API, handleResponse } from "@/helper/utils";

const Auth = {
  sendCustomerOTP: async (email: string) => {
    let response = null;
    try {
      response = await API.post("/auth/send-otp", {
        email,
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  verifyCustomerOTP: async (email: string, otp: string) => {
    let response = null;
    try {
      response = await API.post("/auth/otp-verification", {
        email,
        otp,
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  registerCustomer: async (
    email: string,
    password: string,
    name: string,
    phone: string
  ) => {
    let response = null;
    try {
      response = await API.post("/auth/register", {
        email,
        password,
        name,
        phone,
      });
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
  LoginCustomer: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    let response = null;
    try {
      response = await API.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data.data));
    } catch (e) {
      response = e;
    }
    return handleResponse(response);
  },
};
export default Auth;

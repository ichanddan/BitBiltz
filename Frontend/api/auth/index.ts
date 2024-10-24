import { API, handleResponse } from "@/helper/utils";

const Auth = {
  sendCustomerOTP: async (email: string) => {
    let response = null;
    try {
      response = await API.post("/email/signup-email", {
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
      response = await API.post("/email/verify-signup-otp", {
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
      response = await API.post("/auth/customer/sign-up", {
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
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    let response = null;
    try {
      response = await API.post("/users/login", {
        username,
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

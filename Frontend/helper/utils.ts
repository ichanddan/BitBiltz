"use client";
import Config from "@/config";

import axios from "axios";
import { toast } from "sonner";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleResponse = (response: any) => {
  if (response?.status === 202) toast.error(response?.data?.error);
  else if (response?.status === 500) toast.error(response?.data?.message);
  else if (response?.status === 400) toast.error(response?.data?.error);
  else if (response?.status === 404) toast.error(response?.data?.error);
  else if (response?.status === 401) {
    Config.UNAUTHORIZED_EXCEPTION = true;
    toast.error("You are not authorized for the action.");
  } else if (response?.status === 200 || response?.status ===201) {
    toast.success(response?.data?.message);
    return response;
  } else toast.error("Something went wrong. Please contact server admin.");
  return false;
};

interface UserSession {
  access_token?: string;
}

export const getToken = async (): Promise<string> => {
  let session = localStorage.getItem("user");
  session = session && JSON.parse(session);
  let response = (session as UserSession)?.access_token || "";
  return response;
};

export const isAuthenticated = async () => {
  let session = localStorage.getItem("user");
  session = session && JSON.parse(session);
  let response = (session as UserSession)?.access_token || "";
  return response ? true : false;
};

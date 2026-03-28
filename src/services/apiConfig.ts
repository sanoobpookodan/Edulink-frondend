import { API_URL, API_TIMEOUT } from "@/constants/api";

import axios from "axios";

import type {
  ApiResponse,
  ApiGetResult,
  ApiPostResult,
  ApiPutResult,
  ApiPatchResult,
  ApiDeleteResult,
} from "@/types/api.type";

export const api = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor for Auth Header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Generic GET method
export const get = async <T>(url: string, params?: object): Promise<ApiGetResult<T>> => {
  try {
    const response = await api.get<ApiResponse<T>>(url, { params });
    if (response.data && response.data.success) {
      return {
        status: true,
        data: response?.data?.data,
        message: response?.data?.message,
        meta: response?.data?.meta,
      };
    }
    return {
      status: false,
      message: response.data.message ?? "Some error with 200 status code",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: false,
        message: error.response?.data?.message || error.message,
        errorCode: error.response?.status || 500,
      };
    }
    return {
      status: false,
      message: "An unexpected error occurred",
      errorCode: 500,
    };
  }
};

// Generic POST method
export const post = async <T>(url: string, data?: object): Promise<ApiPostResult<T>> => {
  try {
    const response = await api.post<ApiResponse<T>>(url, data);
    if (response.data && response.data.success) {
      return {
        status: true,
        message: response.data.message || "Success",
        data: response.data.data,
      };
    }
    return {
      status: false,
      message: response.data.message ?? "Some error with 200 status code",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: false,
        message: error.response?.data?.message || error.message,
        errors: error.response?.data?.errors,
        errorCode: error.response?.status || 500,
      };
    }
    return {
      status: false,
      message: "An unexpected error occurred",
      errorCode: 500,
    };
  }
};

// Generic PUT method
export const put = async <T>(url: string, data?: object): Promise<ApiPutResult<T>> => {
  try {
    const response = await api.put<ApiResponse<T>>(url, data);
    if (response.data && response.data.success) {
      return {
        status: true,
        message: response.data.message || "Success",
        data: response.data.data,
      };
    }
    return {
      status: response.status,
      message: response.data.message ?? "Some error with 200 status code",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || error.message,
        errors: error.response?.data?.errors,
      };
    }
    return {
      status: 500,
      message: "An unexpected error occurred",
    };
  }
};

// Generic PATCH method
export const patch = async <T>(url: string, data?: object): Promise<ApiPatchResult<T>> => {
  try {
    const response = await api.patch<ApiResponse<T>>(url, data);
    if (response.data && response.data.success) {
      return {
        status: true,
        message: response.data.message || "Success",
        data: response.data.data,
      };
    }
    return {
      status: response.status,
      message: response.data.message ?? "Some error with 200 status code",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || error.message,
        errors: error.response?.data?.errors,
      };
    }
    return {
      status: 500,
      message: "An unexpected error occurred",
    };
  }
};

// Generic DELETE method
export const del = async <T>(url: string): Promise<ApiDeleteResult<T>> => {
  try {
    const response = await api.delete<ApiResponse<T>>(url);
    if (response.data && response.data.success) {
      return {
        status: true,
        message: response.data.message || "Success",
        data: response.data.data,
      };
    }
    return {
      status: response.status,
      message: response.data.message ?? "Some error with 200 status code",
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        message: error.response?.data?.message || error.message,
      };
    }
    return {
      status: 500,
      message: "An unexpected error occurred",
    };
  }
};

// Legacy export for backwards compatibility
export const apiClient = api;

import { API_ENDPOINTS } from "@/constants/api";
import { post } from "@/services/apiConfig";
import type { LoginParams, LoginResult } from "./auth.type";

export async function loginApi(params: LoginParams) {
  return post<LoginResult>(API_ENDPOINTS.auth.login, params);
}

import { API_ENDPOINTS } from "@/constants/api";
import { get } from "@/services/apiConfig";
import { DashboardData } from "../types/dashboard.type";

export async function getDashboardData() {
  return get<DashboardData>(API_ENDPOINTS.dashboard.dashboard);
}

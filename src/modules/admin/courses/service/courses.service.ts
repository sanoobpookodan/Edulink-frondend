import { API_ENDPOINTS } from "@/constants/api";
import { get } from "@/services/apiConfig";
import { Course } from "../types/courses.type";

export async function getCourses(page: number = 1, limit: number = 20) {
  return get<Course[]>(API_ENDPOINTS.courses.list, { page, limit });
}

export async function getCourseDetail(id: string) {
  return get<Course>(API_ENDPOINTS.courses.detail(id));
}

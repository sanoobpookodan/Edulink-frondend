import { API_ENDPOINTS } from "@/constants/api";
import { get, post } from "@/services/apiConfig";
import { Course } from "../types/courses.type";

export async function getCourses(page: number = 1, limit: number = 20) {
  return get<Course[]>(API_ENDPOINTS.courses.list, { page, limit });
}

export async function getCourseDetail(id: string) {
  return get<Course>(API_ENDPOINTS.courses.detail(id));
}

export async function createCourse(data: Course) {
  return post<Course>(API_ENDPOINTS.courses.create, data);
}

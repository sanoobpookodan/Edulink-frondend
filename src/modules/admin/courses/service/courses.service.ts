import { API_ENDPOINTS } from "@/constants/api";
import { del, get, post, put } from "@/services/apiConfig";
import { Course } from "../types/courses.type";

export async function getCourses(page: number = 1, limit: number = 20) {
  return get<Course[]>(API_ENDPOINTS.courses.list, { page, limit });
}

export async function getCourseDetail(id: string) {
  return get<Course>(API_ENDPOINTS.courses.detail(id));
}

export async function createCourse(data: FormData) {
  return post<Course>(API_ENDPOINTS.courses.create, data);
}

export async function updateCourse(id: string, data: FormData) {
  return put<Course>(API_ENDPOINTS.courses.update(id), data);
}

export async function deleteCourse(id: string) {
  return del<Course>(API_ENDPOINTS.courses.delete(id));
}

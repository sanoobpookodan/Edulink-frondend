import { API_ENDPOINTS } from "@/constants/api";
import { del, get, post, put } from "@/services/apiConfig";
import { CourseCategory } from "@/types";

export async function getCourseCategories(page: number = 1, limit: number = 20) {
  return get<CourseCategory[]>(API_ENDPOINTS.course_categories.list, { page, limit });
}

export async function getCourseCategoryDetail(id: string) {
  return get<CourseCategory>(API_ENDPOINTS.course_categories.detail(id));
}

export async function createCourseCategory(data: CourseCategory) {
  return post<CourseCategory>(API_ENDPOINTS.course_categories.create, data);
}

export async function updateCourseCategory(id: string, data: CourseCategory) {
  return put<CourseCategory>(API_ENDPOINTS.course_categories.update(id), data);
}

export async function deleteCourseCategory(id: string) {
  return del<CourseCategory>(API_ENDPOINTS.course_categories.delete(id));
}

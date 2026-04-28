import { API_ENDPOINTS } from "@/constants/api";
import { del, get, post, put } from "@/services/apiConfig";
import { Instructor } from "../types/instructor.type";

export async function getInstructors(page: number = 1, limit: number = 20) {
  return get<Instructor[]>(API_ENDPOINTS.instructors.list, { page, limit });
}

export async function getInstructorDetail(id: string) {
  return get<Instructor>(API_ENDPOINTS.instructors.detail(id));
}

export async function createInstructor(data: Instructor) {
  return post<Instructor>(API_ENDPOINTS.instructors.create, data);
}

export async function updateInstructor(id: string, data: Instructor) {
  return put<Instructor>(API_ENDPOINTS.instructors.update(id), data);
}

export async function deleteInstructor(id: string) {
  return del<Instructor>(API_ENDPOINTS.instructors.delete(id));
}

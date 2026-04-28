import { BASE_URL } from "./data";

export const API_URL = `${BASE_URL}/api`;
export const API_TIMEOUT = 10000;

export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login/",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  dashboard: {
    dashboard: "/dashboard",
    profile: "/dashboard/profile",
  },
  courses: {
    list: "/courses",
    create: "/courses",
    update: (id: string) => `/courses/${id}`,
    delete: (id: string) => `/courses/${id}`,
    detail: (id: string) => `/courses/${id}`,
    enroll: (id: string) => `/courses/${id}/enroll`,
  },
  course_categories: {
    list: "/course-categories",
    create: "/course-categories",
    update: (id: string) => `/course-categories/${id}`,
    delete: (id: string) => `/course-categories/${id}`,
    detail: (id: string) => `/course-categories/${id}`,
  },
  instructors: {
    list: "/instructors",
    create: "/instructors",
    update: (id: string) => `/instructors/${id}`,
    delete: (id: string) => `/instructors/${id}`,
    detail: (id: string) => `/instructors/${id}`,
  },
  lessons: {
    list: (courseId: string) => `/courses/${courseId}/lessons`,
    detail: (lessonId: string) => `/lessons/${lessonId}`,
    progress: (lessonId: string) => `/lessons/${lessonId}/progress`,
  },
  user: {
    profile: "/user/profile",
    progress: "/user/progress",
  },
};

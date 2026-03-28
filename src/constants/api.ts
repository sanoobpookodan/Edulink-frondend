export const DEV_BASE_URL = "http://localhost:3000/api";
export const PROD_BASE_URL =
  "https://edulink-backend-production.up.railway.app/api/";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? DEV_BASE_URL : PROD_BASE_URL;

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
    detail: (id: string) => `/courses/${id}`,
    enroll: (id: string) => `/courses/${id}/enroll`,
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

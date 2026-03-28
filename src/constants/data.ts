export const DEV_BASE_URL = "http://localhost:3000";
export const PROD_BASE_URL = "https://edulink-backend-production.up.railway.app";

export const BASE_URL = process.env.NODE_ENV === "development" ? DEV_BASE_URL : PROD_BASE_URL;
export const IMAGE_URL = `${BASE_URL}`;

export const PAGINATION_OPTIONS = [5, 10, 20, 50, 100];

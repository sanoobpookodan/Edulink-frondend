import { get } from "@/services/apiConfig";

export const verifyToken = async () => {
  try {
    const res = await get("dashboard"); // protected route
    return res.data;
  } catch {
    return null;
  }
};

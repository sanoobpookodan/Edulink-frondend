import type { User } from "@/store/auth.store";

export interface LoginParams {
  email: string;
  password?: string;
}

export interface LoginResult {
  user: User;
  token: string;
}

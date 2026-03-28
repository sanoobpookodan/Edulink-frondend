import { API_ENDPOINTS } from "@/constants/api";
import { get } from "@/services/apiConfig";
import { create } from "zustand";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
}
interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
  login: (data: User, token: string) => void;
  user: User | null;
  hasFetched: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  loading: true,
  isAuthenticated: false,
  hasFetched: false,
  user: null,
  fetchUser: async () => {
    const state = useAuthStore.getState();
    if (state.hasFetched) return; // ✅ prevents repeat calls
    try {
      const { data } = await get<User>(API_ENDPOINTS.dashboard.profile);
      set({
        isAuthenticated: true,
        loading: false,
        user: data,
        hasFetched: true,
      });
    } catch {
      set({
        isAuthenticated: false,
        loading: false,
        hasFetched: true,
        user: null,
      });
    }
  },
  login: async (data: User, token: string) => {
    localStorage.setItem("token", token);
    set({
      isAuthenticated: true,
      loading: false,
      hasFetched: true,
      user: data,
    });
  },
  logout: () => {
    localStorage.removeItem("token");

    set({
      isAuthenticated: false,
      user: null,
      hasFetched: false,
      loading: false,
    });
  },
}));

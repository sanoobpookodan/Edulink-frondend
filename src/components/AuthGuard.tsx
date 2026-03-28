"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { fetchUser, loading, isAuthenticated, hasFetched } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      useAuthStore.setState({
        loading: false,
        isAuthenticated: false,
        hasFetched: true,
        user: null,
      });
      return;
    }

    if (!hasFetched) {
      fetchUser(); // ✅ only call when needed
    }
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [loading, isAuthenticated]);

  //   useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.replace("/auth/login");
  //     return;
  //   }
  //   if (!loading && !isAuthenticated) {
  //     router.replace("/auth/login");
  //   }
  // }, [loading, isAuthenticated]);

  if (loading) return null;

  return <>{children}</>;
}

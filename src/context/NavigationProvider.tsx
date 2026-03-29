"use client";

import { setRouter } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NavigationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    setRouter(router);
  }, [router]);

  return <>{children}</>;
}

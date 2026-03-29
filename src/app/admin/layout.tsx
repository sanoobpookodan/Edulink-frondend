// "use client";

import { Outfit } from "next/font/google";
// styles
import "@/styles/admin-styles.css";
import "@/styles/admin-custome-styles.scss";
import "flatpickr/dist/flatpickr.css";

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import AdminStructure from "@/layout/AdminStructure";

import { Metadata } from "next";
import AuthGuard from "@/components/AuthGuard";
import NavigationProvider from "@/context/NavigationProvider";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | Edulink",
  },
  icons: {
    icon: "logo.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <NavigationProvider>
          <AuthGuard>
            <ThemeProvider>
              <SidebarProvider>
                <AdminStructure>{children}</AdminStructure>
              </SidebarProvider>
            </ThemeProvider>
          </AuthGuard>
        </NavigationProvider>
      </body>
    </html>
  );
}

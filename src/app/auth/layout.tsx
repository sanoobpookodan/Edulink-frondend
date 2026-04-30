import { Outfit } from "next/font/google";
import "@/styles/admin-styles.css";
import "@/styles/admin-custome-styles.scss";
import { ThemeProvider } from "@/context/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

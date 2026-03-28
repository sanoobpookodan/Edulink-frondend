import SignInForm from "../../../modules/admin/auth/SignInForm";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/admin-styles.css";
import "@/styles/admin-custome-styles.scss";
import { Outfit } from "next/font/google";

export const metadata = {
  title: "Login",
};
const outfit = Outfit({
  subsets: ["latin"],
});
export default function LoginPage() {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SignInForm />
        </ThemeProvider>
      </body>
    </html>
  );
}

import Banner from "@/components/shared/Banner";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* this is icons set */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

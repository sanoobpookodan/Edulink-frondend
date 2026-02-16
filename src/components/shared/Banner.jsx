"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Banner() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // format text
  const formatText = (text) =>
    text.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  // generate breadcrumb items
  const breadcrumbs = segments.map((segment, index) => {
    return {
      href: "/" + segments.slice(0, index + 1).join("/"),
      label: formatText(segment),
    };
  });

  // page title
  const pageTitle =
    segments.length > 0 ? formatText(segments[segments.length - 1]) : "Home";

  return (
    <section
      className="main_banner"
      style={{
        backgroundImage: "url('/assets/images/banner/banner-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <h2>{pageTitle}</h2>

        <p>
          <Link href="/">Home</Link>

          {breadcrumbs.map((item, index) => (
            <span key={item.href}>
              {" "}
              <i className="ph ph-caret-right"></i>{" "}
              {index != breadcrumbs.length - 1 ? (
                <Link
                  onClick={(e) => {
                    if (index == breadcrumbs.length - 1) {
                      e.preventDefault();
                    }
                  }}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

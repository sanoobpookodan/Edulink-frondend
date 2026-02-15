import React from "react";
import Banner from "@/components/shared/Banner";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// styles
import "@/styles/styles.css";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <Header />
      <section
        className="main_banner"
        style={{
          backgroundImage: "url('/assets/images/banner/banner-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <h2>{"Page Not Found"}</h2>
          <p>
            <Link href="/">Home</Link>
            <span>{" > "}</span>
            <span>404</span>
          </p>
        </div>
      </section>
      <section className="page_not_found section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 mx-auto text-center wow fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <h2>Page not found: /error</h2>
              <p>Please try searching for some other page.</p>

              <a href="/" className="blue_btn round_btn py40">
                <i className="ph ph-house-line"></i> Back To Home
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;

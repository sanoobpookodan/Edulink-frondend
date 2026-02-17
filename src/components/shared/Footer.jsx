"use client";
import Script from "next/script";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-area"
        style={{
          backgroundImage:
            "url(/assets/wp-content/themes/edulink/assets/img/bg/footer.png)",
        }}
      >
        <div className="container footer-top">
          <div className="row g-4">
            {/* About */}
            <div className="col-xl-3 col-md-6 footer-widget wow fadeInUp">
              <div className="about-footer">
                <div className="footer-logo mb-3">
                  <a href="/">
                    <img
                      src="/assets/wp-content/uploads/2025/10/logo.svg"
                      alt="Edulink"
                    />
                  </a>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus interdum ligula non quam scelerisque.
                </p>

                <div className="fot-social">
                  <span>Follow Us On :</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company */}
            <div
              className="col-xl-3 col-md-6 footer-widget wow fadeInUp"
              data-wow-delay=".1s"
            >
              <h3 className="footer-title">Company</h3>
              <ul className="menu">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Course</a>
                </li>
                <li>
                  <a href="#">Instructor</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Instructor Details</a>
                </li>
                <li>
                  <a href="#">Purchase Guide</a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div
              className="col-xl-3 col-md-6 footer-widget wow fadeInUp"
              data-wow-delay=".2s"
            >
              <h3 className="footer-title">Useful Links</h3>
              <ul className="menu">
                <li>
                  <a href="#">Students</a>
                </li>
                <li>
                  <a href="#">Media Relations</a>
                </li>
                <li>
                  <a href="#">Teachers</a>
                </li>
                <li>
                  <a href="#">Admission</a>
                </li>
                <li>
                  <a href="#">Department</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div
              className="col-xl-3 col-md-6 footer-widget wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h3 className="footer-title">Contact Us</h3>

              <div className="fot-contact-info">
                <p>
                  <i className="ph ph-map-pin" />
                  <span>
                    15 Rose Street Harvey, IL <br />
                    60426 USA
                  </span>
                </p>

                <p>
                  <i className="ph ph-phone-call" />
                  <a href="tel:7082109101">7082109101</a>
                </p>

                <p>
                  <i className="ph ph-envelope" />
                  <a href="mailto:example@education.com">
                    example@education.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <hr className="m-0" />
        </div>

        {/* Scroll Progress */}
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div
                className="col-12 text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p>
                  Copyright © {new Date().getFullYear()} Edulink. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scripts */}
      {/* <Script src="/assets/js/tutor.js" strategy="afterInteractive" /> */}

      {/* jQuery FIRST */}
      <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
      {/* Bootstrap */}
      <Script
        src="/assets/js/bootstrap.bundle.js"
        strategy="afterInteractive"
      />
      {/* Plugins */}
      <Script
        src="/assets/js/owl.carousel.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/swiper-bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/jquery.meanmenu.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/jquery-modal-video.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/jquery.inview.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/wow.js" strategy="afterInteractive" />
      <Script src="/assets/js/slick.js" strategy="afterInteractive" />
      {/* <Script src="/assets/js/tutor-front.js" strategy="afterInteractive" /> */}
      <Script src="/assets/js/scroll-top.js" strategy="afterInteractive" />
      {/* Custome Script */}
      <Script src="/assets/js/scripts.js" strategy="afterInteractive" />
    </>
  );
};

export default Footer;

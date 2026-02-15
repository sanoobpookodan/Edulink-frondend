"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <>
      {/* Preloader */}
      <div className="preloader_wrap">
        <img
          src="/assets/wp-content/themes/edulink/assets/img/pre_logo.svg"
          className="pre_logo"
          alt=""
        />
        <span className="preloader"></span>
      </div>
      {/* Offcanvas Area Start */}
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img
                      src="/assets/wp-content/themes/edulink/assets/img/logo-dark.svg"
                      alt="Edulink"
                    />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas__overlay"></div>
      {/* <!-- Offcanvas Area End --> */}

      <header className="header position-absolute z-3 start-0 top-0 w-100">
        <div className="main-header">
          <div className="container-fluid">
            <div className="row">
              {/* Logo */}
              <div className="col-xl-2 col-md-3 col-4 align-self-center">
                <div className="header-left d-flex justify-content-start">
                  <div className="site-logo">
                    <Link href="/">
                      <img
                        src="/assets/wp-content/themes/edulink/assets/img/logo.svg"
                        alt="Edulink"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xl-10 col-md-9 col-8 align-self-center">
                <div className="header_right d-flex gap-4 justify-content-end">
                  <nav id="main-menu">
                    <ul id="menu-main-menu" className=" ">
                      <li
                        id="menu-item-1538"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1538"
                      >
                        <a href="https://wpdemothemes.com/edulink/online-course/">
                          Home
                        </a>
                      </li>
                      <li
                        id="menu-item-1687"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1687"
                      >
                        <a href="https://wpdemothemes.com/edulink/about/">
                          About
                        </a>
                      </li>
                      <li
                        id="menu-item-1524"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1524"
                      >
                        <a href="https://wpdemothemes.com/edulink/courses/">
                          Courses
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-1535"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1535"
                          >
                            <a href="https://wpdemothemes.com/edulink/courses/">
                              Courses
                            </a>
                          </li>
                          <li
                            id="menu-item-1508"
                            className="menu-item menu-item-type-post_type menu-item-object-courses menu-item-1508"
                          >
                            <a href="https://wpdemothemes.com/edulink/courses/the-ultimate-guide-to-building-a-restful-api/">
                              Course Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-1523"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1523"
                      >
                        <a href="https://wpdemothemes.com/edulink/blog/">
                          Blog
                        </a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-1534"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1534"
                          >
                            <a href="https://wpdemothemes.com/edulink/blog/">
                              Standard Blog
                            </a>
                          </li>
                          <li
                            id="menu-item-1537"
                            className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1537"
                          >
                            <a href="https://wpdemothemes.com/edulink/online-learning-program-for-students/">
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-1490"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1490"
                      >
                        <a href="index.html#">Pages</a>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-1536"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1536"
                          >
                            <a href="https://wpdemothemes.com/edulink/about/">
                              About
                            </a>
                          </li>
                          <li
                            id="menu-item-1531"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1531"
                          >
                            <a href="https://wpdemothemes.com/edulink/teachers-and-instructors/">
                              Teachers
                            </a>
                          </li>
                          <li
                            id="menu-item-1526"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1526"
                          >
                            <a href="https://wpdemothemes.com/edulink/dashboard/">
                              Dashboard
                            </a>
                          </li>
                          <li
                            id="menu-item-1724"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1724"
                          >
                            <a href="https://wpdemothemes.com/edulink/student-registration/">
                              Student Registration
                            </a>
                          </li>
                          <li
                            id="menu-item-1529"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1529"
                          >
                            <a href="https://wpdemothemes.com/edulink/instructor-registration/">
                              Instructor Registration
                            </a>
                          </li>
                          <li
                            id="menu-item-1507"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1507"
                          >
                            <a href="https://wpdemothemes.com/edulink/404">
                              404
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-1525"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1525"
                      >
                        <a href="https://wpdemothemes.com/edulink/contact/">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <a
                    className="search_btn align-self-center"
                    data-menu="#popup_searchbox"
                  >
                    <i className="ph ph-magnifying-glass"></i>
                  </a>
                  <a
                    className="cart_btn align-self-center"
                    href="https://wpdemothemes.com/edulink/cart/"
                  >
                    <i className="ph ph-shopping-cart"></i>
                  </a>

                  <a className="blue_btn align-self-center" href="index.html#">
                    Enroll Now
                  </a>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <i className="ph ph-list"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Start Popup Search Box --> */}
      <div id="popup_searchbox" className="popup_searchbox_wrapper">
        <div className="searchbox_drawer position-relative">
          <a href="#" className="popup_close">
            <i className="bx bx-x"></i>
          </a>
          <div className="popup_searchform text-center">
            <div className="col-lg-7 mx-auto">
              <form
                action="index.html"
                className="position-relative"
                method="get"
              >
                <input
                  type="text"
                  defaultValue=""
                  name="s"
                  placeholder="What are you looking For?"
                />
                <button type="submit">
                  <i className="ph ph-magnifying-glass"></i> Search
                </button>
                <input type="hidden" name="post_type" value="courses" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Popup Search Box --> */}
    </>
  );
}

export const metadata = {
  title: "Course Details",
};
("use client");
import { useState } from "react";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

export default function CourseDetailsPage({ params }) {
  const { slug } = params;

  const [activeTab, setActiveTab] = useState("overview");
  const [openIndex, setOpenIndex] = useState(0);
  const curriculum = [
    {
      title: "JavaScript Language Basics",
      lessons: [
        { title: "Let’s start coding!", duration: "04:40" },
        { title: "Variables and Data Types", duration: "04:20" },
        {
          title: "Ternary Operator and Switch Statements Preview",
          duration: "06:20",
        },
      ],
    },
    {
      title: "JavaScript in the Browser: DOM Manipulation and Events",
      lessons: [
        { title: "The DOM and DOM Manipulation", duration: "04:20" },
        { title: "First DOM Access and Manipulation", duration: "05:20" },
        {
          title: "Events and Event Handling: Rolling the Dice",
          duration: "03:20",
        },
      ],
    },
    {
      title: "Advanced JavaScript: Objects and Functions",
      lessons: [
        { title: "Creating Objects: Function Constructors", duration: "04:50" },
        { title: "The Prototype Chain in the Console", duration: "04:20" },
        {
          title: "First Class Functions: Functions Returning Functions",
          duration: "05:10",
        },
      ],
    },
    {
      title: "Putting It All Together: The Budget App Project",
      lessons: [
        {
          title: "Project Planning and Architecture: Step 1",
          duration: "05:30",
        },
        { title: "Implementing the Module Pattern", duration: "06:20" },
        { title: "Setting up the First Event Listeners", duration: "05:20" },
      ],
    },
    {
      title: "Modern JavaScript: Using ES6, NPM, Babel and Webpack",
      lessons: [
        { title: "Installing Node.js and NPM", duration: "05:20" },
        {
          title: "Planning our Project Architecture with MVC",
          duration: "06:10",
        },
      ],
    },
  ];
  //   rating
  const averageRating = 4.0;
  const totalRatings = 2;
  const ratingBreakdown = [
    { star: 5, count: 1, percent: 50 },
    { star: 4, count: 0, percent: 0 },
    { star: 3, count: 1, percent: 50 },
    { star: 2, count: 0, percent: 0 },
    { star: 1, count: 0, percent: 0 },
  ];
  const reviews = [
    {
      rating: 3,
      comment:
        "Amazing Tutor, Many thanks for the course. You have explained the course so nicely.",
      time: "7 years ago",
    },
    {
      rating: 5,
      comment:
        "This is the best course online that you can get. Thank's Jonas, you are my Hero.",
      time: "7 years ago",
    },
  ];
  //   instructor
  const instructor = {
    name: "edulink",
    image: "/assets/wp-content/uploads/2025/10/2-1.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum ligula non quam scelerisque hendrerit.",
    students: 2,
    courses: 8,
    social: {
      facebook: "https://example.com",
      twitter: "https://example.com",
      linkedin: "https://example.com",
    },
  };

  const relatedCourses = [
    {
      id: 1,
      title: "The Complete JavaScript Course",
      image: "/assets/img/course1.jpg",
      category: "Marketing",
      duration: "18 Hours",
    },
    {
      id: 2,
      title: "Interior Design Masterclass",
      image: "/assets/img/course2.jpg",
      category: "Art & Design",
      duration: "2 Hours",
    },
  ];

  return (
    <>
      <Banner title="Course Details" />
      <section className="courses-details section-padding tutor-frontend">
        <div className="container">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-xl-8">
              <div className="scourse_image">
                <img
                  src="/assets/wp-content/uploads/2025/03/2-3.jpg"
                  alt="Course"
                  className="img-fluid"
                />
              </div>
              <div className="scourse_meta">
                <div className="row">
                  {/* Instructor */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="smeta d-flex align-items-center gap-2">
                      <div className="tutor-avatar">
                        <div className="tutor-ratio tutor-ratio-1x1">
                          <img
                            src="/assets/wp-content/uploads/2025/10/2-2.png"
                            alt="Instructor"
                          />
                        </div>
                      </div>

                      <div className="smeta_text">
                        <span>Instructor:</span>
                        <p className="mb-0">
                          <Link href="/instructor/edulink">edulink</Link>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="smeta sm_cat">
                      <span>Category:</span>
                      <p className="mb-0">
                        <Link href="/category/finance-account">
                          Finance Account
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Last Update */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="smeta">
                      <span>Last Update:</span>
                      <p className="mb-0">March 24, 2025</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="smeta smrating">
                      <div className="tutor-course-details-ratings d-flex align-items-center gap-2">
                        <div className="tutor-ratings-stars">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i
                              key={i}
                              className={
                                i < 5
                                  ? "tutor-icon-star-bold"
                                  : "tutor-icon-star-line"
                              }
                            ></i>
                          ))}
                        </div>

                        <span>({(5.0).toFixed(2)})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="scourse-title mt-4">
                Enhance Your Personal Financial Analysis Skills
              </h2>

              {/* TABS */}
              <nav className="cd_tab">
                <div className="nav nav-tabs mt-4" id="nav-tab">
                  {["overview", "curriculum", "review", "instructor"].map(
                    (tab) => (
                      <button
                        key={tab}
                        className={`nav-link ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ),
                  )}
                </div>
              </nav>

              {/* OVERVIEW */}
              {activeTab === "overview" && (
                <div className="tab-content" id="nav-overview">
                  <div className="wow fadeIn">
                    <p>
                      This course helps you understand financial analysis,
                      budgeting, and strategic planning.
                    </p>
                    <div className="tutor-course-details-widget tutor-course-details-widget-col-2 tutor-mt-lg-50 tutor-mt-32">
                      <h3 className="tutor-course-details-widget-title tutor-fs-5 tutor-fw-bold tutor-color-black tutor-mb-16">
                        What Will You Learn?
                      </h3>

                      <ul className="tutor-course-details-widget-list tutor-color-black tutor-fs-6 tutor-m-0 tutor-mt-16">
                        <li className="tutor-d-flex tutor-mb-12">
                          <span className="tutor-icon-bullet-point tutor-color-muted tutor-mt-2 tutor-mr-8 tutor-fs-8"></span>
                          <span>
                            Understand the fundamentals of healthy dieting
                            (calories, protein, carbs, fat, vitamins & minerals)
                          </span>
                        </li>

                        <li className="tutor-d-flex tutor-mb-12">
                          <span className="tutor-icon-bullet-point tutor-color-muted tutor-mt-2 tutor-mr-8 tutor-fs-8"></span>
                          <span>
                            Create a diet that is perfect for your needs and
                            lifestyle
                          </span>
                        </li>

                        <li className="tutor-d-flex tutor-mb-12">
                          <span className="tutor-icon-bullet-point tutor-color-muted tutor-mt-2 tutor-mr-8 tutor-fs-8"></span>
                          <span>
                            Learn when, what and how much you should eat for
                            optimal body composition
                          </span>
                        </li>

                        <li className="tutor-d-flex tutor-mb-12">
                          <span className="tutor-icon-bullet-point tutor-color-muted tutor-mt-2 tutor-mr-8 tutor-fs-8"></span>
                          <span>
                            Build more muscle by optimizing your meal plan
                          </span>
                        </li>

                        <li className="tutor-d-flex tutor-mb-12">
                          <span className="tutor-icon-bullet-point tutor-color-muted tutor-mt-2 tutor-mr-8 tutor-fs-8"></span>
                          <span>
                            Lose fat faster by optimizing your meal plan
                          </span>
                        </li>

                        <li className="tutor-d-flex tutor-mb-12">
                          <span className="tutor-icon-bullet-point tutor-color-muted tutor-mt-2 tutor-mr-8 tutor-fs-8"></span>
                          <span>
                            Improve immunity and energy levels with the right
                            vitamins and minerals
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* CURRICULUM */}
              {activeTab === "curriculum" && (
                <div className="cd_curriculum">
                  <div className="courser_topics">
                    <h3 className="tutor-fs-5 tutor-fw-bold tutor-color-black tutor-mb-24 tutor-course-content-title">
                      Topics of Course
                    </h3>

                    <div className="tutor-accordion tutor-mt-24 ">
                      <div
                        className="accordion tutor-accordion tutor-mt-24"
                        id="courseAccordion"
                      >
                        {curriculum.map((section, index) => (
                          <div
                            key={index}
                            className="accordion-item tutor-accordion-item"
                          >
                            {/* Header */}
                            <h2 className="accordion-header">
                              <button
                                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse-${index}`}
                              >
                                {section.title}
                              </button>
                            </h2>

                            {/* Body */}
                            <div
                              id={`collapse-${index}`}
                              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                              data-bs-parent="#courseAccordion"
                            >
                              <div className="accordion-body tutor-accordion-item-body-content">
                                <ul className="tutor-course-content-list">
                                  {section.lessons.map((lesson, i) => (
                                    <li
                                      key={i}
                                      className="tutor-course-content-list-item"
                                    >
                                      <div className="d-flex align-items-center">
                                        <span className="tutor-course-content-list-item-icon tutor-icon-brand-youtube-bold me-2"></span>
                                        <h5 className="tutor-course-content-list-item-title mb-0">
                                          {lesson.title}
                                        </h5>
                                      </div>

                                      <div>
                                        <span className="tutor-course-content-list-item-duration text-muted small">
                                          {lesson.duration}
                                        </span>
                                        <span
                                          className="tutor-course-content-list-item-status tutor-icon-lock-line ms-3"
                                          aria-hidden="true"
                                        ></span>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* REVIEWS */}
              {activeTab === "review" && (
                <div
                  className="tab-pane fade show active"
                  id="nav-review"
                  role="tabpanel"
                >
                  <div className="cd_rating">
                    <div className="tutor-pagination-wrapper-replaceable">
                      <h3 className="tutor-fs-5 tutor-fw-bold tutor-color-black tutor-mb-24">
                        Student Ratings & Reviews
                      </h3>

                      <div className="tutor-card tutor-review-card">
                        {/* Summary */}
                        <div className="tutor-review-summary tutor-p-24 tutor-p-lg-40">
                          <div className="tutor-row tutor-align-center">
                            {/* Average Rating */}
                            <div className="tutor-col-lg-auto tutor-text-center tutor-mb-16">
                              <div className="tutor-review-summary-average-rating tutor-mb-20">
                                {averageRating.toFixed(1)}
                              </div>

                              <div className="tutor-ratings tutor-ratings-lg">
                                <div className="tutor-ratings-stars">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                      key={i}
                                      className={
                                        i < Math.round(averageRating)
                                          ? "tutor-icon-star-bold"
                                          : "tutor-icon-star-line"
                                      }
                                    ></span>
                                  ))}
                                </div>
                              </div>

                              <div className="tutor-fs-6 tutor-color-secondary tutor-mt-12">
                                Total {totalRatings} Ratings
                              </div>
                            </div>

                            {/* Rating Breakdown */}
                            <div className="tutor-col-lg">
                              {ratingBreakdown.map((item) => (
                                <div
                                  key={item.star}
                                  className="tutor-row tutor-align-center tutor-review-summary-rating"
                                >
                                  <div className="tutor-col-auto">
                                    <div className="tutor-ratings">
                                      <div className="tutor-ratings-average">
                                        {item.star}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="tutor-col">
                                    <div
                                      className="tutor-progress-bar tutor-ratings-progress-bar"
                                      style={{
                                        "--tutor-progress-value": `${item.percent}%`,
                                      }}
                                    >
                                      <span
                                        className="tutor-progress-value"
                                        aria-hidden="true"
                                      ></span>
                                    </div>
                                  </div>

                                  <div className="tutor-col-4 tutor-col-lg-3">
                                    <span className="tutor-fs-6 tutor-color-secondary">
                                      {item.count} Rating
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="tutor-hr" aria-hidden="true"></div>

                        {/* Review List */}
                        <div className="tutor-reviews tutor-card-list">
                          {reviews.map((review, index) => (
                            <div
                              key={index}
                              className="tutor-review-list-item tutor-card-list-item tutor-p-24 tutor-p-lg-40"
                            >
                              <div className="tutor-row">
                                <div className="tutor-col-lg-3 tutor-mb-16">
                                  <div className="tutor-reviewed-on tutor-fs-7 tutor-color-muted">
                                    {review.time}
                                  </div>
                                </div>

                                <div className="tutor-col-lg-9">
                                  <div className="tutor-ratings">
                                    <div className="tutor-ratings-stars">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <span
                                          key={i}
                                          className={
                                            i < review.rating
                                              ? "tutor-icon-star-bold"
                                              : "tutor-icon-star-line"
                                          }
                                        ></span>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="tutor-fs-7 tutor-color-secondary tutor-mt-12">
                                    {review.comment}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* INSTRUCTOR */}
              {activeTab === "instructor" && (
                <div
                  className="tab-pane fade show active"
                  id="nav-instructor"
                  role="tabpanel"
                  aria-labelledby="nav-instructor-tab"
                  tabIndex="0"
                >
                  <h3 className="tutor-fs-5 tutor-fw-bold tutor-color-black tutor-mb-24">
                    Your Instructor
                  </h3>

                  <div className="cd_instructor">
                    {/* Image + Social */}
                    <div className="cdin_image">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        width={"271"}
                        height={"276"}
                        className="attachment-full size-full"
                      />

                      <ul>
                        <li>
                          <a
                            href={instructor.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href={instructor.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-x-twitter"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href={instructor.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Content */}
                    <div className="cdin_content">
                      <h4>
                        <Link href={`/instructor/${instructor.name}`}>
                          {instructor.name}
                        </Link>
                      </h4>

                      <p>{instructor.bio}</p>

                      <div className="cdin_meta">
                        <div className="cdin_meta_item">
                          <i className="fa-solid fa-graduation-cap"></i>{" "}
                          {instructor.students} Students
                        </div>

                        <div className="cdin_meta_item">
                          <i className="fa-solid fa-file-circle-check"></i>{" "}
                          {instructor.courses} Courses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="col-xl-4 wow fadeIn">
              <div className="course-sidebar">
                {/* Top Card */}
                <div className="cs_top">
                  <div className="tutor-card tutor-card-md tutor-sidebar-card">
                    <div className="tutor-card-body">
                      <div className="tutor-course-single-pricing">
                        <span className="tutor-fs-4 tutor-fw-bold tutor-color-black">
                          Free
                        </span>
                      </div>

                      <div className="tutor-course-single-btn-group">
                        <button
                          type="button"
                          className="tutor-btn tutor-btn-primary tutor-btn-lg tutor-btn-block tutor-mt-24"
                        >
                          Enroll Now
                        </button>
                      </div>

                      <div className="tutor-fs-7 tutor-color-muted tutor-mt-20 tutor-text-center">
                        Free access this course
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className="tutor-card-footer">
                      <ul className="tutor-ul">
                        <li className="tutor-d-flex">
                          <span className="tutor-icon-level tutor-mt-4 tutor-mr-12" />
                          <span className="tutor-fs-6 tutor-color-secondary">
                            Intermediate
                          </span>
                        </li>

                        <li className="tutor-d-flex tutor-mt-12">
                          <span className="tutor-icon-mortarboard tutor-mt-4 tutor-mr-12" />
                          <span className="tutor-fs-6 tutor-color-secondary">
                            0 Total Enrolled
                          </span>
                        </li>

                        <li className="tutor-d-flex tutor-mt-12">
                          <span className="tutor-icon-clock-line tutor-mt-4 tutor-mr-12" />
                          <span className="tutor-fs-6 tutor-color-secondary">
                            18 hours 20 minutes Duration
                          </span>
                        </li>

                        <li className="tutor-d-flex tutor-mt-12">
                          <span className="tutor-icon-refresh-o tutor-mt-4 tutor-mr-12" />
                          <span className="tutor-fs-6 tutor-color-secondary">
                            February 6, 2026 Last Updated
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Material Includes */}
                <div className="tutor-course-details-widget">
                  <h3 className="tutor-course-details-widget-title tutor-fs-5 tutor-fw-bold tutor-mb-16">
                    Material Includes
                  </h3>

                  <ul className="tutor-course-details-widget-list">
                    <li className="tutor-d-flex tutor-mb-12">
                      18 hours on-demand video
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">10 articles</li>
                    <li className="tutor-d-flex tutor-mb-12">
                      1 downloadable resource
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">
                      Full lifetime access
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">
                      Access on mobile and TV
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">
                      Certificate of Completion
                    </li>
                  </ul>
                </div>

                {/* Requirements */}
                <div className="tutor-course-details-widget">
                  <h3 className="tutor-course-details-widget-title tutor-fs-5 tutor-fw-bold tutor-mb-16">
                    Requirements
                  </h3>

                  <ul className="tutor-course-details-widget-list">
                    <li className="tutor-d-flex tutor-mb-12">
                      No coding experience is necessary
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">
                      Any computer and OS will work
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">
                      Basic HTML and CSS is a plus
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div className="tutor-course-details-widget">
                  <h3 className="tutor-course-details-widget-title tutor-fs-5 tutor-fw-bold tutor-color-black tutor-mb-16">
                    Tags
                  </h3>

                  <div className="tutor-course-details-widget-tags">
                    <ul className="tutor-tag-list">
                      <li>
                        <a href="https://wpdemothemes.com/edulink/course-tag/app-development/">
                          App Development
                        </a>
                      </li>
                      <li>
                        <a href="https://wpdemothemes.com/edulink/course-tag/javascript/">
                          JavaScript
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Audience */}
                <div className="tutor-course-details-widget">
                  <h3 className="tutor-course-details-widget-title tutor-fs-5 tutor-fw-bold tutor-mb-16">
                    Audience
                  </h3>

                  <ul className="tutor-course-details-widget-list">
                    <li className="tutor-d-flex tutor-mb-12">
                      Anyone who wants to master JavaScript
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">
                      Developers who want deeper understanding
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">
                      Future React / Node developers
                    </li>
                    <li className="tutor-d-flex tutor-mb-12">
                      Beginners in programming
                    </li>
                  </ul>
                </div>

                {/* Share */}
                <div className="text-center">
                  <a
                    data-tutor-modal-target="tutor-course-share-opener"
                    href="#"
                    className="cshare_btn"
                  >
                    <i className="bx bx-share-alt me-2"></i> Share This Course
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RELATED COURSES */}
          <div className="related-courses">
            <h3 className="mb-4">Courses You May Like</h3>
            <div className="row">
              {relatedCourses.map((course, i) => (
                <div
                  key={i}
                  className="col-xl-4 col-md-6 col-12 wow fadeInUp"
                  data-wow-delay={`${0.2 + i * 0.1}s`}
                >
                  <div className="course_item">
                    <div className="course_img">
                      <img
                        src="/assets/wp-content/uploads/2025/03/b3-690x430.jpg"
                        alt="Course"
                      />
                      <a href="#" className="category">
                        <i className="ph ph-folder-open"></i> Marketing
                      </a>
                    </div>

                    <div className="course_content">
                      <div className="ctop_meta overflow-hidden mb-2">
                        <span className="float-start">★★★★★</span>
                        <span className="course_price float-end">Free</span>
                      </div>

                      <h2>
                        <a href="#">The Complete JavaScript Course</a>
                      </h2>

                      <div className="cmeta overflow-hidden mt-1 mb-3">
                        <span className="float-start">
                          <i className="ph ph-book"></i> 14 Topics
                        </span>
                        <span className="float-end">
                          <i className="ph ph-clock"></i> 18 Hours
                        </span>
                      </div>

                      <a href="#" className="border_btn">
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

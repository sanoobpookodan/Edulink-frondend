export const metadata = {
  title: "Courses",
};
import Banner from "@/components/shared/Banner";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <section>
      <Banner />

      <section className="courses section-padding">
        <div className="container">
          <div
            style={{ textAlign: "right" }}
            // tutor-course-filter={true}
            className="tutor-course-filter"
          >
            <form style={{ display: "inline-block" }}>
              <select
                className="tutor-form-control tutor-form-select"
                name="course_order"
              >
                <option value="newest_first">
                  Release Date (newest first){" "}
                </option>
                <option value="oldest_first">
                  Release Date (oldest first){" "}
                </option>
                <option value="course_title_az">Course Title (a-z) </option>
                <option value="course_title_za">Course Title (z-a) </option>
              </select>
            </form>
          </div>
          <br />
          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
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
          <nav className="tutor-pagination tutor-mt-40">
            <div className="tutor-pagination-hints">
              <div className="tutor-fs-7 tutor-color-black-60">
                Page{" "}
                <span className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                  1
                </span>{" "}
                of{" "}
                <span className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                  2
                </span>
              </div>
            </div>

            <ul className="tutor-pagination-numbers">
              <span
                aria-label="Page 1"
                aria-current="page"
                className="page-numbers current"
              >
                1
              </span>

              <Link
                aria-label="Page 2"
                className="page-numbers"
                href="/courses?page=2"
              >
                2
              </Link>

              <Link className="next page-numbers" href="/courses?page=2">
                <span className="tutor-icon-angle-right"></span>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
    </section>
  );
}

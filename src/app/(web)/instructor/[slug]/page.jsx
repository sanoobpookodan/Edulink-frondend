export default async function TeacherDetailPage({ params }) {
  return (
    <div id="tutor">
      <section className="tutor-wrap tutor-wrap-parent tutor-full-width-student-profile tutor-page-wrap tutor-user-public-profile tutor-user-public-profile-pp-rectangle tutor-instructor">
        {/* Profile Header */}
        <div className="tutor-container photo-area">
          <div className="cover-area">
            <div
              style={{
                backgroundImage:
                  "url(https://wpdemothemes.com/edulink/wp-content/plugins/tutor/assets/images/cover-photo.jpg)",
              }}
            ></div>
            <div></div>
          </div>

          <div className="pp-area">
            <div
              className="profile-pic"
              style={{
                backgroundImage:
                  "url(https://wpdemothemes.com/edulink/wp-content/uploads/2025/10/2-1.png)",
              }}
            ></div>

            <div className="profile-name tutor-color-white">
              <h3>edulink</h3>
              <span>
                <span>8</span> Courses
              </span>
              <span> • </span>
              <span>
                <span>1</span> Student
              </span>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="tutor-container" style={{ overflow: "auto" }}>
          <div className="tutor-user-profile-content tutor-d-block tutor-mt-72">
            <h3>Biography</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              interdum ligula non quam scelerisque hendrerit. Fusce dignissim
              ligula ipsum, a porttitor enim feugiat at.
            </p>

            <h3>Courses</h3>

            <div className="tutor-grid tutor-grid-3">
              {/* Course Card Template */}

              {[
                {
                  title: "The Complete JavaScript Course 2019",
                  img: "b3.jpg",
                  category: "Marketing",
                  price: "Free",
                  topics: "14 Topics",
                  hours: "18.20 Hours",
                },
                {
                  title: "Interior design concepts Masterclass",
                  img: "6.jpg",
                  category: "Art & Design",
                  price: "$280.00",
                  topics: "14 Topics",
                  hours: "02.20 Hours",
                },
                {
                  title: "The complete guide to build application",
                  img: "5.jpg",
                  category: "Web Development",
                  price: "$350.00",
                  topics: "14 Topics",
                  hours: "03.20 Hours",
                },
                {
                  title: "SEO as the Core of Your New Business Venture",
                  img: "4-2.jpg",
                  category: "3D Animation",
                  price: "$400.00",
                  topics: "15 Topics",
                  hours: "17.20 Hours",
                },
                {
                  title: "The Ultimate Guide to Building a RESTful API",
                  img: "3-2.jpg",
                  category: "Mobile Application",
                  price: "$430.00",
                  topics: "6 Topics",
                  hours: "04.00 Hours",
                },
                {
                  title: "Enhance Your Personal Financial Analysis Skills",
                  img: "2-3.jpg",
                  category: "Finance Account",
                  price: "$600.00",
                  topics: "15 Topics",
                  hours: "04.00 Hours",
                },
                {
                  title: "WordPress for Beginners – Master WordPress",
                  img: "course4-1.jpg",
                  category: "Health and Fitness",
                  price: "Free",
                  topics: "15 Topics",
                  hours: "07.30 Hours",
                },
                {
                  title: "Learn Machine Learning Practically with Python",
                  img: "c1.jpg",
                  category: "Data Science",
                  price: "Free",
                  topics: "16 Topics",
                  hours: "22.30 Hours",
                },
              ].map((course, index) => (
                <div key={index} className="tutor-card tutor-course-card">
                  <div className="course_item">
                    <div className="course_img">
                      <img
                        src={`https://wpdemothemes.com/edulink/wp-content/uploads/2025/03/${course.img}`}
                        alt={course.title}
                      />
                      <a href="#" className="category">
                        <i className="ph ph-folder-open"></i> {course.category}
                      </a>
                    </div>

                    <div className="course_content">
                      <div className="ctop_meta overflow-hidden mb-2">
                        <span className="course_rating float-start">
                          <div className="tutor-ratings-stars">
                            <i className="tutor-icon-star-bold"></i>
                            <i className="tutor-icon-star-bold"></i>
                            <i className="tutor-icon-star-bold"></i>
                            <i className="tutor-icon-star-bold"></i>
                            <i className="tutor-icon-star-line"></i>
                          </div>
                        </span>

                        <span className="course_price float-end">
                          {course.price}
                        </span>
                      </div>

                      <h2>
                        <a href="#">{course.title}</a>
                      </h2>

                      <div className="cmeta overflow-hidden mt-1 mb-3">
                        <span className="float-start">
                          <i className="ph ph-book"></i> {course.topics}
                        </span>
                        <span className="float-end">
                          <i className="ph ph-clock"></i> {course.hours}
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
    </div>
  );
}

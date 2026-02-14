"use client";

export default function HomePage() {
  return (
    <div className="page-builder-template">
      {/* ================= HERO SLIDER ================= */}
      <section className="active-hslider text-start position-relative">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div
            className="hslider-item swiper-slide align-self-center"
            style={{
              backgroundImage:
                "url('/assets/wp-content/uploads/2025/10/1.jpg')",
            }}
          >
            <div className="container position-relative">
              <h2>
                Never Stop <span className="blue-color">Learning</span>
                <br />
                <span className="fw-lighter">Life Never Stop</span>
                <br />
                Teaching
              </h2>

              <p>
                Etiam rutrum dui ac tristique rutrum. Nunc tincidunt aliquet
                ultricies.
              </p>

              <a href="#" className="blue_btn">
                Get Started <i className="ph ph-arrow-right"></i>
              </a>

              {/* Slider Badges */}
              <div className="slider_badges">
                <div className="sbadge_item wow fadeInUp" data-wow-delay="0.2s">
                  <h2>
                    <span className="count">160+</span>
                  </h2>
                  <p>Expert Instructors</p>
                </div>

                <div
                  className="sbadge_item green_bg wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h2>
                    <span className="count">25k+</span>
                  </h2>
                  <p>Satisfied Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="hslider-item swiper-slide align-self-center"
            style={{
              backgroundImage:
                "url('/assets/wp-content/uploads/2025/10/2.jpg')",
            }}
          >
            <div className="container position-relative">
              <h2>
                Dream Believe <span className="blue-color">Achieve</span>
                <br />
                <span className="fw-lighter">Knowledge Is Power</span>
                <br />
                Starts Today
              </h2>

              <p>
                Etiam rutrum dui ac tristique rutrum. Nunc tincidunt aliquet
                ultricies.
              </p>

              <a href="#" className="blue_btn">
                Get Started <i className="ph ph-arrow-right"></i>
              </a>

              {/* Slider Badges */}
              <div className="slider_badges">
                <div className="sbadge_item wow fadeInUp" data-wow-delay="0.2s">
                  <h2>
                    <span className="count">160+</span>
                  </h2>
                  <p>Expert Instructors</p>
                </div>

                <div
                  className="sbadge_item green_bg wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <h2>
                    <span className="count">25k+</span>
                  </h2>
                  <p>Satisfied Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="container hslider_nav">
          <div className="hslider-prev">
            <i className="ph ph-arrow-left"></i>
          </div>
          <div className="hslider-next">
            <i className="ph ph-arrow-right"></i>
          </div>
        </div>
      </section>
      {/* ================= FEATURES ================= */}
      <section className="features py-5">
        <div className="e-con-inner">
          <div className="container">
            <div
              className="section-title text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <span>Empowering learners</span>
              <h2>Courses that engage</h2>
            </div>

            <div className="row g-4 mt-4">
              {[
                { icon: "ph-desktop", title: "Online courses" },
                { icon: "ph-student", title: "Empowering learners" },
                { icon: "ph-files", title: "Innovative Courses" },
                { icon: "ph-chalkboard-teacher", title: "Tailored training" },
                { icon: "ph-globe", title: "Global reach" },
                { icon: "ph-video", title: "Video lessons" },
                { icon: "ph-translate", title: "Language meet" },
                { icon: "ph-music-notes", title: "Audio books" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="col-xl-3 col-md-6 col-12 wow fadeInUp"
                  data-wow-delay={`${0.2 + i * 0.1}s`}
                >
                  <div className="feature-item">
                    <i className={`ph ${item.icon}`} />
                    <h3>{item.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= ABOUT ================= */}
      <section className="about py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <img
                src="/assets/wp-content/uploads/2025/10/about.png"
                alt="about"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="section-title">
                <span>About Us</span>
                <h2>Understand users through research</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                interdum ligula non quam scelerisque hendrerit. Fusce dignissim
                ligula ipsum, a porttitor enim feugiat at. Etiam tempor
                consequat nibh, sit amet porttitor libero pretium aliquam.
                Aenean interdum urna in cursus malesuada. Fusce Phasellus
                placerat. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus interdum ligula non quam scelerisque hendrerit.
                Fusce dignissim ligula ipsum, a porttitor enim feugiat at. Etiam
                tempor consequat nib.
              </p>

              <a href="#" className="blue_btn mt-3">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ================= COUNTER ================= */}
      <section className="counter-up py-5">
        <div className="container">
          <div className="row g-4">
            {[
              {
                number: "120",
                format: "K",
                title: "Our Happy Students",
                icon: "ph-student",
              },
              {
                number: "17",
                format: "K+",
                title: "Enrolled Learners",
                icon: "ph-graduation-cap",
              },
              {
                number: "70",
                format: "K",
                title: "Expert Instructors",
                icon: "ph-chalkboard-teacher",
              },
              {
                number: "98",
                format: "%",
                title: "Satisfaction Rate",
                icon: "ph-thumbs-up",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-md-6 col-12 wow fadeIn"
                data-wow-delay={`${0.2 + i * 0.1}s`}
              >
                <div className="counter-item text-center">
                  <span className="cicon">
                    <i className={`ph ${item.icon} icon-lg`} />
                  </span>
                  <h4>
                    <span className="cnumb">{item.number}</span>
                    {item.format}
                  </h4>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CATEGORY ================= */}
      <section className="courses_category py-5">
        <div className="container-fluid">
          <div
            className="section-title text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <span>Categories</span>
            <h2>Explore our Top Categories</h2>
          </div>

          {/* <div className="row g-4 mt-4"> */}
          <div className="ccategory_slider swiper mt-4">
            <div className="swiper-wrapper">
              {[
                {
                  title: "3D Animation",
                  image: "assets/wp-content/uploads/2025/10/1-1.jpg",
                  courses: "1 Course",
                },
                {
                  title: "Art & Design",
                  image: "assets/wp-content/uploads/2025/10/2-1.jpg",
                  courses: "1 Course",
                },
                {
                  title: "Data Science",
                  image: "assets/wp-content/uploads/2025/10/3.jpg",
                  courses: "1 Course",
                },
                {
                  title: "Finance Account",
                  image: "assets/wp-content/uploads/2025/10/4.jpg",
                  courses: "1 Course",
                },
                {
                  title: "Health & Fitness",
                  image: "assets/wp-content/uploads/2025/10/5.jpg",
                  courses: "1 Course",
                },
                {
                  title: "Marketing",
                  image: "assets/wp-content/uploads/2025/10/3.jpg",
                  courses: "1 Course",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="category_item swiper-slide wow fadeInUp"
                  data-wow-delay={`${0.2 + i * 0.1}s`}
                >
                  <div className="category_img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.courses}</p>
                </div>
              ))}
            </div>
            {/* Navigation + Scrollbar */}
            <div className="text-center mt-5">
              <div className="ccategory-prev sc-arrow">
                <i className="ph ph-arrow-left"></i>
              </div>

              <div className="ccategory-scrollbar w-50 d-inline-block ">
                <div className="swiper-scrollbar-drag"></div>
              </div>

              <div className="ccategory-next sc-arrow">
                <i className="ph ph-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ================= COURSES ================= */}
      <section className="courses py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
              <div className="section-title mb-3 mb-lg-5 text-start">
                <span className="bg-white">Courses</span>
                <h2>Popular Courses</h2>
                <img
                  src="/assets/wp-content/themes/edulink/assets/img/shapes/title.svg"
                  alt=""
                />
              </div>
            </div>

            <div
              className="col-lg-4 text-start text-lg-end wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a href="#" className="blue_btn animated">
                Learn More <i className="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>

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
        </div>
      </section>
      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials py-5">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-3 align-self-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="section-title text-start mb-4">
                <span>Testimonials</span>
                <h2>
                  What Our Students
                  <br />
                  Have To Say
                </h2>
                <img
                  decoding="async"
                  src="assets/wp-content/themes/edulink/assets/img/shapes/title.svg"
                  alt=""
                ></img>
              </div>

              <div className="testimonial-prev sc-arrow">
                <i className="ph ph-arrow-left"></i>
              </div>
              <div className="testimonial-next sc-arrow">
                <i className="ph ph-arrow-right"></i>
              </div>
            </div>

            <div className="col-xl-9 wow fadeInUp" data-wow-delay="0.3s">
              <div className="testimonial_slider swiper">
                <div className="swiper-wrapper">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <div key={i} className="testimonial_item swiper-slide">
                      <div className="testimonial_content">
                        <h4>Dianne Russell</h4>
                        <span>CEO of ABC LTD</span>
                        <p>
                          Lorem ipsum dolor amet consec tur elit adicing sed do
                          usmod tempor.
                        </p>
                      </div>

                      <div className="testimonial_avatar">
                        <img
                          src="/assets/wp-content/uploads/2025/10/3-2.png"
                          alt=""
                        />
                        <div className="quote_icon">
                          <i className="ph ph-quotes"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= TEAM ================= */}
      <section className="team py-5">
        <div className="container">
          <div
            className="section-title text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <span>Team</span>
            <h2>Our Expert Instructors</h2>
            <img
              src="assets/wp-content/themes/edulink/assets/img/shapes/title.svg"
              alt=""
            />
          </div>

          <div className="row g-4 mt-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + i * 0.1}s`}
              >
                <div className="teacher-item">
                  <div className="teacher-image">
                    <img
                      src="/assets/wp-content/uploads/2025/10/1-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <div className="teacher-content text-center mt-3">
                    <h4>James Carter</h4>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="cta py-5">
        <div className="container">
          <div className="row gx-4">
            <div className="col-md-6 ">
              <div className="cta-item">
                <div
                  className="cta-content"
                  style={{
                    backgroundImage:
                      "url('/assets/wp-content/uploads/2025/10/bg.jpg')",
                  }}
                >
                  <span>Learn together with</span>
                  <h2>For Instructors</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <a href="#" className="blue_btn mt-4">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="cta-item">
                <div
                  className="cta-content"
                  style={{
                    backgroundImage:
                      "url('/assets/wp-content/uploads/2025/10/bg2.jpg')",
                  }}
                >
                  <span>Get the skills</span>
                  <h2>For Students</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <a href="#" className="blue_btn mt-4">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= BLOG ================= */}
      <section className="blog py-5">
        <div className="container">
          <div
            className="section-title text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <span>Blog</span>
            <h2>
              Get Latest News with <br /> Edulink
            </h2>
            <img
              decoding="async"
              src="assets/wp-content/themes/edulink/assets/img/shapes/title.svg"
              alt=""
            />
          </div>

          <div className="row g-4 mt-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + i * 0.1}s`}
              >
                <div className="blog-item">
                  <div className="blog-image">
                    <img
                      src="/assets/wp-content/uploads/2025/03/b2-368x248.jpg"
                      alt="blog"
                      className="img-fluid"
                    />
                  </div>

                  <div className="blog-content">
                    <div className="bmeta">
                      <span className="meta_cat">
                        <a
                          href="https://wpdemothemes.com/edulink/category/wordpress/"
                          rel="category tag"
                        >
                          WordPress
                        </a>
                      </span>
                      <span>
                        <i className="ph ph-clock"></i> Mar 24, 2025
                      </span>
                    </div>
                    <h4 className="btitle">
                      <a href="https://wpdemothemes.com/edulink/leverage-agile-frameworks-to-provide-2/">
                        Leverage agile frameworks to provide Learning Through
                        Technology
                      </a>
                    </h4>
                    <a href="#" className="blog_btn">
                      <i className="ph ph-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="col-12 text-center mt-4">
            <a href="index.html#" class="border_btn">
              View All Posts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

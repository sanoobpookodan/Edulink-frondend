import Banner from "@/components/shared/Banner";

export const metadata = {
  title: "Instructors",
};

export default function TeachersPage() {
  return (
    <section>
      <Banner />
      <section className="team" id="team">
        <div className="container ">
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
                    <h4 class="tname">
                      <a href="/teachers/James Carter">James Carter</a>
                    </h4>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

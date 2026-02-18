import Banner from "@/components/shared/Banner";
export const metadata = {
  title: "About",
};
export default function AboutPage() {
  return (
    <div>
      <Banner />
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
    </div>
  );
}

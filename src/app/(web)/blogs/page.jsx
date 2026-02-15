import Banner from "@/components/shared/Banner";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <section>
      <Banner />

      <section className="courses section-padding">
        <div className="container">
          <div className="row g4">
            {/* Blog Item */}
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="blog-item">
                    <div className="blog-image">
                      <img
                        fetchPriority="high"
                        width="368"
                        height="248"
                        src={`https://wpdemothemes.com/edulink/wp-content/uploads/2025/03/b${i + 1}-368x248.jpg`}
                        className="attachment-edulink_blog size-edulink_blog wp-post-image"
                        alt=""
                        decoding="async"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="bmeta">
                        <span className="meta_cat">
                          <a href="/blogs/category/wordpress/">WordPress</a>
                        </span>
                        <span>
                          <i className="ph ph-clock"></i> Mar 24, 2025
                        </span>
                      </div>
                      <h4 className="btitle">
                        <a href={`/blogs/wordpress-post-${i + 1}/`}>
                          Leverage agile frameworks to provide
                        </a>
                      </h4>
                      <a
                        href={`/blogs/wordpress-post-${i + 1}/`}
                        className="blog_btn"
                      >
                        <i className="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            {/* Repeat same structure for other blog cards */}

            <div
              className="col-12 text-center wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="post_pagination"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

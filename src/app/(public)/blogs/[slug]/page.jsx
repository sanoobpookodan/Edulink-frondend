export const metadata = {
  title: "Blog Details",
};
import Banner from "@/components/shared/Banner";

export default function BlogDetailPage({ params }) {
  const { slug } = params;

  return (
    <section>
      <Banner />
      <section className="blog-details section-padding">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div
              className="col-xl-8 col-lg-8 col-md-12 col-12 wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <article
                id="post-1197"
                className="post-1197 post type-post status-publish format-standard has-post-thumbnail hentry category-education tag-program"
              >
                <div className="post-inner">
                  <div className="post-image">
                    <img
                      fetchPriority="high"
                      width="978"
                      height="726"
                      src="/assets/wp-content/uploads/2025/03/b1.jpg"
                      className="attachment-edulink_course_details size-edulink_course_details wp-post-image"
                      alt=""
                      decoding="async"
                      srcSet="
                  https://wpdemothemes.com/edulink/wp-content/uploads/2025/03/b1.jpg 978w,
                  https://wpdemothemes.com/edulink/wp-content/uploads/2025/03/b1-600x445.jpg 600w,
                  https://wpdemothemes.com/edulink/wp-content/uploads/2025/03/b1-300x223.jpg 300w,
                  https://wpdemothemes.com/edulink/wp-content/uploads/2025/03/b1-768x570.jpg 768w
                "
                      sizes="(max-width: 978px) 100vw, 978px"
                    />
                  </div>

                  <div className="entry-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut luctus eget dolor non condimentum. Mauris ac augue eu
                      ex elementum dictum. Quisque fermentum augue vel venenatis
                      bibendum. Curabitur malesuada egestas varius. Maecenas
                      maximus dapibus sem. Nunc lacinia sollicitudin risus, sed
                      pulvinar orci feugiat vel. Aliquam convallis urna diam,
                      eget ultrices dolor pretium non.
                    </p>

                    <h2>What Dose it Work from Web?</h2>

                    <p>
                      Mauris pulvinar eros non dictum maximus. In at lacus
                      scelerisque nisl maximus eleifend id ac libero. Integer
                      interdum est hendrerit imperdiet condimentum. Pellentesque
                      consectetur id purus ut tincidunt. Vestibulum turpis nisi,
                      commodo quis ante a, commodo accumsan magna. Proin quis
                      felis quis elit egestas molestie.
                    </p>

                    <blockquote>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Phasellus finibus
                        vestibulum eleifend. Suspendisse potenti.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </article>

              {/* Post Navigation */}
              <nav className="navigation post-navigation" aria-label="Posts">
                <h2 className="screen-reader-text">Post navigation</h2>
                <div className="nav-links">
                  <div className="nav-previous">
                    <a href="#">Preview Posts</a>
                  </div>
                  <div className="nav-next">
                    <a href="#">Next Post</a>
                  </div>
                </div>
              </nav>

              {/* Comments Area */}
              <div id="comments" className="comments-area comments mt-4">
                <div id="respond" className="comment-respond">
                  <h3 className="comment-reply-title">Write your comment</h3>

                  <form className="comment-form">
                    <div className="row g-lg-4 g-3">
                      <div className="col-lg-6">
                        <div className="comment-grp">
                          <input
                            type="text"
                            className="form-control"
                            name="author"
                            placeholder="Your Name *"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="comment-grp">
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Your Email *"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="comment-grp">
                          <input
                            type="text"
                            className="form-control"
                            name="url"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="comment-form-cookies-consent">
                      <input
                        id="wp-comment-cookies-consent"
                        name="wp-comment-cookies-consent"
                        type="checkbox"
                        value="yes"
                      />
                      <label htmlFor="wp-comment-cookies-consent">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p>

                    <div className="col-lg-12 mb-xl-3">
                      <div className="comment-grp text-aras position-relative">
                        <textarea
                          className="comment_field form-control"
                          name="comment"
                          rows="5"
                          placeholder="Write Your Comment Here"
                        ></textarea>
                      </div>
                    </div>

                    <p className="form-submit">
                      <input
                        name="submit"
                        type="submit"
                        className="submit"
                        value="Post Comment"
                        id="submit"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-lg-4 col-12 sidebar-area mt-5 mt-lg-0">
              <aside className="widget-area">
                {/* Search */}
                <section className="widget widget_search">
                  <div className="search-form">
                    <form>
                      <input
                        type="text"
                        className="search-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="search-btn">
                        <i className="ti-search"></i>
                      </button>
                    </form>
                  </div>
                </section>

                {/* Categories */}
                <section className="widget widget_categories">
                  <h3 className="widget-title">Categories</h3>
                  <ul>
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">WordPress</a>
                    </li>
                  </ul>
                </section>

                {/* Recent Posts */}
                <section className="widget widget_recent_entries">
                  <h3 className="widget-title">Recent Posts</h3>
                  <ul>
                    <li>
                      <a href="#">Leverage agile frameworks to provide</a>
                    </li>
                    <li>
                      <a href="#">
                        Student Learning Through an Online Computer
                      </a>
                    </li>
                    <li>
                      <a href="#">Online Learning Program for Students</a>
                    </li>
                  </ul>
                </section>

                {/* Tags */}
                <section className="widget widget_tag_cloud">
                  <h3 className="widget-title">Tags</h3>
                  <div className="tagcloud">
                    <a href="#">computer</a>
                    <a href="#">design</a>
                    <a href="#">learning</a>
                    <a href="#">program</a>
                    <a href="#">software</a>
                    <a href="#">student</a>
                    <a href="#">wordpress</a>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

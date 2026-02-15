import Banner from "@/components/shared/Banner";

export default function InstructorRegistrationPage() {
  return (
    <section>
      <Banner />
      <section className="blog-details section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <article
                id="post-9"
                className="post-9 page type-page status-publish hentry"
              >
                <div
                  className="blog_item wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="no_thumb">
                    <div className="entry-content">
                      <div id="tutor-registration-wrap">
                        <form
                          method="post"
                          encType="multipart/form-data"
                          id="tutor-registration-form"
                        >
                          <input
                            type="hidden"
                            id="_tutor_nonce"
                            name="_tutor_nonce"
                            value="d90def65df"
                          />
                          <input
                            type="hidden"
                            name="_wp_http_referer"
                            value="/edulink/instructor-registration/"
                          />
                          <input
                            type="hidden"
                            value="tutor_register_instructor"
                            name="tutor_action"
                          />

                          <div className="tutor-form-row">
                            <div className="tutor-form-col-6">
                              <div className="tutor-form-group">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  name="first_name"
                                  defaultValue=""
                                  placeholder="First Name"
                                  required
                                  autoComplete="given-name"
                                />
                              </div>
                            </div>

                            <div className="tutor-form-col-6">
                              <div className="tutor-form-group">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  name="last_name"
                                  defaultValue=""
                                  placeholder="Last Name"
                                  required
                                  autoComplete="family-name"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="tutor-form-row">
                            <div className="tutor-form-col-6">
                              <div className="tutor-form-group">
                                <label>User Name</label>
                                <input
                                  type="text"
                                  name="user_login"
                                  className="tutor_user_name"
                                  defaultValue=""
                                  placeholder="User Name"
                                  required
                                  autoComplete="username"
                                />
                              </div>
                            </div>

                            <div className="tutor-form-col-6">
                              <div className="tutor-form-group">
                                <label>E-Mail</label>
                                <input
                                  type="text"
                                  name="email"
                                  defaultValue=""
                                  placeholder="E-Mail"
                                  required
                                  autoComplete="email"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="tutor-form-row">
                            <div className="tutor-form-col-6">
                              <div className="tutor-form-group">
                                <div className="tutor-password-strength-checker">
                                  <div className="tutor-password-field">
                                    <label>Password</label>
                                    <input
                                      className="password-checker"
                                      id="tutor-new-password"
                                      type="password"
                                      name="password"
                                      defaultValue=""
                                      placeholder="Password"
                                      required
                                      autoComplete="new-password"
                                    />
                                    <span className="show-hide-btn"></span>
                                  </div>

                                  <div className="tutor-password-strength-hint">
                                    <div className="indicator">
                                      <span className="weak"></span>
                                      <span className="medium"></span>
                                      <span className="strong"></span>
                                    </div>
                                    <div className="text tutor-fs-7 tutor-color-muted"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="tutor-form-col-6">
                              <div className="tutor-form-group">
                                <label>Password confirmation</label>
                                <div className="tutor-form-wrap">
                                  <span
                                    className="tutor-validation-icon tutor-icon-mark tutor-color-success tutor-form-icon tutor-form-icon-reverse"
                                    style={{ display: "none" }}
                                  ></span>
                                  <input
                                    type="password"
                                    name="password_confirmation"
                                    defaultValue=""
                                    placeholder="Password Confirmation"
                                    required
                                    autoComplete="new-password"
                                    style={{ marginBottom: 0 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="tutor-form-row">
                            <div className="tutor-form-col-12">
                              <div className="tutor-form-group"></div>
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              name="tutor_register_instructor_btn"
                              value="register"
                              className="tutor-btn tutor-btn-primary tutor-btn-block"
                            >
                              Register as instructor
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

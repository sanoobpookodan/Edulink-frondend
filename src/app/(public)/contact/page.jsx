export const metadata = {
  title: "Contact",
};
import Banner from "@/components/shared/Banner";

export default function ContactPage() {
  return (
    <div>
      <Banner />
      <div className="page-builder-template">
        <div className="elementor elementor-1074">
          <div className="elementor-element elementor-element-8a2ddfb e-flex e-con-boxed e-con e-parent e-lazyloaded">
            <div className="e-con-inner">
              {/* Contact Info Section */}
              <div
                className="elementor-element elementor-element-e229234 e-con-full e-flex e-con e-child"
                data-id="e229234"
              >
                {/* Address */}
                <div className="elementor-element elementor-element-0ace5a1 elementor-widget elementor-widget-edulink-contact-info">
                  <div className="elementor-widget-container">
                    <div className="contact-item">
                      <div className="cont_icon">
                        <i className="ph ph-map-pin"></i>
                      </div>
                      <div className="cont_content">
                        <h4>Address</h4>
                        <p>
                          Studio 89D, Riley Ford, North Michael Harber <br />
                          District, CFTE A65
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="elementor-element elementor-element-1480938 elementor-widget elementor-widget-edulink-contact-info">
                  <div className="elementor-widget-container">
                    <div className="contact-item">
                      <div className="cont_icon">
                        <i className="ph ph-envelope-simple"></i>
                      </div>
                      <div className="cont_content">
                        <h4>Email Address</h4>
                        <p>
                          <a href="mailto:support@example.com">
                            Support@example.com
                          </a>
                          <br />
                          <a href="mailto:support@example.com">
                            Info@example.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="elementor-element elementor-element-564c797 elementor-widget elementor-widget-edulink-contact-info">
                  <div className="elementor-widget-container">
                    <div className="contact-item">
                      <div className="cont_icon">
                        <i className="ph ph-phone-call"></i>
                      </div>
                      <div className="cont_content">
                        <h4>Phone Number</h4>
                        <p>
                          <a href="tel:+9902145698745">+9902145698745</a>
                          <br />
                          <a href="tel:+9902148746845">+9902148746845</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div
                className="elementor-element elementor-element-b8a3612 e-con-full e-flex e-con e-child"
                data-id="b8a3612"
              >
                <div className="elementor-element elementor-element-4fdad04 elementor-widget elementor-widget-edulink-contact-form">
                  <div className="elementor-widget-container">
                    <div className="contact-form">
                      <div
                        className="cf_title wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <h4>Get in Touch</h4>
                        <p>
                          Feel free to contact with us, we don’t spam your email
                        </p>
                      </div>

                      <div
                        id="contact-form"
                        className="wow fadeInUp"
                        style={{
                          visibility: "visible",
                          animationName: "fadeInUp",
                        }}
                      >
                        <div
                          className="wpcf7 js"
                          id="wpcf7-f1097-p1074-o1"
                          lang="en-US"
                          dir="ltr"
                        >
                          <div className="screen-reader-response">
                            <p
                              role="status"
                              aria-live="polite"
                              aria-atomic="true"
                            ></p>
                            <ul></ul>
                          </div>

                          <form
                            action="/edulink/contact/#wpcf7-f1097-p1074-o1"
                            method="post"
                            className="wpcf7-form init"
                            aria-label="Contact form"
                            noValidate
                            data-status="init"
                          >
                            <fieldset className="hidden-fields-container">
                              <input type="hidden" name="_wpcf7" value="1097" />
                              <input
                                type="hidden"
                                name="_wpcf7_version"
                                value="6.1.4"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_locale"
                                value="en_US"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_unit_tag"
                                value="wpcf7-f1097-p1074-o1"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_container_post"
                                value="1074"
                              />
                              <input
                                type="hidden"
                                name="_wpcf7_posted_data_hash"
                                value=""
                              />
                            </fieldset>

                            <div className="row g-4">
                              <div className="col-md-6">
                                <p>
                                  <input type="text" placeholder="Full Name*" />
                                </p>
                              </div>
                              <div className="col-md-6">
                                <p>
                                  <input
                                    type="email"
                                    placeholder="Email Address*"
                                  />
                                </p>
                              </div>
                              <div className="col-md-12">
                                <p>
                                  <input type="text" placeholder="Subject *" />
                                </p>
                              </div>
                              <div className="col-12">
                                <p>
                                  <textarea placeholder="Your Message*"></textarea>
                                </p>
                              </div>
                            </div>

                            <p>
                              <button type="submit" className="fbtn">
                                Send Message{" "}
                                <i className="ph ph-arrow-right"></i>
                              </button>
                            </p>

                            <div
                              className="wpcf7-response-output"
                              aria-hidden="true"
                            ></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

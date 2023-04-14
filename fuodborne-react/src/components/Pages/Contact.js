import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div class="contact-page">
      <header
        id="page-top"
        class="blog-banner"
        style={{
          backgroundImage:
            "url('https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/header.jpg')",
        }}
      >
        <div class="container" id="blog">
          <div class="row blog-header text-center">
            <div class="col-sm-12">
              <h3>Contact Us</h3>
              <h4>
                <Link to="/"> Home </Link> &gt; Contact Us
              </h4>
            </div>
          </div>
        </div>
      </header>
      <section class="contact-section">
        <div class="container">
          <div class="base-header">
            <small>Get in touch</small>
            <h3>Send Us Message</h3>
          </div>
          <div class="contact_wrp">
            <div class="row">
              <div class="col-md-8 col-sm-12 inner-contact">
                <div class="contact-form">
                  <div id="message"></div>
                  <form method="post" name="contact-form" id="contact-form">
                    <div class="row">
                      <div class="col-lg-6 col-sm-12">
                        <input
                          type="text"
                          id="name"
                          class="con-field form-control"
                          placeholder="Name"
                          value=""
                        />
                        <span id="err"></span>
                      </div>
                      <div class="col-lg-6 col-sm-12">
                        <input
                          type="text"
                          class="con-field form-control"
                          id="exampleInputEmail1"
                          placeholder="Email"
                          value=""
                        />
                        <span id="err"></span>
                      </div>
                      <div class="col-lg-12 col-sm-12">
                        <input
                          type="text"
                          id="subject"
                          class="form-control con-field"
                          placeholder="Your Subject.."
                          value=""
                        />
                        <span id="err"></span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 col-sm-12">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="6"
                          class="form-control con-field"
                          placeholder="Your Message"
                        ></textarea>
                        <span id="err"></span>
                        <div class="submit-area">
                          <input
                            type="button"
                            id="submit"
                            name="send"
                            class="submit-contact submitBnt"
                            value="Send Message"
                          />
                          <div id="simple-msg"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="contact_pg_address">
                  <h3>
                    Hello there <br />
                    got a project?
                  </h3>
                  <div class="single_con_add">
                    <a href="#/">
                      <i class="icon-glyph-226"></i>
                    </a>
                    <p>
                      <span>Company Address :</span>
                    </p>
                    <p>
                      <span>3567 New Alaska, us</span>
                    </p>
                  </div>
                  <div class="single_con_add">
                    <a href="#/">
                      <i class="icon-glyph-334"></i>
                    </a>
                    <p>
                      <span>Email Address :</span>
                    </p>
                    <p>
                      <span>example@email .com</span>
                    </p>
                  </div>
                  <div class="single_con_add">
                    <a href="#/">
                      <i class="icon-glyph-33"></i>
                    </a>
                    <p>
                      <span>Contact Us :</span>
                    </p>
                    <p>
                      <span>+77-00-222-1111</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

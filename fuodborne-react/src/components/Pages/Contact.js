import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page">
      <header
        id="page-top"
        className="blog-banner"
        style={{
          backgroundImage:
            "url('https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/header.jpg')",
        }}
      >
        <div className="container" id="blog">
          <div className="row blog-header text-center">
            <div className="col-sm-12">
              <h3>Contact Us</h3>
              <h4>
                <Link to="/"> Home </Link> &gt; Contact Us
              </h4>
            </div>
          </div>
        </div>
      </header>
      <section className="contact-section">
        <div className="container">
          <div className="base-header">
            <small>Get in touch</small>
            <h3>Send Us Message</h3>
          </div>
          <div className="contact_wrp">
            <div className="row">
              <div className="col-md-8 col-sm-12 inner-contact">
                <div className="contact-form">
                  <div id="message"></div>
                  <form method="post" name="contact-form" id="contact-form">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <input
                          type="text"
                          id="name"
                          className="con-field form-control"
                          placeholder="Name"
                          value=""
                        />
                        <span id="err"></span>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <input
                          type="text"
                          className="con-field form-control"
                          id="exampleInputEmail1"
                          placeholder="Email"
                          value=""
                        />
                        <span id="err"></span>
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <input
                          type="text"
                          id="subject"
                          className="form-control con-field"
                          placeholder="Your Subject.."
                          value=""
                        />
                        <span id="err"></span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-sm-12">
                        <textarea
                          name="comments"
                          id="comments"
                          rows="6"
                          className="form-control con-field"
                          placeholder="Your Message"
                        ></textarea>
                        <span id="err"></span>
                        <div className="submit-area">
                          <input
                            type="button"
                            id="submit"
                            name="send"
                            className="submit-contact submitBnt"
                            value="Send Message"
                          />
                          <div id="simple-msg"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="contact_pg_address">
                  <h3>
                    Hello there <br />
                    got a project?
                  </h3>
                  <div className="single_con_add">
                    <a href="#/">
                      <i className="icon-glyph-226"></i>
                    </a>
                    <p>
                      <span>Company Address :</span>
                    </p>
                    <p>
                      <span>3567 New Alaska, us</span>
                    </p>
                  </div>
                  <div className="single_con_add">
                    <a href="#/">
                      <i className="icon-glyph-334"></i>
                    </a>
                    <p>
                      <span>Email Address :</span>
                    </p>
                    <p>
                      <span>example@email .com</span>
                    </p>
                  </div>
                  <div className="single_con_add">
                    <a href="#/">
                      <i className="icon-glyph-33"></i>
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

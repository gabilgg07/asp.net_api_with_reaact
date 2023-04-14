import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <div className="widget">
              <div className="footer_logo">
                <img
                  className="img-responsive"
                  src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/footer_logo.png"
                  alt=""
                />
              </div>
              <div className="footer_p">
                <p className="footer_para">
                  Loren ipsum dolor conse ctetur at adipis cing elit sed do eiu
                  smod of tempor inci didunt know youlab a et dolore magna
                  aliqua{" "}
                </p>
              </div>
              <div className="footer_socil">
                <ul className="list-icons link-list footer_soc">
                  <li>
                    <a
                      href="//facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="//pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="widget quick_lnk">
              <h5>Quick Link</h5>
              <ul>
                <li>
                  <a href="/blackgallery/FuodBorne-react/about">
                    Help and Ordering
                  </a>
                </li>
                <li>
                  <a href="/blackgallery/FuodBorne-react/services">
                    Return &amp; Cancellation
                  </a>
                </li>
                <li>
                  <a href="/blackgallery/FuodBorne-react/single-services">
                    Online Organic Service
                  </a>
                </li>
                <li>
                  <a href="/blackgallery/FuodBorne-react/team">
                    Delevery Schedule
                  </a>
                </li>
                <li>
                  <a href="/blackgallery/FuodBorne-react/team">
                    Online Organic Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="widget">
              <h5>Latest Articles</h5>
              <ul className="footer_recent_blog">
                <li>
                  <img
                    className="img-responsive"
                    src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/blog1.jpg"
                    alt=""
                  />
                  <span className="post_cont">
                    <span className="post-date">
                      <i className="fa fa-calendar"></i>March 14, 2019
                    </span>
                    <a href="/blackgallery/FuodBorne-react/single-blog">
                      <span>How to Eat Organic Foods</span>
                    </a>
                  </span>
                </li>
                <li>
                  <img
                    className="img-responsive"
                    src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/blog2.jpg"
                    alt=""
                  />
                  <span className="post_cont">
                    <span className="post-date">
                      <i className="fa fa-calendar"></i>March 14, 2019
                    </span>
                    <a href="/blackgallery/FuodBorne-react/single-blog">
                      <span>How to Eat Organic Foods</span>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="widget">
              <h5>Newsletter</h5>
              <div className="news_letter_wrp">
                <p>
                  Subscribe our newsletter to get more update &amp; join to
                  fuodborne
                </p>
                <form className="mailchimp">
                  <input
                    className="email_field"
                    type="text"
                    name="email"
                    id="subscriber-email"
                    placeholder="Email Address"
                  />
                  <button
                    className="submit-contact"
                    type="submit"
                    id="subscribe-button"
                  >
                    Subscribe
                  </button>
                  <span className="subscription-success"> </span>
                  <span className="subscription-error"> </span>
                  <label
                    className="subscription-label"
                    htmlFor="subscriber-email"
                  ></label>
                </form>
              </div>
            </div>
          </div>
          <button className="scrollup show">
            <span className="icon-glyph-203"></span>
          </button>
        </div>
      </div>
      <div className="subfooter">
        <p>
          2020 © Copyright{" "}
          <a href="/blackgallery/FuodBorne-react/">Fuodborne.</a> All rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

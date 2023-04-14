import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header_topbar">
        <div className="container">
          <div className="header_top_right list-unstyled">
            <ul>
              <li>
                <i className="fa fa-phone"></i>+234 567 234 875
              </li>
              <li>
                <i className="fa fa-globe"></i>1st Avenue, Boston
              </li>
            </ul>
          </div>
          <div className="header_top_left">
            <ul className="header_socil list-inline pull-left">
              <li>
                <i className="fa fa-envelope"></i>info@example.com
              </li>
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
          <a className="more-link" href="/blackgallery/FuodBorne-react/contact">
            Get a quote
          </a>
        </div>
      </div>
      <div className="menu_area">
        <div className="navigation">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="meun_wrp">
              <nav
                id="navigation"
                className="navbar navbar-expand-lg navbar-light sticky-top"
              >
                <div className="mr-auto navbar-nav">
                  <ul>
                    <li className="active">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="has-sub">
                      <a href="/blackgallery/FuodBorne-react/#/">Pages</a>
                      <ul>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/gallery">
                            Gallery Page
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/gallery-two">
                            Gallery Two
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/services">
                            Services Page
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/single-services">
                            Services Details
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/about">
                            About Page
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/team">Team</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <a href="/blackgallery/FuodBorne-react/blog">Blog</a>
                      <ul>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/blog">
                            Blog One
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/blog-two">
                            Blog Two
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/single-blog">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <a href="/blackgallery/FuodBorne-react/shop">Shop</a>
                      <ul>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/shop">Shop</a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/single-shop">
                            Shop Details
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/cart">
                            Shop Cart
                          </a>
                        </li>
                        <li>
                          <a href="/blackgallery/FuodBorne-react/checkout">
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="header-btn-wrapper">
              <div className="mobile-button-wrapper d-block d-lg-none text-right">
                <button className="mobile-aside-button">
                  <i className="icon-glyph-233"></i>
                </button>
              </div>
            </div>
            <div className="offcanvasMobileMenu" id="offcanvas-mobile-menu">
              <button
                className="offcanvasMenuClose"
                id="mobile-menu-close-trigger"
              >
                <i className="icon-glyph-146"></i>
              </button>
              <div className="offcanvasWrapper">
                <div className="offcanvasInnerContent">
                  <nav
                    className="offcanvasNavigation"
                    id="offcanvas-navigation"
                  >
                    <ul>
                      <li>
                        <a href="/blackgallery/FuodBorne-react/">Home</a>
                      </li>
                      <li className="menuItemHasChildren">
                        <a href="/blackgallery/FuodBorne-react#/">Pages</a>
                        <span className="menuExpand">
                          <i></i>
                        </span>
                        <ul className="subMenu">
                          <li>
                            {" "}
                            <a href="/blackgallery/FuodBorne-react/gallery">
                              Gallery Page
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a href="/blackgallery/FuodBorne-react/gallery-two">
                              {" "}
                              Gallery Two
                            </a>
                          </li>
                          <li>
                            <a href="/blackgallery/FuodBorne-react/services">
                              Services Page{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/blackgallery/FuodBorne-react/single-services">
                              Services Details
                            </a>
                          </li>
                          <li>
                            <a href="/blackgallery/FuodBorne-react/about">
                              About Page
                            </a>
                          </li>
                          <li>
                            <a href="/blackgallery/FuodBorne-react/team">
                              Team
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menuItemHasChildren">
                        <a href="/blackgallery/FuodBorne-react/blog">Blog</a>
                        <span className="menuExpand">
                          <i></i>
                        </span>
                        <ul className="subMenu">
                          <li>
                            <a href="/blackgallery/FuodBorne-react/blog">
                              Blog One
                            </a>
                          </li>
                          <li>
                            <a href="/blackgallery/FuodBorne-react/blog-two">
                              Blog Two
                            </a>
                          </li>
                          <li>
                            <a href="/blackgallery/FuodBorne-react/single-blog">
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menuItemHasChildren">
                        <a href="/blackgallery/FuodBorne-react/shop">Shop</a>
                        <span className="menuExpand">
                          <i></i>
                        </span>
                        <ul className="subMenu">
                          <li>
                            <a href="/blackgallery/FuodBorne-react/shop">
                              Shop
                            </a>
                          </li>
                          <li>
                            <a href="/blackgallery/FuodBorne-react/single-shop">
                              Shop Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/blackgallery/FuodBorne-react/contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="offcanvasMobileSearchArea">
                    <form action="#">
                      <input type="search" placeholder="Search ..." />
                      <button type="submit"></button>
                    </form>
                  </div>
                  <div className="header_top_right list-unstyled">
                    <ul>
                      <li>
                        <i className="fa fa-phone"></i> +234 567 234 875
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i> info@yourdomain.com
                      </li>
                      <li>
                        <i className="fa fa-globe"></i> 1st Avenue, Boston
                      </li>
                    </ul>
                  </div>
                  <div className="header_top_left">
                    <ul className="header_socil list-inline">
                      <li>
                        {/* <a
                          className="fa fa-facebook"
                          href="/blackgallery/FuodBorne-react/#/"
                        ></a> */}
                      </li>
                      <li>
                        {/* <a
                          className="fa fa-twitter"
                          href="/blackgallery/FuodBorne-react/#/"
                        ></a> */}
                      </li>
                      <li>
                        {/* <a
                          className="fa fa-linkedin"
                          href="/blackgallery/FuodBorne-react/#/"
                        ></a> */}
                      </li>
                      <li>
                        {/* <a
                          className="fa fa-google-plus"
                          href="/blackgallery/FuodBorne-react/#/"
                        ></a> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_cart">
              <ul>
                <li className="header_search">
                  <a
                    className="cart-toggler search_icon"
                    href="/blackgallery/FuodBorne-react/"
                  >
                    <i className="icon-glyph-16"></i>
                  </a>
                  <div className="search_icon_inr">
                    <form action="#" method="POST">
                      <div>
                        <input placeholder="Search" type="text" />
                        <button className="btn-search" type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="header_cart_icon">
                  <a href="/blackgallery/FuodBorne-react/cart">
                    <i className="icon-glyph-13"></i>
                    <span className="number_cart">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

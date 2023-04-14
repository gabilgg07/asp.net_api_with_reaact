import React from "react";

const Services = () => {
  return (
    <>
      <section className="service-section">
        <div className="animate_icon">
          <div className="animate_item animate_item1 bounce_animate">
            <img
              src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/animate_icon1.png"
              alt=""
            />
          </div>
          <div className="animate_item animate_item2 bounce_animate">
            <img
              src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/animate_icon2.png"
              alt=""
            />
          </div>
          <div className="animate_item animate_item3 bounce_animate">
            <img
              src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/animate_icon3.png"
              alt=""
            />
          </div>
          <div className="animate_item animate_item4 bounce_animate">
            <img
              src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/animate_icon4.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="base-header">
            <small>What We Offer</small>
            <h3>Service we offer</h3>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="service-item">
                <div className="img_serv">
                  <a href="/blackgallery/FuodBorne-react/services">
                    <img
                      src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/service_1.jpg"
                      alt="service"
                    />
                  </a>
                </div>
                <div className="service_text">
                  <a href="/blackgallery/FuodBorne-react/services">
                    {" "}
                    <h4>Fresh Fruits</h4>
                  </a>
                  <p>
                    Organically grown crops tend use natural fertilizers like
                    manure to improve growth to plant . Animals raised
                    organically are
                  </p>
                </div>
                <a
                  className="serv_link"
                  href="/blackgallery/FuodBorne-react/services"
                >
                  <i className="icon-glyph-40"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="service-item">
                <div className="img_serv">
                  <a href="/blackgallery/FuodBorne-react/services">
                    <img
                      src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/service_2.jpg"
                      alt="service"
                    />
                  </a>
                </div>
                <div className="service_text">
                  <a href="/blackgallery/FuodBorne-react/services">
                    {" "}
                    <h4>Fresh Vegetable</h4>
                  </a>
                  <p>
                    Organically grown crops tend use natural fertilizers like
                    manure to improve growth to plant . Animals raised
                    organically are
                  </p>
                </div>
                <a
                  className="serv_link"
                  href="/blackgallery/FuodBorne-react/services"
                >
                  <i className="icon-glyph-40"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="service-item">
                <div className="img_serv">
                  <a href="/blackgallery/FuodBorne-react/services">
                    <img
                      src="https://tidytheme.com/blackgallery/FuodBorne-react/assets/images/service_3.jpg"
                      alt="service"
                    />
                  </a>
                </div>
                <div className="service_text">
                  <a href="/blackgallery/FuodBorne-react/services">
                    {" "}
                    <h4>Natural Wheats</h4>
                  </a>
                  <p>
                    Organically grown crops tend use natural fertilizers like
                    manure to improve growth to plant . Animals raised
                    organically are
                  </p>
                </div>
                <a
                  className="serv_link"
                  href="/blackgallery/FuodBorne-react/services"
                >
                  <i className="icon-glyph-40"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

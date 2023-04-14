import React from "react";

const Service = () => {
  return (
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
            Organically grown crops tend use natural fertilizers like manure to
            improve growth to plant . Animals raised organically are
          </p>
        </div>
        <a className="serv_link" href="/blackgallery/FuodBorne-react/services">
          <i className="icon-glyph-40"></i>
        </a>
      </div>
    </div>
  );
};

export default Service;

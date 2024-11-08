import React from 'react';
function Footer() {
  return (
    <div className="container px-4 px-sm-6">
      <div className="position-relative px-5 py-5 py-md-8 rounded-5 overflow-hidden">
        <div className="position-absolute top-0 start-50 translate-middle-x pointer-events-none z-index-n10 w-25">
          <div className="position-absolute inset-0 bg-danger rounded-circle opacity-70" style={{ filter: 'blur(120px)' }}></div>
          <div className="position-absolute bottom-0 translate-middle-y left-0 opacity-50" style={{ filter: 'blur(2px)' }}></div>
          <div className="position-absolute w-25 h-25" style={{ filter: 'blur(40px)' }}></div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <div className="d-inline-flex font-weight-bold gradient-text pb-3 mt-5" >
              Unlocking innovations through Code Excellence
            </div>
          </div>
          <h2 className="display-4 text-transparent text-slate-400 " >
            Take control of your business
          </h2>
          <p className="lead text-slate-400 w-80 small text-justify text-center mb-8 ">
            Discover the untapped possibilities for your business with Jirtuu Software Labs. Our primary goal is to deliver state-of-the-art software solutions
            that empower you to seize unprecedented control over your business operations.
          </p>
          <div>
          <a
           href="#"
           className="d-inline-flex align-items-center justify-content-center h-10 px-4 py-2 rounded-pill border border-white text-dark bg-white hover:bg-light transition duration-150 ease-in-out group text-decoration-none"
            >
          Get Started
          <span className="ms-1 text-danger group-hover">→</span>
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

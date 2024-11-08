import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Feutures() {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="rounded-3 p-4 h-100 text-center">
            <h3 className="h5 text-light mb-3">
              <i className="bi bi-award-fill me-2"></i>Top Notch Quality
            </h3>
            <p className="text-slate-400 small text-justify">
              Top-notch from start to finish: thorough project reviews, bespoke code, transparent communication, and cutting-edge tools and practices.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="rounded-3 p-4 h-100 text-center">
            <h3 className="h5 text-light mb-3">
              <i className="bi bi-lightning-fill me-2"></i>Fast Turnarounds
            </h3>
            <p className="text-slate-400 text-justify">
              Time frames that don't sacrifice the quality a project deserves. We consistently maintain high quality while meeting tight deadlines, thanks to our skilled team and efficient processes.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="rounded-3 p-4 h-100 text-center">
            <h3 className="h5 text-light mb-3">
              <i className="bi bi-people-fill me-2"></i>Diverse Expertise
            </h3>
            <p className="text-slate-400 text-justify">
              Instead of one person with average knowledge in multiple areas, we prefer experts in each development field which enhances creativity, efficiency, saves time and costs, and delivers better results.
            </p>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <div className="col">
          <div className="rounded-3 p-4 h-100 text-center">
            <h3 className="h5 text-light mb-3">
              <i className="bi bi-currency-dollar me-2"></i>Reasonable Pricing
            </h3>
            <p className="text-slate-400 text-justify">
              A simple, fair, and logical pricing model that just feels right when put next to the quality and turnaround time you get. We aim to provide the perfect balance between price and speed that fits best your specific needs.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="rounded-3 p-4 h-100 text-center">
            <h3 className="h5 text-light mb-3">
              <i className="bi bi-shield-check me-2"></i>Reliability & Flexibility
            </h3>
            <p className="text-slate-400 text-justify">
              Your convenience - placed first. Now, you can take complete control over your projects with the flexibility to choose the tools and processes that best fit your business needs.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="rounded-3 p-4 h-100 text-center">
            <h3 className="h5 text-light mb-3">
              <i className="bi bi-life-preserver me-2"></i>Post-Delivery Support
            </h3>
            <p className="text-slate-400 text-justify">
              We're committed to providing our clients with the best possible post-delivery support. You have everything you need to keep a software running smoothly and efficiently, with fast and reliable assistance whenever you need it - even years after a project is completed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feutures;

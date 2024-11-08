import React, { useState } from 'react';
import Testimonial from './Testimonial';
import 'bootstrap/dist/css/bootstrap.min.css';
function Service() {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [gradientX, setGradientX] = useState(0);
  const [gradientY, setGradientY] = useState(0);
  const sections = [
    { title: "White-Label Web Development", description: "A dedicated service that allows agencies to outsource their web development projects and expand their business offerings with a solution fully customizable according to their needs and ready to meet their goals." },
    { title: "CMS Integrations", description: "From static site generators and website builders to advanced CMS solutions, we have experience with platforms that suit every project's requirements: WordPress, HubSpot, Squarespace, Hugo, Webflow, and more." },
    { title: "Front-end Coding", description: "The perfect solution for teams focused on back-end programming looking for experts in writing pixel-perfect and hand-crafted code built according to their specifics. Increase the code quality and speed up the dev process." },
    { title: "Web Apps Development", description: "Fully custom web applications development using a tech stack that meets the project needs. We specialize in building PHP-based applications with React and Vue." },
    { title: "E-commerce Websites", description: "From one-page stores to fully custom eCommerce solutions, we have experience in various platforms like WooCommerce, Shopify, and BigCommerce to develop a store that fits any business specifics." },
    { title: "Many More", description: "Coding email templates, marketing landing pages, alternative CMS integrations, headless implementations, and more. End-to-end web development solutions at your fingertips." },
  ];
  const showPrevious = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };
  const showNext = () => {
    if (startIndex < sections.length - 3) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleMouseMove = (e, index) => {
    if (hoveredIndex === index) {
      const { offsetX, offsetY, target } = e.nativeEvent;
      const { offsetWidth, offsetHeight } = target;
      setGradientX((offsetX / offsetWidth) * 100);
      setGradientY((offsetY / offsetHeight) * 100);
    }
  };
  return (
    <div className=" text-light">
      <div className="container py-5 text-center">
        <div className="pb-3">
          <span className="h5 text-danger">
            Access a range of services.
          </span>
        </div>
        <h2 className="display-5 fw-bold text-light">
          What We Do at Jirtuu Software Labs
        </h2>
        <p className="text-slate-400">
          Save time and resources. Get experts onboard quickly. Agencies and businesses use our web development services to
          convert their great ideas and designs into functional web products.
        </p>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {sections.slice(startIndex, startIndex + 3).map((section, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setGradientX(0);
                setGradientY(0);
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className="col-md-4"
            >
              <div className="card text-center bg-transparent border-0 h-100 p-3">
                <div
                  className={`card-body rounded-3 ${hoveredIndex === index ? 'border-danger' : 'border-secondary'} border`}
                  style={{
                    background: hoveredIndex === index
                      ? `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0))`
                      : 'transparent'
                  }}
                >
                  <h3 className="h5 text-light">{section.title}</h3>
                  <p className="text-slate-400">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button
            onClick={showPrevious}
            disabled={startIndex === 0}
            className={`btn btn-link ${startIndex === 0 ? 'text-slate-400' : 'text-danger'}`}
          >
            &larr;
          </button>
          <button
            onClick={showNext}
            disabled={startIndex >= sections.length - 3}
            className={`btn btn-link ${startIndex >= sections.length - 3 ? 'text-slate-400' : 'text-danger'}`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;

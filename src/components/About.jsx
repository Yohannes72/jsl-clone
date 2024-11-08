import React, { useState, useEffect } from 'react';
import whyus from "./images/feature-image-01.svg";
import circle1 from "./images/feature-image-02.svg";
import circle2 from "./images/feature-image-03.svg";
function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [gradientX, setGradientX] = useState(0);
  const [gradientY, setGradientY] = useState(0);
  const handleMouseMove = (e, index) => {
    if (hoveredIndex === index) {
      const { offsetX, offsetY, target } = e.nativeEvent;
      const { offsetWidth, offsetHeight } = target;
      setGradientX((offsetX / offsetWidth) * 100);
      setGradientY((offsetY / offsetHeight) * 100);
    }
  };
  const sections = [
    {
      title: "White-Label Web Development",
      description: "A reliable coding partner that delivers solutions to your business challenges and stays by your side in the long term."
    },
    {
      title: "Custom Mobile App Development",
      description: "Innovative mobile solutions tailored to your business needs, delivering high performance and user-friendly interfaces to engage and retain your users effectively."
    },
  ];

  useEffect(() => {
    const gradientBox = document.querySelector('.gradient-box');
    const handleMouseMoveEffect = (event) => {
      const { left, top } = gradientBox.getBoundingClientRect();
      const mouseX = event.clientX - left;
      const mouseY = event.clientY - top;
      setGradientX((mouseX / gradientBox.offsetWidth) * 100);
      setGradientY((mouseY / gradientBox.offsetHeight) * 100);
    };

    gradientBox.addEventListener('mousemove', handleMouseMoveEffect);
    return () => {
      gradientBox.removeEventListener('mousemove', handleMouseMoveEffect);
    };
  }, []);

  return (
    <>
      <div className="container text-center py-5 ">
        <h1
          className="display-3 text-center pb-4"
          style={{
            background: "linear-gradient(to right, #E5E5E5, #BEBEBE, #E5E5E5)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Faster. Smarter.
        </h1>
        <p className="text-slate-400 small text-justify text-center">
          Our software company stands out through its unmatched proficiency in delivering swift, intelligent solutions and consistently exceeding expectations.
        </p>
      </div>

      <div className="container my-5">
        <div
          className="gradient-box rounded-3 p-4 mx-auto"
          style={{ maxWidth: '1010px' }}
          onMouseMove={(e) => handleMouseMove(e, 0)}
        >
          <div className="position-relative rounded border border-light p-4 overflow-hidden">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <h3 className="h3 text-white pb-2">So, why us?</h3>
                <p className="text-slate-400">
                  High quality every step of the way - detailed project reviews to guarantee a great understanding of your project needs, handcrafted code that speaks for itself, direct and open communication, and use of the latest best tools and practices. And that's just a part of it all.
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={whyus} alt="Why Us" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4 ms-5" style={{ maxWidth: '999px' }}>
          {sections.map((section, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setGradientX(0);
                setGradientY(0);
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className="col-md-6"
            >
              <div
                className="bg-slate-900 rounded-3xl p-4 text-center rounded border border-light border border-slate-600 h-100"
                style={{
                  background: hoveredIndex === index
                    ? `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255, 0, 0, 0.6), rgba(255, 0, 0, 0))`
                    : 'transparent',
                }}
              >
                <h3 className="text-white pb-4">{section.title}</h3>
                <p className="text-slate-400 mb-4 px-4">{section.description}</p>
                <img src={index === 0 ? circle1 : circle2} alt={section.title} className="img-fluid max-w-xs" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;

import React, { useEffect, useState } from 'react';
import img1 from "./images/testmonial1.jpg";
import img2 from "./images/testmonilal2.avif";
import img3 from "./images/testmonil3.jpg";
const testimonials = [
  {
    name: 'Travis L.',
    position: 'Software Development Manager at Paradigm',
    image: img1,
    quote: "It was an absolute pleasure to collaborate with Jirtuu Software Labs on the engineering team at Acelab. Their work is of the utmost quality and consistently top-notch. They demonstrate remarkable skill, deep knowledge, and exceptional problem-solving abilities. However, what truly sets them apart is their outstanding teamwork. If you have the opportunity to work with JSL, I highly recommend seizing it immediately. I couldn't recommend them more.",
  },
  {
    name: 'Shelley H.',
    position: 'Quality Assurance Engineer at Acelab',
    image: img2,
    quote: "I've had the privilege of collaborating with Jirtuu Software Labs for several years, and I've witnessed their remarkable growth. They are an exceptionally talented organization, and any company would undoubtedly thrive with them as part of their team. Rest assured, their contributions will leave you highly impressed.",
  },
  {
    name: 'Mattias L.',
    position: 'Product Owner at Kungliga Tekniska högskolan',
    image: img3,
    quote: "Jirtuu Software Labs is a great software company with a strong work ethic. They are excellent team players and always willing to go the extra mile. I'd recommend them easily.",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setDirection(0);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (index) => {
    if (index !== currentIndex) {
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex(index);
        setDirection(0);
      }, 500);
    }
  };

  return (
    <div className="relative p-5 text-white overflow-hidden">
      <div className={`d-flex flex-column align-items-center text-center mb-4 transition-transform duration-500 ease-in-out
        ${direction === 1 ? 'opacity-0 translate-x-100' : 'opacity-100 translate-x-0'}`}>
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="img-fluid rounded-circle mb-3" style={{ width: '60px', height: '60px' }}
        />
        <p className="text-light mx-auto w-75 text-justify" style={{ fontSize: '14px' }}>
          {testimonials[currentIndex].quote}
        </p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column flex-sm-row space-x-3 mb-3">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`d-flex align-items-center justify-content-center btn  rounded-pill px-4 py-2 mb-2 mb-sm-0 transition-all duration-300 ease-in-out
                ${currentIndex === index ? 'border-white text-white' : 'border-secondary opacity-70 text-slate-400'}`}
            >
              <span className="fs-6">{testimonial.name}</span>
              <span className="fs-7 ms-2">{testimonial.position}</span>
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <button
            key={2}
            onClick={() => handleButtonClick(2)}
            className={`d-flex align-items-center justify-content-center btn  rounded-pill px-4 py-2 transition-all duration-300 ease-in-out
              ${currentIndex === 2 ? 'border-white text-white' : 'border-secondary opacity-70 text-slate-400'}`}
          >
            <span className="fs-6">{testimonials[2].name}</span>
            <span className="fs-7 ms-2">{testimonials[2].position}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

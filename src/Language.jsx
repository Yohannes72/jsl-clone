import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import icon1 from "./components/images/jirtu1a.jpeg";
import icon2 from "./components/images/jirtub2.jpeg";
import icon3 from "./components/images/jirtu33.png";
import client1 from "./components/images/client-01.svg";
import client2 from "./components/images/client-02.svg";
import client3 from "./components/images/client-03.svg";
import client4 from "./components/images/client-04.svg";
import client5 from "./components/images/client-05.svg";
import client6 from "./components/images/client-06.svg";
import client7 from "./components/images/client-07.svg";
import client8 from "./components/images/client-08.svg";
import client9 from "./components/images/client-09.svg";
import client10 from "./components/images/client-10.svg";
import client11 from "./components/images/client-11.svg";
import client12 from "./components/images/client-12.svg";
import client13 from "./components/images/client-13.svg";
import client14 from "./components/images/client-14.svg";
import client15 from "./components/images/client-15.svg";
import client16 from "./components/images/client-16.svg";
import client17 from "./components/images/client-09.svg";
import client18 from "./components/images/client-18.svg";
import client19 from "./components/images/client-19.svg";
import client20 from "./components/images/client-20.svg";
import About from './components/About';
import Feutures from './components/Feutures';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function Language() {
  const [loading, setLoading] = useState(true);
  const [currentIcon, setCurrentIcon] = useState(icon1);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const clientImages = [
    client1, client2, client3, client4, client5, client6, client7, client8, client9, client10,
    client11, client12, client13, client14, client15, client16, client17, client18, client19, client20
  ];

  return (
    <>
    <div className="blackbg">
      <div className="container-fluid slideimage">
        {loading ? (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={6}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]} // Make sure to use modules here
            className="mySwiper"
          >
            {clientImages.map((client, index) => (
              <SwiperSlide key={index}>
                <img
                  src={client}
                  width="100"
                  height="auto"
                  alt={`Client ${index + 1}`}
                  className="client-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
    <div className="my3bg">
    <div className="order-2 order-md-1 d-inline-flex font-weight-bold gradient-text pb-3 mt-5">
    <p className="ps-4">Prioritizing client satisfaction above all else.</p>
  </div>
  <div className="d-flex flex-column flex-md-row align-items-center mt-4 mt-md-5">
    <div className="order-2 order-md-1 text-white py-3 mt-3 mt-md-4 text-center text-md-start ms-md-5">
      <h1 className="h3 h-md-4 font-weight-semibold px-4 px-md-5">
        Fast & dependable web<br /> development services
      </h1>
      <p className="px-4 px-md-5 mt-4 small text-md-base lh-lg small text-justify">
        Our goal is to offer you a dependable and user-friendly web <br />
        development service that empowers you to oversee your<br />
        project from inception to completion. Through transparent and<br />
        direct communication, exceptional code craftsmanship, and<br />
        robust post-launch assistance, we aim to assist you in<br />
        expanding your business and reaching your objectives.
      </p>
    </div>
    <div className="order-1 order-md-2 d-flex justify-content-center align-items-center mt-6 mt-md-0 flex-shrink-0 ms-2 ">
  <div className="grid grid-cols-4 grid-rows-4 gap-8 mt-6 md:mt-0 rounded-lg p-4 custom-margin-md"
       style={{ marginLeft: '0', marginBottom: '40px', maxWidth: '500px', marginTop: '30px' }}>
    <div className="border-0 border-top border border-danger h-40 w-40"></div>
    <div className="border-0 border-top border border-danger h-40 w-40"></div>
    <div className="border-0 border-top border border-danger h-40 w-40"></div>
    <div className="border-0 border-right border border-danger h-40 w-40"></div>

    <div className="border-0 border-left border-right border border-danger h-40 w-40"></div>
    <div className="border border-danger h-40 w-40">
      <div className="position-relative d-flex align-items-center justify-content-center p-2 w-24 h-24 border border-transparent rounded-2xl shadow-lg -rotate-14">
        <img src={currentIcon} alt="Current Icon" className="w-24 h-20" />
      </div>
    </div>
    <div className="border border-danger h-40 w-40"></div>
    <div className="border-right-0 border border-danger h-40 w-40"></div>

    <div className="border-0 border-bottom border-left border border-danger h-40 w-40"></div>
    <div className="border-0 border-bottom border border-danger h-40 w-40"></div>
    <div className="border-0 border-bottom border border-danger h-40 w-40"></div>
    <div className="border-0 border-right border-bottom border border-danger h-40 w-40"></div>
  </div>
</div>
  </div>
  <div className="mt-4 ms-4 d-flex flex-column flex-md-column justify-content-center align-items-center align-items-md-start">
  <button
    className={`d-flex align-items-center text-sm font-weight-medium text-white rounded border w-auto px-3 py-2 transition duration-150 ease-in-out ${currentIcon === icon1 ? 'border-danger' : 'border-transparent'}`}
    style={{ backgroundColor: 'transparent', maxWidth: '250px' }}
    onClick={() => setCurrentIcon(icon1)}
  >
    <img width="18" height="18" src={icon1} alt="Unbeatable Quality" />
    <span className="ms-2">Unbeatable Quality</span>
  </button>

  <button
    className={`mt-2 d-flex align-items-center text-sm font-weight-medium text-white rounded border w-auto px-3 py-2 transition duration-150 ease-in-out ${currentIcon === icon2 ? 'border-danger' : 'border-transparent'}`}
    style={{ backgroundColor: 'transparent', maxWidth: '250px' }}
    onClick={() => setCurrentIcon(icon2)}
  >
    <img width="18" height="18" src={icon2} alt="Fast Turnarounds" />
    <span className="ms-2">Fast &nbsp; Turnarounds</span>
  </button>

  <button
    className={`mt-2 d-flex align-items-center text-sm font-weight-medium text-white rounded border w-auto px-3 py-2 transition duration-150 ease-in-out ${currentIcon === icon3 ? 'border-danger' : 'border-transparent'}`}
    style={{ backgroundColor: 'transparent', maxWidth: '250px' }}
    onClick={() => setCurrentIcon(icon3)}
  >
    <img width="18" height="18" src={icon3} alt="Reasonable Pricing" />
    <span className="ms-2">Reasonable Pricing</span>
  </button>
</div>
<About />
<Feutures />
<Service />
<Testimonial />
<Footer />
</div>







    </>
  );
}

export default Language;

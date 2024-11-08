import React from 'react';
import Logo from "./images/logo.svg";
function Home() {
  return (
    <div className="mybg text-light px-4 px-md-5">
      <div className="d-flex align-items-center pt-3 w-100">
        <div className="d-flex align-items-center">
          <img className="rounded-circle bg-secondary" style={{ width: '40px', height: '40px' }} src={Logo} alt="Logo" />
          <div className="d-none d-md-flex align-items-center ms-3 space-x-2">
  <h1 className="name text-white border-top-bottom-dashed text-shadow-white-red mb-0 me-2">JIRTUU</h1>
  <h1 className="names text-danger text-shadow-white-red mb-0 me-2">SOFTWARE</h1>
  <h1 className="names text-black text-shadow-white-red mb-0">LABS</h1>
</div>
        </div>
        <div className="mylink ms-auto me-3">
        <a href="#" className="text-secondary text-decoration-none ps-3">
  Get in touch <span className="text-danger">→</span>
</a>
        </div>
      </div>
<div className="jtalklink text-center" style={{ marginTop: '50px' }}>
  <a href="#" className="position-relative text-decoration-none text-white">
    We recently released jTalk <span className="text-danger">→</span>
    <div className="position-absolute top-0 start-0 end-0 h-100 bg-danger opacity-50 blur"></div>
  </a>
</div>
      <div className="my-content text-center " style={{marginTop:'50px'}}>
        <h1 className="display-4 text-white fw-bold">Incredible Software</h1>
        <h1 className="display-5 text-white fw-bold">Solutions</h1>
      </div>
      <div className="mt-4 px-3 px-md-4 text-center">
        <p
    className="lead mx-auto text-light p-3 rounded"
    style={{
      maxWidth: '768px',
      background: 'linear-gradient(90deg, rgba(207,2,26,0.6) 0%, rgba(207,2,26,0.3) 100%)',
    }}
  >
    <strong>Jirtuu Software Labs</strong> is a dynamic software company specializing in web design, app development, integration solutions, and expert consultation services. We craft cutting-edge digital experiences to help businesses thrive in the ever-evolving digital landscape.
  </p>
</div>
      <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
      <button className="btn btn-light shadow-sm w-auto w-sm-50 w-md-auto">
  Schedule call <span className="text-danger">→</span>
</button>
        <div className="text-center ">
  <a href="#" className="btn text-white px-4 py-2 rounded">
    Leave message
  </a>
</div>
 </div>
    </div>
  );
}

export default Home;

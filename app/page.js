"use client"
import React from 'react';
const PricingComponent = () => {
  const handlePaymentChange=()=>{
    alert("proceed to next step")
  }
  return (
    <div className="container">
      <div className="card card-1">
        <h2>Basic</h2>
        <h3>$0<span>/mo.</span></h3>
        <p>Suitable for beginners</p>
        <ul>
          <li className="aval">HTML</li>
          <li className="aval">CSS Design</li>
          <li className="aval">Bootstrao</li>
          <li className="unaval">Javascript</li>
        </ul>
        <button onClick={handlePaymentChange} className="select">Choose this plan</button>
      </div>

      <div className="card card-2 ">
        <h2>Standard</h2>
        <h3>$49<span>/mo.</span></h3>
        <p>Suitable for freelancers</p>
        <ul>
          <li className="aval">Javascript</li>
          <li className="aval">Jquery</li>
          <li className="aval">React JS</li>
          <li className="unaval">Next JS</li>
        </ul>
        <button onClick={handlePaymentChange} className="select">Choose this plan</button>
      </div>

      <div className="card card-3">
        <h2>Premium</h2>
        <h3>$99<span>/mo.</span></h3>
        <p>Suitable for businesses</p>
        <ul>
          <li className="aval">React JS</li>
          <li className="aval">Next JS</li>
          <li className="aval">Angular</li>
          <li className="aval">Flutter</li>
        </ul>
        <button onClick={handlePaymentChange} className="select">Choose this plan</button>
      </div>

    </div>
  );
};

export default PricingComponent;

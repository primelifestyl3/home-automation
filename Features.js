import React from 'react';
import './Features.css';

const features = [
  {
    title: "Consultation",
    description: "Personalized expert advice tailored to your home automation needs."
  },
  {
    title: "Procurement",
    description: "Streamlined sourcing of premium smart home devices for hassle-free upgrades."
  },
  {
    title: "Installation",
    description: "Seamless setup of smart systems ensuring functionality and convenience."
  }
];

const Features = () => {
  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;

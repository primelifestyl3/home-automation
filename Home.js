import React from 'react';
import Features from '../components/Features';
import './Home.css';

const Home = () => {
  return (
    <main>
      <section className="hero">
        <img src="/images/hero.jpg" alt="Smart Home Automation" />
        <div className="hero-text">
          <h2>Smart Solutions for Your Home</h2>
          <p>Experience the ultimate in comfort, security, and convenience with our home automation systems.</p>
        </div>
      </section>
      <Features />
    </main>
  );
};

export default Home;

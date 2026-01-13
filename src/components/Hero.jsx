import React from 'react';
import "../styles/Hero.css";
import { ArrowRight, Shield, Truck, Star } from 'lucide-react';

const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3N0b3JlfGVufDB8fDB8fHww";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover <span className="highlight">Treasures</span> in Every<br />
            Pre-Loved Page
          </h1>
          <p className="hero-subtitle">
            Thousands of gently used books at unbeatable prices. 
            Quality checked, lovingly restored, and ready for their next chapter.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              Browse Collection
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>

         <div className="hero-image">
          <div className="image-container">
            <img 
              src={HERO_IMAGE_URL} 
              alt="Beautiful collection of used books in a cozy bookstore" 
              className="book-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import '../styles/About.css';
import { BookOpen, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About <span>NextChapter</span></h1>
          <p>
            Giving pre-loved books a second life — one story at a time.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          NextChapter is an online bookstore dedicated to connecting readers
          with quality pre-loved books at affordable prices.  
          We believe every book deserves another chapter and every reader
          deserves access to great stories.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="about-values">
        <div className="value-card">
          <BookOpen size={32} />
          <h3>Our Mission</h3>
          <p>
            To make reading accessible, affordable, and sustainable by
            rehoming books that still have stories to tell.
          </p>
        </div>

        <div className="value-card">
          <Heart size={32} />
          <h3>Our Passion</h3>
          <p>
            We are passionate about books, learning, and building a community
            of readers who love stories as much as we do.
          </p>
        </div>

        <div className="value-card">
          <Star size={32} />
          <h3>Our Promise</h3>
          <p>
            Every book is carefully checked for quality, ensuring a great
            reading experience every time.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section dark">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Affordable pre-loved books</li>
          <li>✔ Quality-checked selections</li>
          <li>✔ Sustainable and eco-friendly</li>
          <li>✔ Passionate reader-first approach</li>
        </ul>
      </section>

    </div>
  );
};

export default About;

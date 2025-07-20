import React from "react";
import { Carousel } from "./Carousel";
import styles from "./CarouselDemo.module.css";
import {
  createGradientSlides,
  createPlaceholderSlides,
} from "./CarouselContent";
import { CarouselSlide } from "./CarouselSlide";
import "./CarouselDemo.module.css";

const CarouselDemo: React.FC = () => {
  // Generate different types of carousel content
  const gradientSlides = createGradientSlides(5, 300);
  const placeholderSlides = createPlaceholderSlides(3, 250);

  // Custom mixed content example
  const mixedSlides = [
    {
      id: "welcome",
      content: (
        <CarouselSlide
          title="Welcome to Our Platform"
          description="Experience the power of modern web development with React and TypeScript"
          gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          variant="gradient"
          height={300}
        />
      ),
    },
    {
      id: "features",
      content: (
        <CarouselSlide
          title="Advanced Features"
          description="Built with Intersection Observer API for optimal performance and user experience"
          icon="⚡"
          gradient="linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"
          variant="content"
          height={300}
          textColor="#2c3e50"
        />
      ),
    },
    {
      id: "gallery",
      content: (
        <CarouselSlide
          title="Media Gallery"
          description="Showcase your images, videos, and other media content beautifully"
          icon="🎬"
          gradient="#f8f9fa"
          variant="placeholder"
          height={300}
          textColor="#495057"
        />
      ),
    },
    {
      id: "responsive",
      content: (
        <CarouselSlide
          title="Fully Responsive"
          description="Optimized for all devices with touch support and mobile-first design"
          gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
          variant="gradient"
          height={300}
        />
      ),
    },
  ];

  return (
    <div className="carousel-demo-container">
      <header className={styles.header}>
        <h1 className={styles.title}>
          React Carousel with Intersection Observer
        </h1>
        <p className={styles.subtitle}>
          Demonstrating modular, parameterized content components with CSS
          Modules
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Auto-Play Carousel</h2>
          <p className={styles.sectionDescription}>
            This carousel automatically plays when visible and pauses when out
            of view, thanks to the Intersection Observer API. Use arrow keys to
            navigate!
          </p>
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel
            items={gradientSlides}
            autoPlay={true}
            autoPlayInterval={4000}
            showDots={true}
            showArrows={true}
            infinite={true}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Manual Navigation Carousel</h2>
          <p className={styles.sectionDescription}>
            This carousel requires manual navigation. Perfect for image
            galleries or when you want users to control the pace.
          </p>
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel
            items={placeholderSlides}
            autoPlay={false}
            showDots={true}
            showArrows={true}
            infinite={false}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Mixed Content Carousel</h2>
          <p className={styles.sectionDescription}>
            Demonstrating different slide variants in a single carousel with
            custom content and varied styling approaches.
          </p>
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel
            items={mixedSlides}
            autoPlay={true}
            autoPlayInterval={5000}
            showDots={true}
            showArrows={true}
            infinite={true}
          />
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h3 className={styles.featuresTitle}>Component Features</h3>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🔍</span>
            <span className={styles.featureText}>
              Intersection Observer API
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>▶️</span>
            <span className={styles.featureText}>
              Auto-play with viewport detection
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⌨️</span>
            <span className={styles.featureText}>
              Keyboard navigation (Arrow keys)
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📱</span>
            <span className={styles.featureText}>
              Touch/swipe support ready
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>♿</span>
            <span className={styles.featureText}>Accessibility compliant</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📐</span>
            <span className={styles.featureText}>Responsive design</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🔄</span>
            <span className={styles.featureText}>Infinite loop option</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎨</span>
            <span className={styles.featureText}>CSS Modules styling</span>
          </div>
        </div>
      </section>

      <section className={styles.architectureSection}>
        <h3 className={styles.architectureTitle}>Architecture Highlights</h3>
        <div className={styles.architectureList}>
          <div className={styles.architectureItem}>
            <strong>Modular Components:</strong> Separate slide content from
            carousel logic
          </div>
          <div className={styles.architectureItem}>
            <strong>CSS Modules:</strong> Scoped styling prevents conflicts and
            improves maintainability
          </div>
          <div className={styles.architectureItem}>
            <strong>Parameterized Content:</strong> Flexible content generation
            with configurable options
          </div>
          <div className={styles.architectureItem}>
            <strong>TypeScript Integration:</strong> Full type safety with
            proper interfaces
          </div>
          <div className={styles.architectureItem}>
            <strong>Performance Optimized:</strong> Intersection Observer for
            efficient viewport detection
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselDemo;

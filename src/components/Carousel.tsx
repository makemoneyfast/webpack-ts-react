import React, { useRef, useEffect, useState, useCallback } from 'react';
import './Carousel.css';

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  infinite = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Intersection Observer for carousel visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of carousel is visible
        rootMargin: '0px',
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Intersection Observer for individual items
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((item, index) => {
      if (item) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
              setCurrentIndex(index);
            }
          },
          {
            root: carouselRef.current,
            threshold: 0.8,
            rootMargin: '0px',
          }
        );

        observer.observe(item);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [items]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && isInView) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (infinite) {
            return (prev + 1) % items.length;
          }
          return prev < items.length - 1 ? prev + 1 : 0;
        });
      }, autoPlayInterval);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, isInView, autoPlayInterval, infinite, items.length]);

  // Scroll to specific item
  const scrollToItem = useCallback((index: number) => {
    const item = itemRefs.current[index];
    if (item && carouselRef.current) {
      item.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, []);

  // Navigation functions
  const goToNext = useCallback(() => {
    const nextIndex = infinite 
      ? (currentIndex + 1) % items.length
      : Math.min(currentIndex + 1, items.length - 1);
    
    setCurrentIndex(nextIndex);
    scrollToItem(nextIndex);
  }, [currentIndex, items.length, infinite, scrollToItem]);

  const goToPrevious = useCallback(() => {
    const prevIndex = infinite
      ? currentIndex === 0 ? items.length - 1 : currentIndex - 1
      : Math.max(currentIndex - 1, 0);
    
    setCurrentIndex(prevIndex);
    scrollToItem(prevIndex);
  }, [currentIndex, items.length, infinite, scrollToItem]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    scrollToItem(index);
  }, [scrollToItem]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isInView) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(items.length - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isInView, goToNext, goToPrevious, goToSlide, items.length]);

  if (items.length === 0) {
    return <div className="carousel-empty">No items to display</div>;
  }

  return (
    <div 
      className={`carousel ${className}`}
      ref={carouselRef}
      role="region"
      aria-label="Image carousel"
      aria-live={autoPlay ? "polite" : "off"}
    >
      {showArrows && (
        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={goToPrevious}
          disabled={!infinite && currentIndex === 0}
          aria-label="Previous slide"
          type="button"
        >
          &#8249;
        </button>
      )}

      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              className={`carousel-item ${index === currentIndex ? 'carousel-item--active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${items.length}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={goToNext}
          disabled={!infinite && currentIndex === items.length - 1}
          aria-label="Next slide"
          type="button"
        >
          &#8250;
        </button>
      )}

      {showDots && (
        <div className="carousel-dots" role="tablist" aria-label="Slide navigation">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'carousel-dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}

      <div className="carousel-sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {items.length}
      </div>
    </div>
  );
};
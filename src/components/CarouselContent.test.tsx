import React from 'react';
import { render, screen } from '@testing-library/react';
import { createGradientSlides, createPlaceholderSlides } from './CarouselContent';

describe('CarouselContent Utilities', () => {
  describe('createGradientSlides', () => {
    it('creates default number of gradient slides', () => {
      const slides = createGradientSlides();
      
      expect(slides).toHaveLength(5);
      expect(slides[0].id).toBe('gradient-1');
      expect(slides[4].id).toBe('gradient-5');
    });

    it('creates custom number of gradient slides', () => {
      const slides = createGradientSlides(3);
      
      expect(slides).toHaveLength(3);
      expect(slides[0].id).toBe('gradient-1');
      expect(slides[2].id).toBe('gradient-3');
    });

    it('creates slides with custom height', () => {
      const slides = createGradientSlides(2, 400);
      
      // Render the first slide to check its height
      const { container } = render(<div>{slides[0].content}</div>);
      const slideElement = container.querySelector('[class*="slide"]') as HTMLElement;
      
      expect(slideElement).toHaveStyle('height: 400px');
    });

    it('generates slides with proper content', () => {
      const slides = createGradientSlides(2);
      
      // Render first slide
      render(<div>{slides[0].content}</div>);
      expect(screen.getByText('Beautiful Gradients')).toBeInTheDocument();
      expect(screen.getByText('Modern design with stunning visual effects')).toBeInTheDocument();
    });
  });

  describe('createPlaceholderSlides', () => {
    it('creates default number of placeholder slides', () => {
      const slides = createPlaceholderSlides();
      
      expect(slides).toHaveLength(3);
      expect(slides[0].id).toBe('placeholder-1');
      expect(slides[2].id).toBe('placeholder-3');
    });

    it('creates custom number of placeholder slides', () => {
      const slides = createPlaceholderSlides(2);
      
      expect(slides).toHaveLength(2);
      expect(slides[0].id).toBe('placeholder-1');
      expect(slides[1].id).toBe('placeholder-2');
    });

    it('creates slides with custom height', () => {
      const slides = createPlaceholderSlides(1, 350);
      
      // Render the slide to check its height
      const { container } = render(<div>{slides[0].content}</div>);
      const slideElement = container.querySelector('[class*="slide"]') as HTMLElement;
      
      expect(slideElement).toHaveStyle('height: 350px');
    });

    it('generates slides with proper content and icons', () => {
      const slides = createPlaceholderSlides(2);
      
      // Render first slide
      render(<div>{slides[0].content}</div>);
      expect(screen.getByText('🖼️')).toBeInTheDocument();
      expect(screen.getByText('Image Placeholder 1')).toBeInTheDocument();
      expect(screen.getByText('Replace with actual images')).toBeInTheDocument();
    });

    it('handles edge case of requesting more slides than available', () => {
      const slides = createPlaceholderSlides(10); // More than the 5 predefined
      
      expect(slides).toHaveLength(5); // Should be limited to available content
    });
  });

  describe('Slide Content Consistency', () => {
    it('maintains consistent data structure', () => {
      const gradientSlides = createGradientSlides(2);
      const placeholderSlides = createPlaceholderSlides(2);
      
      // Check structure consistency
      gradientSlides.forEach(slide => {
        expect(slide).toHaveProperty('id');
        expect(slide).toHaveProperty('content');
        expect(typeof slide.id).toBe('string');
        expect(React.isValidElement(slide.content)).toBe(true);
      });
      
      placeholderSlides.forEach(slide => {
        expect(slide).toHaveProperty('id');
        expect(slide).toHaveProperty('content');
        expect(typeof slide.id).toBe('string');
        expect(React.isValidElement(slide.content)).toBe(true);
      });
    });

    it('generates unique IDs for slides', () => {
      const slides = createGradientSlides(5);
      const ids = slides.map(slide => slide.id);
      const uniqueIds = new Set(ids);
      
      expect(uniqueIds.size).toBe(ids.length);
    });
  });
});
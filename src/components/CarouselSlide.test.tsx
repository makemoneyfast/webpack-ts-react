import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarouselSlide } from './CarouselSlide';

describe('CarouselSlide Component', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  };

  it('renders gradient variant by default', () => {
    render(<CarouselSlide {...defaultProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders placeholder variant correctly', () => {
    render(
      <CarouselSlide
        {...defaultProps}
        variant="placeholder"
        icon="🖼️"
      />
    );
    
    expect(screen.getByText('🖼️')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders content variant correctly', () => {
    render(
      <CarouselSlide
        {...defaultProps}
        variant="content"
        icon="⚡"
        textColor="#2c3e50"
      />
    );
    
    expect(screen.getByText('⚡')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('applies custom height', () => {
    const { container } = render(
      <CarouselSlide {...defaultProps} height={400} />
    );
    
    const slide = container.firstChild as HTMLElement;
    expect(slide).toHaveStyle('height: 400px');
  });

  it('applies custom text color', () => {
    const { container } = render(
      <CarouselSlide {...defaultProps} textColor="#ff0000" />
    );
    
    const slide = container.firstChild as HTMLElement;
    expect(slide).toHaveStyle('color: #ff0000');
  });

  it('applies custom gradient background', () => {
    const customGradient = 'linear-gradient(45deg, #ff0000, #00ff00)';
    const { container } = render(
      <CarouselSlide {...defaultProps} gradient={customGradient} />
    );
    
    const slide = container.firstChild as HTMLElement;
    expect(slide).toHaveStyle(`background: ${customGradient}`);
  });

  it('renders without icon when not provided', () => {
    render(<CarouselSlide {...defaultProps} variant="placeholder" />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    // Icon should not be present
    expect(screen.queryByText('🖼️')).not.toBeInTheDocument();
  });

  it('applies correct CSS classes for variants', () => {
    const { container: gradientContainer } = render(
      <CarouselSlide {...defaultProps} variant="gradient" />
    );
    
    const { container: placeholderContainer } = render(
      <CarouselSlide {...defaultProps} variant="placeholder" />
    );
    
    const { container: contentContainer } = render(
      <CarouselSlide {...defaultProps} variant="content" />
    );
    
    expect(gradientContainer.firstChild).toHaveClass('slide', 'gradient');
    expect(placeholderContainer.firstChild).toHaveClass('slide', 'placeholder');
    expect(contentContainer.firstChild).toHaveClass('slide', 'content');
  });
});
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Carousel } from './Carousel';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

describe('Carousel Component', () => {
  const mockItems = [
    {
      id: 1,
      content: <div data-testid="slide-1">Slide 1 Content</div>,
    },
    {
      id: 2,
      content: <div data-testid="slide-2">Slide 2 Content</div>,
    },
    {
      id: 3,
      content: <div data-testid="slide-3">Slide 3 Content</div>,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders carousel with items', () => {
    render(<Carousel items={mockItems} />);
    
    expect(screen.getByRole('region', { name: /image carousel/i })).toBeInTheDocument();
    expect(screen.getByTestId('slide-1')).toBeInTheDocument();
    expect(screen.getByTestId('slide-2')).toBeInTheDocument();
    expect(screen.getByTestId('slide-3')).toBeInTheDocument();
  });

  it('renders navigation arrows by default', () => {
    render(<Carousel items={mockItems} />);
    
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument();
  });

  it('renders dots navigation by default', () => {
    render(<Carousel items={mockItems} />);
    
    const dots = screen.getAllByRole('tab');
    expect(dots).toHaveLength(3);
    expect(dots[0]).toHaveAttribute('aria-selected', 'true');
  });

  it('hides arrows when showArrows is false', () => {
    render(<Carousel items={mockItems} showArrows={false} />);
    
    expect(screen.queryByRole('button', { name: /previous slide/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /next slide/i })).not.toBeInTheDocument();
  });

  it('hides dots when showDots is false', () => {
    render(<Carousel items={mockItems} showDots={false} />);
    
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument();
  });

  it('navigates to next slide when next button is clicked', async () => {
    const user = userEvent.setup();
    render(<Carousel items={mockItems} />);
    
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    await user.click(nextButton);
    
    await waitFor(() => {
      const dots = screen.getAllByRole('tab');
      expect(dots[1]).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('navigates to previous slide when previous button is clicked', async () => {
    const user = userEvent.setup();
    render(<Carousel items={mockItems} />);
    
    // First go to slide 2
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    await user.click(nextButton);
    
    // Then go back to slide 1
    const prevButton = screen.getByRole('button', { name: /previous slide/i });
    await user.click(prevButton);
    
    await waitFor(() => {
      const dots = screen.getAllByRole('tab');
      expect(dots[0]).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('navigates to specific slide when dot is clicked', async () => {
    const user = userEvent.setup();
    render(<Carousel items={mockItems} />);
    
    const dots = screen.getAllByRole('tab');
    await user.click(dots[2]);
    
    await waitFor(() => {
      expect(dots[2]).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('handles keyboard navigation', async () => {
    render(<Carousel items={mockItems} />);
    
    const carousel = screen.getByRole('region');
    
    // Simulate arrow right key
    fireEvent.keyDown(document, { key: 'ArrowRight' });
    
    await waitFor(() => {
      const dots = screen.getAllByRole('tab');
      expect(dots[1]).toHaveAttribute('aria-selected', 'true');
    });
    
    // Simulate arrow left key
    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    
    await waitFor(() => {
      const dots = screen.getAllByRole('tab');
      expect(dots[0]).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('handles Home and End keys', async () => {
    render(<Carousel items={mockItems} />);
    
    // Go to last slide with End key
    fireEvent.keyDown(document, { key: 'End' });
    
    await waitFor(() => {
      const dots = screen.getAllByRole('tab');
      expect(dots[2]).toHaveAttribute('aria-selected', 'true');
    });
    
    // Go to first slide with Home key
    fireEvent.keyDown(document, { key: 'Home' });
    
    await waitFor(() => {
      const dots = screen.getAllByRole('tab');
      expect(dots[0]).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('disables previous button on first slide when infinite is false', () => {
    render(<Carousel items={mockItems} infinite={false} />);
    
    const prevButton = screen.getByRole('button', { name: /previous slide/i });
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last slide when infinite is false', async () => {
    const user = userEvent.setup();
    render(<Carousel items={mockItems} infinite={false} />);
    
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    
    // Navigate to last slide
    await user.click(nextButton);
    await user.click(nextButton);
    
    await waitFor(() => {
      expect(nextButton).toBeDisabled();
    });
  });

  it('loops to first slide from last when infinite is true', async () => {
    const user = userEvent.setup();
    render(<Carousel items={mockItems} infinite={true} />);
    
    const nextButton = screen.getByRole('button', { name: /next slide/i });
    
    // Navigate to last slide
    await user.click(nextButton);
    await user.click(nextButton);
    
    // Click next again to loop to first
    await user.click(nextButton);
    
    await waitFor(() => {
      const dots = screen.getAllByRole('tab');
      expect(dots[0]).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('renders empty state when no items provided', () => {
    render(<Carousel items={[]} />);
    
    expect(screen.getByText('No items to display')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Carousel items={mockItems} className="custom-carousel" />);
    
    const carousel = screen.getByRole('region');
    expect(carousel).toHaveClass('carousel', 'custom-carousel');
  });

  it('sets up IntersectionObserver for carousel visibility', () => {
    render(<Carousel items={mockItems} autoPlay={true} />);
    
    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('has proper accessibility attributes', () => {
    render(<Carousel items={mockItems} />);
    
    const carousel = screen.getByRole('region', { name: /image carousel/i });
    expect(carousel).toHaveAttribute('aria-live', 'off');
    
    const slides = screen.getAllByRole('group');
    expect(slides[0]).toHaveAttribute('aria-roledescription', 'slide');
    expect(slides[0]).toHaveAttribute('aria-label', 'Slide 1 of 3');
    
    const tablist = screen.getByRole('tablist', { name: /slide navigation/i });
    expect(tablist).toBeInTheDocument();
  });

  it('updates aria-live when autoPlay is enabled', () => {
    render(<Carousel items={mockItems} autoPlay={true} />);
    
    const carousel = screen.getByRole('region');
    expect(carousel).toHaveAttribute('aria-live', 'polite');
  });
});
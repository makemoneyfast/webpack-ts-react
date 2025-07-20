import React from 'react';
import { Carousel } from './Carousel';

const CarouselDemo: React.FC = () => {
  // Sample data for the carousel
  const carouselItems = [
    {
      id: 1,
      content: (
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '60px 40px',
          textAlign: 'center' as const,
          height: '300px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center'
        }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '2.5rem' }}>Slide 1</h2>
          <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>
            Beautiful gradient background with modern design
          </p>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div style={{ 
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          padding: '60px 40px',
          textAlign: 'center' as const,
          height: '300px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center'
        }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '2.5rem' }}>Slide 2</h2>
          <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>
            Intersection Observer API for smooth detection
          </p>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div style={{ 
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          padding: '60px 40px',
          textAlign: 'center' as const,
          height: '300px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center'
        }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '2.5rem' }}>Slide 3</h2>
          <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>
            Keyboard navigation and accessibility support
          </p>
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div style={{ 
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          color: 'white',
          padding: '60px 40px',
          textAlign: 'center' as const,
          height: '300px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center'
        }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '2.5rem' }}>Slide 4</h2>
          <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>
            Auto-play with pause on hover functionality
          </p>
        </div>
      )
    },
    {
      id: 5,
      content: (
        <div style={{ 
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          color: 'white',
          padding: '60px 40px',
          textAlign: 'center' as const,
          height: '300px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center'
        }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '2.5rem' }}>Slide 5</h2>
          <p style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>
            Responsive design with touch support
          </p>
        </div>
      )
    }
  ];

  const imageCarouselItems = [
    {
      id: 'img1',
      content: (
        <div style={{ 
          background: '#f8f9fa',
          padding: '40px',
          textAlign: 'center' as const,
          height: '250px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center',
          border: '2px dashed #dee2e6'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🖼️</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#495057' }}>Image Placeholder 1</h3>
          <p style={{ margin: 0, color: '#6c757d' }}>Replace with actual images</p>
        </div>
      )
    },
    {
      id: 'img2',
      content: (
        <div style={{ 
          background: '#f8f9fa',
          padding: '40px',
          textAlign: 'center' as const,
          height: '250px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center',
          border: '2px dashed #dee2e6'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📸</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#495057' }}>Image Placeholder 2</h3>
          <p style={{ margin: 0, color: '#6c757d' }}>Supports any content type</p>
        </div>
      )
    },
    {
      id: 'img3',
      content: (
        <div style={{ 
          background: '#f8f9fa',
          padding: '40px',
          textAlign: 'center' as const,
          height: '250px',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center',
          border: '2px dashed #dee2e6'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎨</div>
          <h3 style={{ margin: '0 0 8px 0', color: '#495057' }}>Image Placeholder 3</h3>
          <p style={{ margin: 0, color: '#6c757d' }}>Fully customizable styling</p>
        </div>
      )
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50' }}>
        React Carousel with Intersection Observer
      </h1>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: '#34495e' }}>
          Auto-Play Carousel
        </h2>
        <p style={{ marginBottom: '30px', color: '#7f8c8d', lineHeight: 1.6 }}>
          This carousel automatically plays when visible and pauses when out of view, 
          thanks to the Intersection Observer API. Use arrow keys to navigate!
        </p>
        <Carousel 
          items={carouselItems}
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={true}
          showArrows={true}
          infinite={true}
        />
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: '#34495e' }}>
          Manual Navigation Carousel
        </h2>
        <p style={{ marginBottom: '30px', color: '#7f8c8d', lineHeight: 1.6 }}>
          This carousel requires manual navigation. Perfect for image galleries 
          or when you want users to control the pace.
        </p>
        <Carousel 
          items={imageCarouselItems}
          autoPlay={false}
          showDots={true}
          showArrows={true}
          infinite={false}
        />
      </div>

      <div style={{ 
        background: '#f8f9fa', 
        padding: '30px', 
        borderRadius: '8px',
        marginTop: '40px'
      }}>
        <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>Features:</h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          <li style={{ color: '#495057' }}>✅ Intersection Observer API</li>
          <li style={{ color: '#495057' }}>✅ Auto-play with viewport detection</li>
          <li style={{ color: '#495057' }}>✅ Keyboard navigation (Arrow keys)</li>
          <li style={{ color: '#495057' }}>✅ Touch/swipe support ready</li>
          <li style={{ color: '#495057' }}>✅ Accessibility compliant</li>
          <li style={{ color: '#495057' }}>✅ Responsive design</li>
          <li style={{ color: '#495057' }}>✅ Infinite loop option</li>
          <li style={{ color: '#495057' }}>✅ Customizable styling</li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselDemo;
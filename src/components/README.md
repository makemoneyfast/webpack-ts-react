# Carousel Components

A modular, accessible, and performant carousel system built with React, TypeScript, and CSS Modules.

## Architecture Overview

The carousel system is composed of several modular components:

- **`Carousel`** - Main carousel container with navigation and auto-play
- **`CarouselSlide`** - Individual slide component with multiple variants
- **`CarouselContent`** - Content generation utilities and helpers
- **`CarouselDemo`** - Demonstration component showcasing all features

## Component Structure

```
components/
├── Carousel.tsx              # Main carousel logic
├── Carousel.css              # Carousel container styles
├── Carousel.test.tsx         # Carousel tests
├── CarouselSlide.tsx         # Individual slide component
├── CarouselSlide.module.css  # Slide styles (CSS Modules)
├── CarouselSlide.test.tsx    # Slide component tests
├── CarouselContent.tsx       # Content generation utilities
├── CarouselContent.test.tsx  # Content utility tests
├── CarouselDemo.tsx          # Demo implementation
├── CarouselDemo.module.css   # Demo styles (CSS Modules)
└── index.ts                  # Component exports
```

## Key Features

### 🔍 Intersection Observer Integration
- Efficient viewport detection for auto-play control
- Individual slide visibility tracking
- Performance optimized with minimal DOM queries

### 🎨 CSS Modules
- Scoped styling prevents conflicts
- Maintainable and modular CSS architecture
- Support for both global and modular styles

### 🧩 Modular Content System
- Parameterized slide components
- Multiple slide variants (gradient, placeholder, content)
- Flexible content generation utilities

### ♿ Accessibility First
- Full ARIA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast and reduced motion support

## Usage Examples

### Basic Carousel

```tsx
import { Carousel, createGradientSlides } from './components';

const MyComponent = () => {
  const slides = createGradientSlides(5, 300);
  
  return (
    <Carousel 
      items={slides}
      autoPlay={true}
      autoPlayInterval={4000}
      showDots={true}
      showArrows={true}
      infinite={true}
    />
  );
};
```

### Custom Slide Content

```tsx
import { Carousel, CarouselSlide } from './components';

const customSlides = [
  {
    id: 'slide1',
    content: (
      <CarouselSlide
        title="Custom Title"
        description="Custom description text"
        gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        variant="gradient"
        height={300}
      />
    ),
  },
  {
    id: 'slide2',
    content: (
      <CarouselSlide
        title="With Icon"
        description="Slide with icon content"
        icon="⚡"
        gradient="#ffffff"
        variant="content"
        height={300}
        textColor="#2c3e50"
      />
    ),
  },
];

<Carousel items={customSlides} />
```

### Content Generation Utilities

```tsx
import { createGradientSlides, createPlaceholderSlides } from './components';

// Generate gradient slides
const gradientSlides = createGradientSlides(5, 300);

// Generate placeholder slides
const placeholderSlides = createPlaceholderSlides(3, 250);
```

## Component APIs

### Carousel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `CarouselItem[]` | required | Array of carousel items |
| `autoPlay` | `boolean` | `false` | Enable auto-play |
| `autoPlayInterval` | `number` | `3000` | Auto-play interval (ms) |
| `showDots` | `boolean` | `true` | Show dot navigation |
| `showArrows` | `boolean` | `true` | Show arrow navigation |
| `infinite` | `boolean` | `true` | Enable infinite loop |
| `className` | `string` | `''` | Additional CSS classes |

### CarouselSlide Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Slide title |
| `description` | `string` | required | Slide description |
| `gradient` | `string` | required | Background gradient/color |
| `icon` | `string` | optional | Icon/emoji to display |
| `variant` | `'gradient' \| 'placeholder' \| 'content'` | `'gradient'` | Slide layout variant |
| `height` | `number` | `300` | Slide height in pixels |
| `textColor` | `string` | `'white'` | Text color |

### Content Generation Functions

#### `createGradientSlides(count?, height?)`
- `count` (number, default: 5) - Number of slides to generate
- `height` (number, default: 300) - Height of slides in pixels
- Returns: Array of carousel items with gradient backgrounds

#### `createPlaceholderSlides(count?, height?)`
- `count` (number, default: 3) - Number of slides to generate  
- `height` (number, default: 250) - Height of slides in pixels
- Returns: Array of carousel items with placeholder content

## Styling with CSS Modules

The carousel system uses CSS Modules for component-specific styling:

```css
/* CarouselSlide.module.css */
.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  /* ... */
}

.gradient {
  background: linear-gradient(/* ... */);
}
```

### CSS Module Benefits
- **Scoped styles** - No global namespace pollution
- **Maintainable** - Clear component-style relationships
- **Type-safe** - TypeScript integration with CSS class names
- **Performance** - Only loads styles for used components

## Testing

Comprehensive test coverage includes:

- Component rendering and props
- User interactions (clicks, keyboard)
- Accessibility attributes
- Content generation utilities
- CSS Module class applications
- Edge cases and error states

Run tests:
```bash
npm test
```

## Browser Support

- **Intersection Observer API** support required
- Modern browsers (Chrome 51+, Firefox 55+, Safari 12.1+, Edge 15+)
- Polyfill available for older browsers

## Performance Considerations

- **Intersection Observer** for efficient viewport detection
- **CSS transforms** for smooth animations
- **React.memo** and **useCallback** for optimized re-renders
- **CSS Modules** for minimal style overhead
- **Tree shaking** support for unused components

## Accessibility Features

- **ARIA labels** and roles for screen readers
- **Keyboard navigation** (Arrow keys, Home, End)
- **Focus management** with visible indicators
- **High contrast mode** support
- **Reduced motion** preferences respected
- **Screen reader announcements** for slide changes

## Customization

The carousel system is highly customizable:

- **CSS custom properties** for theming
- **Flexible content structure** (any React nodes)
- **Configurable behavior** through props
- **Extensible styling** with CSS Modules
- **Custom slide variants** through component composition
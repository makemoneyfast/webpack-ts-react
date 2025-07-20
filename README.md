# Modern React TypeScript Webpack Project

A modernized React TypeScript application with Webpack 5, featuring the latest best practices, development tools, and a custom Intersection Observer Carousel component.

## 🚀 Features

- **React 18** with modern createRoot API
- **TypeScript 5.4** with strict configuration
- **Webpack 5** with optimized development and production builds
- **ESLint** with React and TypeScript rules
- **Jest** with React Testing Library
- **Hot Module Replacement** for fast development
- **Code Splitting** and tree shaking for optimized bundles
- **Modern CSS** with reset and responsive design
- **Custom Carousel Component** with Intersection Observer API

## 🎠 Carousel Component Features

The project includes a sophisticated carousel component that leverages modern web APIs:

- **Intersection Observer API** for efficient viewport detection
- **Auto-play with smart pause** when carousel is out of view
- **Keyboard navigation** (Arrow keys, Home, End)
- **Touch/swipe support ready** (extensible)
- **Full accessibility compliance** (ARIA labels, screen reader support)
- **Responsive design** with mobile-first approach
- **Infinite loop option** or bounded navigation
- **Customizable styling** with CSS custom properties
- **Performance optimized** with minimal re-renders

## 📦 Scripts

```bash
# Development
npm start          # Start development server on port 3000
npm run build:dev  # Build for development

# Production
npm run build      # Build for production

# Testing
npm test           # Run tests
npm run test:cov   # Run tests with coverage
npm run test:rebuild # Update snapshots

# Code Quality
npm run lint       # Lint TypeScript files
npm run lint:fix   # Fix linting issues
npm run type-check # TypeScript type checking
```

## 🛠️ Modernization Changes

### React Updates

- Migrated from `react-dom` render to `createRoot` API
- Updated to React 18 patterns with StrictMode
- Added proper error handling for root element
- Enhanced React DevTools integration

### TypeScript Configuration

- Updated target from ES5 to ES2020
- Added strict type checking
- Enabled modern module resolution
- Added proper library definitions

### Webpack Enhancements

- Added Hot Module Replacement
- Implemented code splitting with vendor chunks
- Added tree shaking for production builds
- Optimized development server configuration
- Added HTML template with proper meta tags

### Development Experience

- Enhanced ESLint configuration with React rules
- Updated Jest setup with React Testing Library
- Added modern CSS reset and responsive design
- Improved build scripts and tooling

## 🎯 Carousel Usage

```tsx
import { Carousel } from "./components/Carousel";

const items = [
  {
    id: 1,
    content: <div>Your content here</div>,
  },
  // ... more items
];

<Carousel
  items={items}
  autoPlay={true}
  autoPlayInterval={4000}
  showDots={true}
  showArrows={true}
  infinite={true}
/>;
```

### Carousel Props

| Prop               | Type             | Default  | Description                        |
| ------------------ | ---------------- | -------- | ---------------------------------- |
| `items`            | `CarouselItem[]` | required | Array of items to display          |
| `autoPlay`         | `boolean`        | `false`  | Enable auto-play functionality     |
| `autoPlayInterval` | `number`         | `3000`   | Auto-play interval in milliseconds |
| `showDots`         | `boolean`        | `true`   | Show dot navigation                |
| `showArrows`       | `boolean`        | `true`   | Show arrow navigation              |
| `infinite`         | `boolean`        | `true`   | Enable infinite loop               |
| `className`        | `string`         | `''`     | Additional CSS classes             |

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Carousel.tsx        # Main carousel component
│   ├── Carousel.css        # Carousel styles
│   ├── Carousel.test.tsx   # Comprehensive tests
│   ├── CarouselDemo.tsx    # Demo implementation
│   └── index.ts           # Component exports
├── index.html             # HTML template
├── index.tsx              # Application entry point
├── example.tsx            # Example components
└── style.css             # Global styles
```

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration with modern settings
- `webpack.dev-config.js` - Development webpack configuration
- `webpack.prod-config.js` - Production webpack configuration
- `.eslintrc.js` - ESLint rules for React and TypeScript
- `jest.config.js` - Jest testing configuration

## 🌐 Browser Support

This project targets modern browsers with ES2020 support. The Intersection Observer API is supported in:

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

For older browsers, consider adding the [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver/tree/main/polyfill).

## ♿ Accessibility

The carousel component follows WCAG 2.1 guidelines:

- Full keyboard navigation support
- Screen reader compatibility with ARIA labels
- High contrast mode support
- Reduced motion preferences respected
- Focus management and visual indicators

## 🧪 Testing

The carousel includes comprehensive tests covering:

- Component rendering and props
- User interactions (clicks, keyboard)
- Accessibility attributes
- Edge cases and error states
- Intersection Observer integration

Run tests with:

```bash
npm test
```

## 📱 Responsive Design

The carousel is fully responsive with:

- Mobile-first CSS approach
- Touch-friendly navigation elements
- Adaptive sizing for different screen sizes
- Optimized performance on mobile devices

## 🎨 Customization

The carousel can be customized through:

- CSS custom properties for colors and spacing
- Flexible content structure (any React nodes)
- Configurable behavior through props
- Extensible styling with CSS classes

## 🚀 Performance

Optimizations include:

- Intersection Observer for efficient viewport detection
- CSS transforms for smooth animations
- Minimal re-renders with React hooks
- Tree shaking for smaller bundle sizes
- Lazy loading ready architecture

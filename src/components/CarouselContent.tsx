import React from "react";
import { CarouselSlide, CarouselSlideProps } from "./CarouselSlide";

export interface CarouselContentConfig {
  id: string | number;
  slideProps: CarouselSlideProps;
}

export interface CarouselContentProps {
  type: "gradient" | "placeholder" | "mixed" | "custom";
  customContent?: CarouselContentConfig[];
  count: number;
  height: number;
}

const generateGradientContent = (
  count: number,
  height: number
): CarouselContentConfig[] => {
  const gradients = [
    {
      start: "#667eea",
      end: "#764ba2",
      title: "Beautiful Gradients",
      desc: "Modern design with stunning visual effects",
    },
    {
      start: "#f093fb",
      end: "#f5576c",
      title: "Intersection Observer",
      desc: "Smart viewport detection for optimal performance",
    },
    {
      start: "#4facfe",
      end: "#00f2fe",
      title: "Keyboard Navigation",
      desc: "Full accessibility with arrow key support",
    },
    {
      start: "#43e97b",
      end: "#38f9d7",
      title: "Auto-Play Features",
      desc: "Intelligent auto-play with pause on scroll",
    },
    {
      start: "#fa709a",
      end: "#fee140",
      title: "Responsive Design",
      desc: "Mobile-first approach with touch support",
    },
  ];

  return gradients.slice(0, count).map((gradient, index) => ({
    id: `gradient-${index + 1}`,
    slideProps: {
      title: gradient.title,
      description: gradient.desc,
      gradient: `linear-gradient(135deg, ${gradient.start} 0%, ${gradient.end} 100%)`,
      variant: "gradient" as const,
      height,
    },
  }));
};

const generateMixedContent = (
  count: number,
  height: number
): CarouselContentConfig[] => {
  const mixed = [
    {
      id: "intro",
      slideProps: {
        title: "Welcome to Our Carousel",
        description:
          "Experience smooth navigation with modern web technologies",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        variant: "gradient" as const,
        height,
      },
    },
    {
      id: "features",
      slideProps: {
        title: "Rich Features",
        description:
          "Auto-play, keyboard navigation, and accessibility built-in",
        icon: "⚡",
        gradient: "#ffffff",
        variant: "content" as const,
        height,
        textColor: "#2c3e50",
      },
    },
    {
      id: "gallery",
      slideProps: {
        title: "Image Gallery",
        description: "Perfect for showcasing photos and media content",
        icon: "🖼️",
        gradient: "#f8f9fa",
        variant: "placeholder" as const,
        height,
        textColor: "#495057",
      },
    },
    {
      id: "performance",
      slideProps: {
        title: "Optimized Performance",
        description:
          "Intersection Observer API ensures efficient resource usage",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        variant: "gradient" as const,
        height,
      },
    },
    {
      id: "responsive",
      slideProps: {
        title: "Mobile Ready",
        description: "Responsive design that works perfectly on all devices",
        icon: "📱",
        gradient: "#ffffff",
        variant: "content" as const,
        height,
        textColor: "#2c3e50",
      },
    },
  ];

  return mixed.slice(0, count);
};

const generatePlaceholderContent = (
  count: number,
  height: number
): CarouselContentConfig[] => {
  const placeholders = [
    {
      icon: "🖼️",
      title: "Image Placeholder 1",
      desc: "Replace with actual images",
    },
    {
      icon: "📸",
      title: "Photo Gallery 2",
      desc: "Supports any content type",
    },
    {
      icon: "🎨",
      title: "Creative Content 3",
      desc: "Fully customizable styling",
    },
    {
      icon: "🌟",
      title: "Featured Item 4",
      desc: "Highlight important content",
    },
    {
      icon: "💎",
      title: "Premium Content 5",
      desc: "Showcase your best work",
    },
  ];

  return placeholders.slice(0, count).map((placeholder, index) => ({
    id: `placeholder-${index + 1}`,
    slideProps: {
      title: placeholder.title,
      description: placeholder.desc,
      icon: placeholder.icon,
      gradient: "#f8f9fa",
      variant: "placeholder" as const,
      height,
      textColor: "#495057",
    },
  }));
};

// Helper function to generate carousel items
export const generateCarouselItems = (config: CarouselContentProps) => {
  switch (config.type) {
    case "gradient":
      return generateGradientContent(config.count, config.height);
    case "placeholder":
      return generatePlaceholderContent(config.count, config.height);
    case "mixed":
      return generateMixedContent(config.count, config.height);
    case "custom":
      return config.customContent || [];
    default:
      return generateGradientContent(config.count, config.height);
  }
};

// Export individual content generators for flexibility
export const createGradientSlides = (count = 5, height = 300) => {
  const gradients = [
    {
      start: "#667eea",
      end: "#764ba2",
      title: "Beautiful Gradients",
      desc: "Modern design with stunning visual effects",
    },
    {
      start: "#f093fb",
      end: "#f5576c",
      title: "Intersection Observer",
      desc: "Smart viewport detection for optimal performance",
    },
    {
      start: "#4facfe",
      end: "#00f2fe",
      title: "Keyboard Navigation",
      desc: "Full accessibility with arrow key support",
    },
    {
      start: "#43e97b",
      end: "#38f9d7",
      title: "Auto-Play Features",
      desc: "Intelligent auto-play with pause on scroll",
    },
    {
      start: "#fa709a",
      end: "#fee140",
      title: "Responsive Design",
      desc: "Mobile-first approach with touch support",
    },
  ];

  return gradients.slice(0, count).map((gradient, index) => ({
    id: `gradient-${index + 1}`,
    content: (
      <CarouselSlide
        title={gradient.title}
        description={gradient.desc}
        gradient={`linear-gradient(135deg, ${gradient.start} 0%, ${gradient.end} 100%)`}
        variant="gradient"
        height={height}
      />
    ),
  }));
};

export const createPlaceholderSlides = (count = 3, height = 250) => {
  const placeholders = [
    {
      icon: "🖼️",
      title: "Image Placeholder 1",
      desc: "Replace with actual images",
    },
    { icon: "📸", title: "Photo Gallery 2", desc: "Supports any content type" },
    {
      icon: "🎨",
      title: "Creative Content 3",
      desc: "Fully customizable styling",
    },
    {
      icon: "🌟",
      title: "Featured Item 4",
      desc: "Highlight important content",
    },
    { icon: "💎", title: "Premium Content 5", desc: "Showcase your best work" },
  ];

  return placeholders.slice(0, count).map((placeholder, index) => ({
    id: `placeholder-${index + 1}`,
    content: (
      <CarouselSlide
        title={placeholder.title}
        description={placeholder.desc}
        icon={placeholder.icon}
        gradient="#f8f9fa"
        variant="placeholder"
        height={height}
        textColor="#495057"
      />
    ),
  }));
};

import React from 'react';
import styles from './CarouselSlide.module.css';

export interface CarouselSlideProps {
  title: string;
  description: string;
  gradient: string;
  icon?: string;
  variant?: 'gradient' | 'placeholder' | 'content';
  height?: number;
  textColor?: string;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  title,
  description,
  gradient,
  icon,
  variant = 'gradient',
  height = 300,
  textColor = 'white',
}) => {
  const slideStyle = {
    background: gradient,
    color: textColor,
    height: `${height}px`,
  };

  const renderContent = () => {
    switch (variant) {
      case 'placeholder':
        return (
          <div className={styles.placeholderContent}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <h3 className={styles.placeholderTitle}>{title}</h3>
            <p className={styles.placeholderDescription}>{description}</p>
          </div>
        );
      
      case 'content':
        return (
          <div className={styles.contentSlide}>
            {icon && <div className={styles.contentIcon}>{icon}</div>}
            <div className={styles.contentText}>
              <h3 className={styles.contentTitle}>{title}</h3>
              <p className={styles.contentDescription}>{description}</p>
            </div>
          </div>
        );
      
      case 'gradient':
      default:
        return (
          <div className={styles.gradientContent}>
            <h2 className={styles.gradientTitle}>{title}</h2>
            <p className={styles.gradientDescription}>{description}</p>
          </div>
        );
    }
  };

  return (
    <div 
      className={`${styles.slide} ${styles[variant]}`}
      style={slideStyle}
    >
      {renderContent()}
    </div>
  );
};
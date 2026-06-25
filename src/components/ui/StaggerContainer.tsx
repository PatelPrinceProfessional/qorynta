import React from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  delayChildren = 0.2,
  staggerChildren = 0.1,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  direction = 'up',
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
      case 'down':
        return { hidden: { opacity: 0, y: -30 }, show: { opacity: 1, y: 0 } };
      case 'left':
        return { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } };
      case 'right':
        return { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } };
      case 'scale':
        return { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } };
      default:
        return { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
    }
  };

  const itemVariants = getVariants();

  return (
    <motion.div
      variants={itemVariants}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

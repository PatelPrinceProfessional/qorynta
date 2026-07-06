import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export const MobileInfiniteCarousel = ({ projects }: { projects: Project[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const autoScrollRafId = useRef<number | null>(null);
  const inactivityTimerId = useRef<NodeJS.Timeout | null>(null);
  
  // Create 3 sets for seamless infinite loop: [set1, set2, set3]
  // We will start our scroll in the middle of set2.
  const clonedProjects = [...projects, ...projects, ...projects];
  const SCROLL_SPEED = 0.5; // pixels per frame (~30px/sec at 60fps)

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRafId.current) {
      cancelAnimationFrame(autoScrollRafId.current);
      autoScrollRafId.current = null;
    }
    setIsUserInteracting(true);
    
    // Clear existing timer
    if (inactivityTimerId.current) {
      clearTimeout(inactivityTimerId.current);
    }
    
    // Set 2-second timer to resume auto-scroll
    inactivityTimerId.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  }, []);

  const handleInteraction = () => {
    stopAutoScroll();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Helper to calculate total width of one set of items
    // Assuming each item + gap is equal width
    const getSetWidth = () => {
      // The scroll width of the entire container divided by 3 (since there are 3 sets)
      return container.scrollWidth / 3;
    };

    // Initialize scroll position to the start of the middle set (set 2)
    const initScroll = () => {
      if (container.scrollLeft === 0) {
        container.scrollLeft = getSetWidth();
      }
    };
    
    // Give DOM a frame to paint before initializing scroll
    requestAnimationFrame(initScroll);

    const autoScroll = () => {
      if (!container || isUserInteracting) return;
      
      container.scrollLeft += SCROLL_SPEED;
      
      const setWidth = getSetWidth();
      
      // If we've scrolled entirely past the middle set (into set 3), jump back to set 2
      if (container.scrollLeft >= setWidth * 2) {
        container.scrollLeft -= setWidth;
      } 
      // If manually scrolled backwards into set 1, jump forward to set 2
      else if (container.scrollLeft <= 0) {
        container.scrollLeft += setWidth;
      }

      autoScrollRafId.current = requestAnimationFrame(autoScroll);
    };

    if (!isUserInteracting) {
      autoScrollRafId.current = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (autoScrollRafId.current) cancelAnimationFrame(autoScrollRafId.current);
    };
  }, [isUserInteracting]);

  // Handle Scroll to update active index dots
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / clonedProjects.length;
    
    // Calculate which item is currently centered
    const centeredItemIndex = Math.round(scrollLeft / itemWidth);
    
    // Modulo math to get the actual project index (0 to projects.length - 1)
    const normalizedIndex = centeredItemIndex % projects.length;
    
    if (normalizedIndex !== activeIndex) {
      setActiveIndex(normalizedIndex);
    }
  };

  return (
    <div className="w-full relative py-8 overflow-hidden">
      <div 
        ref={containerRef}
        className={`flex overflow-x-auto pb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 hide-scrollbar ${isUserInteracting ? 'snap-x snap-mandatory' : ''}`}
        style={{
           // Hide scrollbars via inline style/CSS but keep functionality
           scrollbarWidth: 'none',
           msOverflowStyle: 'none'
        }}
        onScroll={(e) => {
          handleInteraction();
          handleScroll(e);
        }}
        onTouchStart={handleInteraction}
        onPointerDown={handleInteraction}
      >
        {clonedProjects.map((project, index) => (
          <div 
            key={`${project.slug}-${index}`}
            className="w-[85vw] sm:w-[65vw] flex-shrink-0 pr-4 snap-center h-full"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {projects.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-border'}`}
          />
        ))}
      </div>
    </div>
  );
};

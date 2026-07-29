import React from 'react';
import { servicesConfig } from '@/data/services.config';
import { GlassCard } from './GlassCard';

export const ServicesGlassGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 perspective-1000">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
        {servicesConfig.map((service, index) => {
          const isFlagship = service.flagship;
          const isSecondary = index === 4;
          
          return (
            <GlassCard
              key={service.id}
              service={service}
              index={index}
              isFlagship={isFlagship}
              isSecondary={isSecondary}
            />
          );
        })}
      </div>
    </div>
  );
};

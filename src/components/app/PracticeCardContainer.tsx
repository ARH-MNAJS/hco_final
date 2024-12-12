// components/PracticeCardContainer.tsx

import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import PracticeCard from './PracticeCard';
import { PracticeSet } from '@/data/practiceSets';

export interface PracticeCardContainerHandles {
  scrollLeft: () => void;
  scrollRight: () => void;
}

interface PracticeCardContainerProps {
  practiceSets: PracticeSet[];
}

const PracticeCardContainer = forwardRef<
  PracticeCardContainerHandles,
  PracticeCardContainerProps
>(({ practiceSets }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: -300,
          behavior: 'smooth',
        });
      }
    },
    scrollRight: () => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
      }
    },
  }));

  return (
    <div className="relative">
      {/* Left Gradient Overlay */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-[#121212] to-transparent" />

      {/* Scrollable Container */}
      <div
        className="flex overflow-x-auto py-4 px-6 hide-scrollbar"
        ref={containerRef}
      >
        {practiceSets.map((set) => (
          <PracticeCard
            key={set.id}
            bannerSrc={set.bannerSrc}
            title={set.title}
            numQuestions={set.numQuestions}
            suitableFor={set.suitableFor}
          />
        ))}
      </div>

      {/* Right Gradient Overlay */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-[#121212] to-transparent" />
    </div>
  );
});

PracticeCardContainer.displayName = 'PracticeCardContainer';

export default PracticeCardContainer;

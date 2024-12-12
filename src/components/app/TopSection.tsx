// components/TopSection.tsx

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TopSectionProps {
  selectedExam: string;
  setSelectedExam: (exam: string) => void;
  scrollLeft: () => void;
  scrollRight: () => void;
}

const TopSection: React.FC<TopSectionProps> = ({
  selectedExam,
  setSelectedExam,
  scrollLeft,
  scrollRight,
}) => {
  return (
    <div className="flex justify-between mt-[10svh] items-center mb-6">
      {/* Title on the left */}
      <h1 className="text-4xl font-extrabold text-black dark:text-white">
        Practice Coding Questions
      </h1>

      {/* Buttons and Dropdown on the right */}
      <div className="flex items-center space-x-4">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="w-10 h-10 flex items-center justify-center bg-white text-black border-2 border-black rounded-md transition-colors hover:bg-gray-200 active:bg-gray-300"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="w-10 h-10 flex items-center justify-center bg-white text-black border-2 border-black rounded-md transition-colors hover:bg-gray-200 active:bg-gray-300"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Exam Type Dropdown */}
        <div className="relative">
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="rounded-md border-2 border-black dark:border-white p-2 bg-[#feea63] dark:bg-[#121212] text-lg font-semibold text-black dark:text-white appearance-none pr-10 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
          >
            <option value="" disabled>
              Select Exam:
            </option>
            <option value="All">All</option>
            <option value="Spark">Spark</option>
            <option value="Ignite">Ignite</option>
            <option value="Blaze">Blaze</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            {/* SVG for the dropdown arrow */}
            <svg
              className="fill-current text-black dark:text-white w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.25 7.75L10 12.5L14.75 7.75H5.25Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;

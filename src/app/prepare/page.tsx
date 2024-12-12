// app/prepare/page.tsx

'use client';

import React, { useState, useEffect, useRef } from 'react';
import TopSection from '@/components/app/TopSection';
import PracticeCardContainer, {
  PracticeCardContainerHandles,
} from '@/components/app/PracticeCardContainer';
import practiceSets from '@/data/practiceSets';
import samplePapersData, { SamplePaper } from '@/data/samplePapers';
import SamplePaperList from '@/components/app/SamplePaperList';

import { PracticeSet } from '@/data/practiceSets';

export default function PreparePage() {
  const [selectedExamForPracticeCards, setSelectedExamForPracticeCards] = useState('All');
  const [selectedExamForSamplePapers, setSelectedExamForSamplePapers] = useState('All');
  const [filteredPracticeSets, setFilteredPracticeSets] = useState<PracticeSet[]>([]);
  const [filteredSamplePapers, setFilteredSamplePapers] = useState<SamplePaper[]>([]);

  const containerRef = useRef<PracticeCardContainerHandles>(null);

  useEffect(() => {
    if (selectedExamForPracticeCards === 'All' || selectedExamForPracticeCards === '') {
      setFilteredPracticeSets(shuffleArray([...practiceSets]));
    } else {
      const filteredSets = practiceSets.filter(
        (set) => set.exam === selectedExamForPracticeCards
      );
      setFilteredPracticeSets(filteredSets);
    }
  }, [selectedExamForPracticeCards]);

  useEffect(() => {
    if (selectedExamForSamplePapers === 'All' || selectedExamForSamplePapers === '') {
      setFilteredSamplePapers(shuffleArray([...samplePapersData]));
    } else {
      const filteredPapers = samplePapersData.filter(
        (paper) => paper.exam === selectedExamForSamplePapers
      );
      setFilteredSamplePapers(filteredPapers);
    }
  }, [selectedExamForSamplePapers]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft();
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollRight();
    }
  };

  return (
    <div className="text-black dark:text-white bg-white dark:bg-[#121212] min-h-screen">
      <main className="py-20 relative flex flex-col items-center overflow-hidden">
        <div className="w-full max-w-7xl px-8">
          <TopSection
            selectedExam={selectedExamForPracticeCards}
            setSelectedExam={setSelectedExamForPracticeCards}
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
          />
          {filteredPracticeSets.length > 0 ? (
            <PracticeCardContainer
              practiceSets={filteredPracticeSets}
              ref={containerRef}
            />
          ) : (
            <div>Loading...</div>
          )}

          {/* Margin between sections */}
          <div className="mt-20"></div>

          {/* New Section */}
          <div className="flex justify-between items-center mt-12">
            <h2 className="text-4xl font-extrabold text-black dark:text-white">
              Sample Practice Papers
            </h2>
            <div className="relative">
              <select
                value={selectedExamForSamplePapers}
                onChange={(e) => setSelectedExamForSamplePapers(e.target.value)}
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
          <SamplePaperList samplePapers={filteredSamplePapers} />
        </div>
      </main>
    </div>
  );
}

// Utility function to shuffle an array
function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

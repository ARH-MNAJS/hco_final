// components/app/SamplePaperAccordion.tsx

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SamplePaper } from '@/data/samplePapers';

interface SamplePaperAccordionProps {
  samplePaper: SamplePaper;
}

const SamplePaperAccordion: React.FC<SamplePaperAccordionProps> = ({ samplePaper }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-black dark:border-gray-700 rounded-lg mb-4 overflow-hidden shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff]">
      <button
        className="w-full flex justify-between items-center p-4 bg-white dark:bg-[#212121] text-left text-black dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold">{samplePaper.title}</span>
        <ChevronDown
          className={`w-6 h-6 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-[#212121] text-black dark:text-white">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p>
                <span className="font-bold">Duration:</span> {samplePaper.duration}
              </p>
              <p>
                <span className="font-bold">Difficulty:</span> {samplePaper.difficulty}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold">Marks:</span> {samplePaper.marks}
              </p>
              <p>
                <span className="font-bold">Suitable For:</span> {samplePaper.suitableFor}
              </p>
            </div>
          </div>
          <div className="p-4 bg-[#fff9cc] rounded-lg mb-4">
            <h3 className="font-bold mb-2 text-black">This sample paper covers:</h3>
            <div className="grid grid-cols-3 gap-4">
              {samplePaper.topicsCovered.map((topic, index) => (
                <p key={index} className="list-disc list-inside text-black">
                  {topic}
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <a
              href={samplePaper.downloadLink}
              download
              className="rounded-lg bg-[#feea63] dark:bg-[#212121] text-black dark:text-white border-2 border-black dark:border-gray-700 py-2 px-4 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#feea63] transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            >
              Download Sample Paper
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SamplePaperAccordion;

// components/app/SamplePaperList.tsx

import React from 'react';
import SamplePaperAccordion from './SamplePaperAccordion';
import { SamplePaper } from '@/data/samplePapers';

interface SamplePaperListProps {
  samplePapers: SamplePaper[];
}

const SamplePaperList: React.FC<SamplePaperListProps> = ({ samplePapers }) => {
  return (
    <div className="mt-8">
      {samplePapers.map((paper) => (
        <SamplePaperAccordion key={paper.id} samplePaper={paper} />
      ))}
    </div>
  );
};

export default SamplePaperList;

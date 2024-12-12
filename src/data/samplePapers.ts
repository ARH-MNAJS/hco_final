// data/samplePapers.ts

export interface SamplePaper {
    id: number;
    title: string;
    duration: string;
    difficulty: string;
    marks: number;
    suitableFor: string;
    exam: string;
    topicsCovered: string[];
    downloadLink: string;
  }
  
  const samplePapers: SamplePaper[] = [
    // Spark sample papers
    {
      id: 1,
      title: 'Sample Paper 1',
      duration: '2 hours',
      difficulty: 'Easy',
      marks: 100,
      suitableFor: 'Spark',
      exam: 'Spark',
      topicsCovered: ['Variables', 'Loops', 'Arrays'],
      downloadLink: '/sample-papers/spark/sample-paper-1.pdf',
    },
    {
      id: 2,
      title: 'Sample Paper 2',
      duration: '2 hours',
      difficulty: 'Medium',
      marks: 100,
      suitableFor: 'Spark',
      exam: 'Spark',
      topicsCovered: ['Functions', 'Strings', 'Conditional Statements'],
      downloadLink: '/sample-papers/spark/sample-paper-2.pdf',
    },
    {
      id: 3,
      title: 'Sample Paper 3',
      duration: '2 hours',
      difficulty: 'Hard',
      marks: 100,
      suitableFor: 'Spark',
      exam: 'Spark',
      topicsCovered: ['Recursion', 'Sorting Algorithms', 'Data Structures'],
      downloadLink: '/sample-papers/spark/sample-paper-3.pdf',
    },
    {
      id: 4,
      title: 'Sample Paper 4',
      duration: '2 hours',
      difficulty: 'Easy',
      marks: 100,
      suitableFor: 'Spark',
      exam: 'Spark',
      topicsCovered: ['Mathematics', 'Logic', 'Bit Manipulation'],
      downloadLink: '/sample-papers/spark/sample-paper-4.pdf',
    },
    {
      id: 5,
      title: 'Sample Paper 5',
      duration: '2 hours',
      difficulty: 'Medium',
      marks: 100,
      suitableFor: 'Spark',
      exam: 'Spark',
      topicsCovered: ['File I/O', 'OOP Concepts', 'Exception Handling'],
      downloadLink: '/sample-papers/spark/sample-paper-5.pdf',
    },
    // Ignite sample papers
    {
      id: 6,
      title: 'Sample Paper 1',
      duration: '3 hours',
      difficulty: 'Medium',
      marks: 150,
      suitableFor: 'Ignite',
      exam: 'Ignite',
      topicsCovered: ['Advanced OOP', 'Design Patterns', 'Concurrency'],
      downloadLink: '/sample-papers/ignite/sample-paper-1.pdf',
    },
    // Add four more Ignite sample papers...
    // Blaze sample papers
    {
      id: 11,
      title: 'Sample Paper 1',
      duration: '4 hours',
      difficulty: 'Hard',
      marks: 200,
      suitableFor: 'Blaze',
      exam: 'Blaze',
      topicsCovered: ['Graph Theory', 'Dynamic Programming', 'Complex Algorithms'],
      downloadLink: '/sample-papers/blaze/sample-paper-1.pdf',
    },
    // Add four more Blaze sample papers...
  ];
  
  export default samplePapers;
  
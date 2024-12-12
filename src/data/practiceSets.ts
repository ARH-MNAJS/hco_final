// data/practiceSets.ts

import { StaticImageData } from 'next/image'; // Import StaticImageData
import sparkBanner from '../../public/banner/spark-banner.png';
import igniteBanner from '../../public/banner/ignite-banner.png';
import blazeBanner from '../../public/banner/blaze-banner.png';

export interface PracticeSet {
  id: number;
  bannerSrc: StaticImageData; // Updated type
  title: string;
  numQuestions: number;
  suitableFor: string;
  exam: string;
}

const practiceSets: PracticeSet[] = [
  // Spark practice sets
  {
    id: 1,
    bannerSrc: sparkBanner,
    title: 'Practice Set 1',
    numQuestions: 10,
    suitableFor: 'Spark',
    exam: 'Spark',
  },
  {
    id: 2,
    bannerSrc: sparkBanner,
    title: 'Practice Set 2',
    numQuestions: 10,
    suitableFor: 'Spark',
    exam: 'Spark',
  },
  {
    id: 3,
    bannerSrc: sparkBanner,
    title: 'Practice Set 3',
    numQuestions: 10,
    suitableFor: 'Spark',
    exam: 'Spark',
  },
  {
    id: 4,
    bannerSrc: sparkBanner,
    title: 'Practice Set 4',
    numQuestions: 10,
    suitableFor: 'Spark',
    exam: 'Spark',
  },
  {
    id: 5,
    bannerSrc: sparkBanner,
    title: 'Practice Set 5',
    numQuestions: 10,
    suitableFor: 'Spark',
    exam: 'Spark',
  },

  // Ignite practice sets
  {
    id: 6,
    bannerSrc: igniteBanner,
    title: 'Practice Set 1',
    numQuestions: 10,
    suitableFor: 'Ignite',
    exam: 'Ignite',
  },
  {
    id: 7,
    bannerSrc: igniteBanner,
    title: 'Practice Set 2',
    numQuestions: 10,
    suitableFor: 'Ignite',
    exam: 'Ignite',
  },
  {
    id: 8,
    bannerSrc: igniteBanner,
    title: 'Practice Set 3',
    numQuestions: 10,
    suitableFor: 'Ignite',
    exam: 'Ignite',
  },
  {
    id: 9,
    bannerSrc: igniteBanner,
    title: 'Practice Set 4',
    numQuestions: 10,
    suitableFor: 'Ignite',
    exam: 'Ignite',
  },
  {
    id: 10,
    bannerSrc: igniteBanner,
    title: 'Practice Set 5',
    numQuestions: 10,
    suitableFor: 'Ignite',
    exam: 'Ignite',
  },

  // Blaze practice sets
  {
    id: 11,
    bannerSrc: blazeBanner,
    title: 'Practice Set 1',
    numQuestions: 10,
    suitableFor: 'Blaze',
    exam: 'Blaze',
  },
  {
    id: 12,
    bannerSrc: blazeBanner,
    title: 'Practice Set 2',
    numQuestions: 10,
    suitableFor: 'Blaze',
    exam: 'Blaze',
  },
  {
    id: 13,
    bannerSrc: blazeBanner,
    title: 'Practice Set 3',
    numQuestions: 10,
    suitableFor: 'Blaze',
    exam: 'Blaze',
  },
  {
    id: 14,
    bannerSrc: blazeBanner,
    title: 'Practice Set 4',
    numQuestions: 10,
    suitableFor: 'Blaze',
    exam: 'Blaze',
  },
  {
    id: 15,
    bannerSrc: blazeBanner,
    title: 'Practice Set 5',
    numQuestions: 10,
    suitableFor: 'Blaze',
    exam: 'Blaze',
  },
];

export default practiceSets;

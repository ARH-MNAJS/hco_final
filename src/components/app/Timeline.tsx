// Timeline.tsx
"use client";

import React, { useEffect, useState } from 'react';
import milestones from '@/data/milestones.json';
import { format, parseISO, isBefore, differenceInDays } from 'date-fns';

interface Milestone {
  title: string;
  description: string;
  date: string;
}

function Timeline() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const startDate = parseISO(milestones[0].date);
    const endDate = parseISO(milestones[milestones.length - 1].date);

    const totalDuration = differenceInDays(endDate, startDate);
    const elapsedDuration = differenceInDays(currentDate, startDate);

    let progressPercentage = (elapsedDuration / totalDuration) * 100;
    progressPercentage = Math.min(Math.max(progressPercentage, 0), 100);

    // Animate progress bar
    setProgress(0);
    const timeout = setTimeout(() => {
      setProgress(progressPercentage);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full mt-[10svh]">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
        Hawking Code Olympiad Timeline
      </h2>
      <div className="relative">
        {/* Vertical Progress Bar */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700">
          {/* Filled Progress */}
          <div
            className="w-full bg-[#feea63]"
            style={{
              height: `${progress}%`,
              transition: 'height 4s ease-in-out',
            }}
          ></div>
        </div>

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone: Milestone, index: number) => {
            const milestoneDate = parseISO(milestone.date);
            const isPast = isBefore(milestoneDate, new Date());
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="flex items-center w-full relative">
                {/* Left Side Card */}
                {isLeft && (
                  <div className="w-1/2 pr-8 hidden lg:block">
                    <div className="bg-white dark:bg-[#212121] text-black dark:text-white rounded-lg border-2 border-black dark:border-gray-700 shadow-lg p-4">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="mb-2">{milestone.description}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {format(milestoneDate, 'MMMM dd, yyyy')}
                      </p>
                    </div>
                  </div>
                )}

                {/* Connector and Circle */}
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="relative">
                    <div
                      className={`w-6 h-6 rounded-full border-2 ${
                        isPast
                          ? 'bg-[#feea63] border-[#feea63]'
                          : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Right Side Card */}
                {!isLeft && (
                  <div className="w-1/2 pl-8 hidden lg:block">
                    <div className="bg-white dark:bg-[#212121] text-black dark:text-white rounded-lg border-2 border-black dark:border-gray-700 shadow-lg p-4">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="mb-2">{milestone.description}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {format(milestoneDate, 'MMMM dd, yyyy')}
                      </p>
                    </div>
                  </div>
                )}

                {/* Mobile View: Cards stacked */}
                <div className="w-full lg:hidden mt-4">
                  <div className="bg-white dark:bg-[#212121] text-black dark:text-white rounded-lg border-2 border-black dark:border-gray-700 shadow-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="mb-2">{milestone.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {format(milestoneDate, 'MMMM dd, yyyy')}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;

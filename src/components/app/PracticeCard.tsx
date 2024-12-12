// components/PracticeCard.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import Alert from '@/components/app/Alert'; // Adjust the import path if necessary

interface PracticeCardProps {
  bannerSrc: StaticImageData; // Updated type
  title: string;
  numQuestions: number;
  suitableFor: string;
}

const PracticeCard: React.FC<PracticeCardProps> = ({
  bannerSrc,
  title,
  numQuestions,
  suitableFor,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [theme, setTheme] = useState('light');

  const iframeBaseUrl =
    'https://onecompiler.com/embed/challenges/3w7dby3mt/beginners-coding-challenge';

  useEffect(() => {
    // Function to update theme based on the presence of 'dark' class
    const updateTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setTheme(isDarkMode ? 'dark' : 'light');
    };

    // Update theme on mount
    updateTheme();

    // Observe changes to the classList of documentElement
    const observer = new MutationObserver(() => {
      updateTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleButtonClick = () => {
    if (typeof window !== 'undefined') {
      const isMobileDevice = window.innerWidth <= 768;
      if (isMobileDevice) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      } else {
        setIsDialogOpen(true);
      }
    }
  };

  // Construct the iframe src URL with the appropriate theme
  const iframeSrc = `${iframeBaseUrl}?theme=${theme}`;

  return (
    <>
      {showAlert && (
        <Alert
          message="Practice is only available for Desktop Devices"
          type="error"
        />
      )}

      <div className="bg-white dark:bg-[#212121] text-black dark:text-white rounded-lg border-2 border-black dark:border-gray-700 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] flex flex-col w-64 flex-shrink-0 mr-6">
        {/* Banner Image */}
        <div className="w-full">
          <Image
            src={bannerSrc}
            alt={title}
            width={256} // Specify the width
            height={128} // Specify the height
            className="object-cover rounded-t-lg"
          />
        </div>
        {/* Card Content */}
        <div className="p-4 flex flex-col">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="mb-1 text-base">{`Number of questions: ${numQuestions}`}</p>
          <p className="mb-4 text-base">{`Suitable for ${suitableFor}`}</p>
          <button
            onClick={handleButtonClick}
            className="rounded-lg bg-[#feea63] dark:bg-[#212121] text-black dark:text-white border-2 border-black dark:border-gray-700 py-2 px-4 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#feea63] transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
          >
            Start Practice
          </button>
        </div>
      </div>

      {/* Dialog with iframe */}
      <DialogPrimitive.Root
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
          <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[95%] h-[90%] max-w-6xl transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#212121] p-6 rounded-lg shadow-lg border-2 border-black dark:border-gray-700 overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-black dark:text-[#feea63]">
                {title}
              </h2>
              <DialogPrimitive.Close>
                <X className="h-6 w-6 text-black dark:text-[#feea63]" />
              </DialogPrimitive.Close>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              (Submit is disabled for Practice mode)
            </p>
            <iframe
              src={iframeSrc}
              className="w-full h-full border-0 rounded-lg"
              title="Practice Challenge"
            ></iframe>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
};

export default PracticeCard;

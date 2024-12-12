'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';

const CurriculumTrigger: React.FC = () => {
  return (
    <DialogPrimitive.Trigger asChild>
      <button
        className="flex items-center w-max text-black rounded border-2 border-black bg-white px-8 py-2 text-lg shadow-[4px_4px_0px_#000] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
      >
        Curriculum
      </button>
    </DialogPrimitive.Trigger>
  );
};

export default CurriculumTrigger;

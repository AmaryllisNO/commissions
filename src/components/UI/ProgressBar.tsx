import React from 'react';

const ProgressBar = ({
  statusOpen,
  totalSlots,
  activeSlots,
}: {
  statusOpen?: boolean;
  totalSlots: number;
  activeSlots: number;
}) => {
  return (
    <div className='flex flex-row items-center w-full h-2 gap-1'>
      {Array.from({ length: totalSlots }, (_, index) => {
        const isActive = index < activeSlots;
        const bgColor = isActive
          ? statusOpen
            ? 'bg-green-400'
            : 'bg-red-400'
          : 'border border-gray-500';

        return <div key={index} className={`${bgColor} h-full w-full`}></div>;
      })}
    </div>
  );
};

export default ProgressBar;

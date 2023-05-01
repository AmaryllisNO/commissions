import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Lekton } from 'next/font/google';
import ProgressBar from './ProgressBar';

const lekton = Lekton({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const CommissionStatus = ({ commissionData }: any) => {
  const { statusOpen, activeSlots, totalSlots } = commissionData;

  let commissionsArray = Array.from({ length: totalSlots });

  // console.log('statusOpen', statusOpen);

  // COMMISSION PROGRESSBAR

  // ANIMATIONS
  const pulse = keyframes`
  0% {
		transform: scale(0.95);
        box-shadow: ${
          statusOpen
            ? '0 0 0 0 rgba(51, 217, 178, 0.7)'
            : '0 0 0 0 rgba(217, 51, 92, 0.7)'
        }
	}
	
	70% {
		transform: scale(1);
        box-shadow: ${
          statusOpen
            ? '0 0 0 10px rgba(51, 217, 178, 0)'
            : '0 0 0 10px rgba(217, 51, 92, 0)'
        }
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: ${
      statusOpen
        ? '0 0 0 0 rgba(51, 217, 178, 0)'
        : '0 0 0 0 rgba(217, 51, 92, 0)'
    }
	}
`;

  // STYLED COMPONENTS
  const StatusIndicator = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${statusOpen ? 'green' : 'red'};
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: ${pulse} 1s linear infinite;
  `;

  return (
    <div className='flex flex-col justify-between items-center pl-14 pr-14 mb-8 mt-8 '>
      <>
        {statusOpen ? (
          <div className='flex flex-col items-center gap-y-4'>
            <div className='flex flex-row items-center w-full'>
              <StatusIndicator />
              <span className='text-sm uppercase text-green-400 ml-8'>
                Commissions Open
              </span>
            </div>

            <ProgressBar
              statusOpen={statusOpen}
              activeSlots={activeSlots}
              totalSlots={totalSlots}
            />
            <span className={`text-xs uppercase ${lekton.className}`}>
              {activeSlots}/{totalSlots} Slots Taken
            </span>
          </div>
        ) : (
          <div className='flex flex-col items-center gap-y-4'>
            <div className='flex flex-row items-center w-full'>
              <StatusIndicator />
              <span className='text-sm uppercase text-red-400 ml-8'>
                Commissions Closed
              </span>
            </div>

            <ProgressBar
              statusOpen={statusOpen}
              activeSlots={activeSlots}
              totalSlots={totalSlots}
            />
            <span className={`text-xs uppercase ${lekton.className}`}>
              {activeSlots}/{totalSlots} Left
            </span>
          </div>
        )}
      </>
    </div>
  );
};

export default CommissionStatus;

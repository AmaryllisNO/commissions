import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const CommissionStatus = () => {
  const [statusOpen, setStatusOpen] = useState(false);
  let activeSlots: number = 2;
  let totalSlots: number = 6;

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
    <div
      className='flex flex-row justify-between items-center pl-4 mb-12 mt-4'
      onClick={() => {
        setStatusOpen((prevStatusOpen) => !prevStatusOpen);
      }}
    >
      <StatusIndicator />
      {statusOpen ? (
        <>
          <span className='text-sm uppercase text-green-400'>
            Commissions Open
          </span>
          <span className='text-xs uppercase'>
            {activeSlots}/{totalSlots} Open
          </span>
        </>
      ) : (
        <>
          <span className='text-sm uppercase text-red-400'>
            Commissions Closed
          </span>
          <span className='text-xs uppercase'>
            {activeSlots}/{totalSlots} Left
          </span>
        </>
      )}
    </div>
  );
};

export default CommissionStatus;

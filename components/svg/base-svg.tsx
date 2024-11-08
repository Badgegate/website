import React, { ReactNode } from 'react';

interface BaseSvgProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  children: ReactNode;
}

const BaseSvg: React.FC<BaseSvgProps> = ({ 
  className, 
  width = 464, 
  height = 464, 
  children 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 464 464"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  );
};

export default BaseSvg; 
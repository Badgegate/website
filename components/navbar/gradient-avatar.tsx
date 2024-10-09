import React from 'react';

interface GradientAvatarProps {
  size: number;
}

export const GradientAvatar: React.FC<GradientAvatarProps> = ({ size }) => (
  <div
    className="rounded-full bg-gradient-to-br from-primary to-secondary"
    style={{ width: `${size}px`, height: `${size}px` }}
  />
);
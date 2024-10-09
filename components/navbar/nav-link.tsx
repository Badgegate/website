import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isMobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '', isMobile = false }) => (
  <Link href={href} className={`font-medium ${isMobile ? 'text-lg py-2' : 'text-sm'} ${className}`}>
    {children}
  </Link>
);
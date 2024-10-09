import React from 'react';
import { NavLink } from './nav-link';

export const ConnectedHamburgerMenu: React.FC = () => (
  <div className="flex flex-col p-4 space-y-4">
    <NavLink href="/explore" isMobile>Explore</NavLink>
    <NavLink href="/how-it-works" isMobile>How it works</NavLink>
    <div className="flex-grow" />
    <NavLink href="/terms" className="text-xs text-muted-foreground" isMobile>Terms of service</NavLink>
    <NavLink href="/privacy" className="text-xs text-muted-foreground" isMobile>Privacy policy</NavLink>
  </div>
);
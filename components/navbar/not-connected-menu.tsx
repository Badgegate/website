import React from 'react';
import { Button } from "@/components/ui/button";
import { NavLink } from './nav-link';

interface NotConnectedMenuProps {
  handleSignInClick: () => void;
}

export const NotConnectedMenu: React.FC<NotConnectedMenuProps> = ({ handleSignInClick }) => (
  <div className="flex flex-col p-4 space-y-4">
    <NavLink href="/explore" isMobile>Explore</NavLink>
    <NavLink href="/how-it-works" isMobile>How it works</NavLink>
    <div className="flex-grow" />
    <NavLink href="/terms" className="text-xs text-muted-foreground" isMobile>Terms of service</NavLink>
    <NavLink href="/privacy" className="text-xs text-muted-foreground" isMobile>Privacy policy</NavLink>
    <Button className="w-full mt-4" onClick={handleSignInClick}>Sign in</Button>
  </div>
);
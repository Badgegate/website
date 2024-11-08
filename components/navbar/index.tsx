'use client'

import React, { useState} from 'react'

import { useMediaQuery } from 'react-responsive'
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { NavLink } from './nav-link'
import { UserMenu } from './user-menu'
import Logo from '../logo'
import { useAuth } from '@/lib/context/AuthContext'
import useICPAuth from '@/hooks/useICPAuth'
import Avatar from 'boring-avatars'
import Link from 'next/link'

export default function Navbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const {loginWithInternetIdentity, logout, isLoading} = useICPAuth();
  const { principal } = useAuth();
  const avatarProp = principal ?? "Default";

  const handleSignInClick = async() => {
    await loginWithInternetIdentity();
  }

  const handleDisconnectWallet = async() => {
    await logout();
  }

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex sm:w-1/3">
        <div className="flex items-center space-x-6">
          <NavLink href="/app">Opportunities</NavLink>
          
        </div>
      </div>
      <Link href="/"><Logo className="sm:block hidden" /></Link>
      <div className="sm:w-1/3 flex justify-end">
        <div className="h-10 flex items-center">
          {isLoading ? (
            <div className="animate-spin duration-500 rounded-full h-10 mr-5 py-2 w-6 border-t-2 border-gray-500"></div>
          ) : principal ? (
            // Display user menu or avatar based on screen size when not loading
            isMobile ? (
              <Drawer open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" className=" mr-4 relative h-8 w-8 p-0 rounded-full">
                    <Avatar name={avatarProp} size={32} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <UserMenu isMobile={true} handleDisconnectWallet={handleDisconnectWallet} />
                </DrawerContent>
              </Drawer>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="mr-4 h-10 w-10 p-0 rounded-full">
                  <Avatar name={avatarProp} size={40} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <UserMenu handleDisconnectWallet={handleDisconnectWallet} />
                </PopoverContent>
              </Popover>
            )
          ) : (
            <Button variant="outline" onClick={handleSignInClick}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
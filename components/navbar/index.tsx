'use client'

import React, { useState, useEffect } from 'react'

import { useMediaQuery } from 'react-responsive'
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { GradientAvatar } from './gradient-avatar'
import { NavLink } from './nav-link'
import { UserMenu } from './user-menu'
import Logo from '../logo'
import { useAuth } from '@/lib/context/AuthContext'
import useICPAuth from '@/hooks/useICPAuth'

export default function Navbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const {loginWithInternetIdentity, logout} = useICPAuth();
  const { principal } = useAuth();

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSignInClick = async() => {
    await loginWithInternetIdentity();
  }

  const handleDisconnectWallet = async() => {
    await logout();
  }

  // Render a loading state or nothing on the server and during mounting
  if (!isMounted) {
    return <nav className="flex items-center justify-between py-4 px-6 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="h-10">
        
      </div>
    </nav>
  }

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex sm:w-1/3">
          <div className="flex items-center space-x-6">
            <NavLink href="/explore">Explore</NavLink>
            <NavLink href="/how-it-works">How it works</NavLink>
          </div>
        </div>
       <Logo className='sm:block hidden' />
       <div className="sm:w-1/3 flex justify-end">
          <div className="h-10 flex items-center">
            {principal ? (
              isMobile ? (
                <Drawer open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 p-0 rounded-full">
                      <GradientAvatar size={32} />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <UserMenu isMobile={true} handleDisconnectWallet={handleDisconnectWallet} />
                  </DrawerContent>
                </Drawer>
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" className="h-10 w-10 p-0 rounded-full">
                      <GradientAvatar size={40} />
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
  )
}
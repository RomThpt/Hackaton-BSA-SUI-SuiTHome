'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import ProfilePopover from './ProfilePopover';

export default function Header() {
  return (
    <header className="bg-gradient-to-l from-blue-400 via-blue-200 to-blue-50 text-gray-800 shadow-lg w-full">
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 pl-4">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="SuitHome Logo" 
                width={80} 
                height={80} 
                className="rounded-full object-cover -my-2"
              />
            </Link>
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-2">
            <Link href="/Marketplace">
              <Button variant="ghost" className="text-gray-800 hover:bg-blue-300 hover:bg-opacity-50 text-sm py-1">
                Marketplace
              </Button>
            </Link>
            <Link href="/Collaterize-Tokens">
              <Button variant="ghost" className="text-gray-800 hover:bg-blue-300 hover:bg-opacity-50 text-sm py-1">
                Collateralize Tokens
              </Button>
            </Link>
            <Link href="/Sell-Tokens">
              <Button variant="ghost" className="text-gray-800 hover:bg-blue-300 hover:bg-opacity-50 text-sm py-1">
                Sell Tokens
              </Button>
            </Link>
            <Link href="/Create-Offer">
              <Button variant="ghost" className="text-gray-800 hover:bg-blue-300 hover:bg-opacity-50 text-sm py-1">
                Create an offer
              </Button>
            </Link>
          </nav>
          <div className="flex-shrink-0 pr-4">
            <ProfilePopover />
          </div>
        </div>
      </div>
    </header>
  );
}

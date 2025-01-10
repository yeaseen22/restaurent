import React from 'react';
import { Search, Globe, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button'; // Adjust the import path
import { Input } from '../ui/Input'; // Adjust the import path
import { Link } from 'react-router-dom'; // Use React Router for navigation

export function Navbar() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/*
           * Left side: Logo, Search bar, and Delivery button
           */}
          <div className="flex items-center gap-4 flex-1">
            <Link to="/" className="flex-shrink-0">
              <div className="w-10 h-10">
                <img src="https://avatars.mds.yandex.net/get-bunker/994123/b78e4890b454976f74575e3ea79f24a5eeee5fd8/orig" alt="Logo" />
              </div>
            </Link>
            <div className="relative max-w-md w-full">
              <Search className="absolute outline-none left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Найти в ресторане" className="pl-10 w-full" />
            </div>
            <Button variant="secondary" className="hidden md:flex bg-yellow-500 hover:bg-yellow-300 text-black font-medium">
              Enter delivery address
            </Button>
          </div>
          
          {/* Right side: Buttons and Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </div>
            <Button variant="secondary" className="font-medium">Log in</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

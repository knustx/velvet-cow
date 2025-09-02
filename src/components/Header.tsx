"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsDropdownOpen(false); // Close dropdown after clicking
  };

  const navigationItems = [
    { id: 'about', label: 'About Us' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
    { id: 'social', label: 'Social' },
  ];

  return (
    <header className="bg-dark border-b-2 border-primary py-3">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Velvet Cow"
              width={360}
              height={120}
              priority
              className="object-contain"
            />
            
            {/* Navigation Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="p-2 hover:bg-primary/20 rounded transition-colors"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-label="Toggle navigation menu"
              >
                {/* Hamburger Icon - Three Gold Lines */}
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <div className="w-6 h-0.5 bg-primary transition-all duration-200"></div>
                  <div className="w-6 h-0.5 bg-primary transition-all duration-200"></div>
                  <div className="w-6 h-0.5 bg-primary transition-all duration-200"></div>
                </div>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-light border-2 border-primary rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    {navigationItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left px-4 py-2 font-sans text-dark hover:bg-primary hover:text-secondary transition-colors"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

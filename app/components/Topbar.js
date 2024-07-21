'use client'
import { useState } from 'react';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-slate-300 z-10 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">bharosa</div>
            
     
            <button 
              className="lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="hidden lg:flex space-x-4 items-center">
              <span>Community</span>
              <span>About</span>
              <span className="text-red-800">Raise Dispute</span>
              <span>Contact</span>
              <button className="bg-black text-white px-4 py-2 rounded">Add a company</button>
            </div>
          </div>

          {/* Mobile menu (hidden on large screens) */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="flex flex-col space-y-2">
              <span>Community</span>
              <span>About</span>
              <span className="text-red-800">Raise Dispute</span>
              <span>Contact</span>
              <button className="bg-black text-white px-4 py-2 rounded w-full">Add a company</button>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
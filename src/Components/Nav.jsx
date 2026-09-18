import { useState } from "react";
import { menuItems } from "../data/menu";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1f1f1f] bg-black/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-6 h-6 flex items-center justify-center text-white group-hover:opacity-80 transition-opacity">
              <img src="/icons/logo.svg" alt="NexusFlow Logo" className="w-5 h-5 invert" />
            </div>
            <span className="text-base font-semibold tracking-tight text-white">NexusFlow</span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md">
              v2.4.0
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="text-sm text-neutral-400 hover:text-white px-3 py-1.5 transition-colors">
              Log In
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-sm font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors">
              <span>Deploy Free</span>
              <img src="/icons/arrow-right.svg" alt="" className="w-3.5 h-3.5 invert" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              aria-label="Toggle Navigation"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800"
            >
              {isMenuOpen ? (
                <img src="/icons/close.svg" alt="Close" className="w-5 h-5 invert" />
              ) : (
                <img src="/icons/menu.svg" alt="Menu" className="w-5 h-5 invert" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-black/95 px-4 pt-3 pb-6 space-y-3 font-sans text-sm">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-900 hover:text-white"
            >
              {item.mobileLabel || item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
            <a href="#login" className="text-center py-2 text-sm text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-lg">
              Log In
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-1.5 text-center py-2 text-sm font-medium text-black bg-white rounded-lg">
              <span>Deploy Free</span>
              <img src="/icons/arrow-right.svg" alt="" className="w-3.5 h-3.5 invert" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
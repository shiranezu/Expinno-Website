import { Mail, Phone, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { hash, pathname } = location;

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure component has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  const isAbout = pathname === '/about';
  const isBusinesses = pathname === '/businesses';
  const isCareers = pathname === '/careers';
  const isContact = pathname === '/contact';
  const isHome = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-brand-orange selection:text-white">
      {/* 1. Top Header Bar */}
      <div className="bg-brand-dark text-white py-2 px-4 md:px-8 xl:px-16 flex justify-end items-center gap-6 text-[11px] font-medium tracking-wide">
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-white" />
          <a href="mailto:info@expinno.ng" className="hover:text-brand-orange transition-colors">Info@expinno.ng</a>
        </div>
        <div className="flex items-center gap-2 border-l border-white/20 pl-6 h-4">
          <Phone size={14} className="text-white" />
          <span className="uppercase">+234 (0) 900 000 0000</span>
        </div>
      </div>

      {/* 2. Main Navbar with Hero Background (Subtle Gradient) */}
      <nav className="absolute top-10 left-0 right-0 z-50 flex justify-between items-center py-6 px-4 md:px-8 xl:px-16">
        {/* Logo Placeholder */}
        <Link to="/" className="w-48 h-12 flex items-center">
          <div className="text-white font-bold text-xl flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full -rotate-45" />
            </div>
            <span className="tracking-tighter uppercase whitespace-nowrap">EXP<span className="text-brand-orange">INNO</span> LIMITED</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-white text-[12px] font-semibold tracking-widest">
          <li><Link to="/" className={`${isHome ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>HOME</Link></li>
          <li><Link to="/about" className={`${isAbout ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>ABOUT US</Link></li>
          <li><Link to="/businesses" className={`${isBusinesses ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>BUSINESSES</Link></li>
          <li><Link to="/careers" className={`${isCareers ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>CAREERS</Link></li>
          <li><Link to="/contact" className={`${isContact ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>CONTACT</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer Info - Desktop Links */}
      <footer className="bg-brand-dark pt-20 pb-12 px-4 md:px-8 xl:px-16 text-white text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border border-brand-dark flex items-center justify-center transition-colors hover:border-brand-orange">
              <Mail size={18} className="text-white" />
            </div>
            <p className="font-bold text-[13px] mt-2 uppercase tracking-wide">Email Us</p>
            <p className="text-white/60 text-[12px]">info@expinno.ng</p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
            <div className="w-10 h-10 border border-brand-dark flex items-center justify-center transition-colors hover:border-brand-orange">
              <Phone size={18} className="text-white" />
            </div>
            <p className="font-bold text-[13px] mt-2 uppercase tracking-wide">Call US</p>
            <p className="text-white/60 text-[12px]">+234 (0) 900 000 0000</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border border-brand-dark flex items-center justify-center transition-colors hover:border-brand-orange">
              <Globe size={18} className="text-white" />
            </div>
            <p className="font-bold text-[13px] mt-2 uppercase tracking-wide uppercase">Website</p>
            <p className="text-white/60 text-[12px] max-w-[200px]">expinno-ng.com</p>
          </div>
        </div>

        {/* 10. Footer Final Branding & Bottom Bar */}
        <div className="pt-12 border-t border-white/10 mt-12 flex flex-col items-center gap-8">
          {/* Logo in footer */}
          <div className="bg-white px-8 py-3">
            <div className="text-brand-dark font-bold text-xl flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-orange rounded-sm rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-brand-dark rounded-full -rotate-45" />
              </div>
              <div className="flex flex-col items-start leading-none gap-0.5">
                <span className="tracking-tighter text-lg -mb-1">EXP<span className="text-brand-orange">INNO</span></span>
                <span className="text-[10px] tracking-[0.2em] font-bold">LIMITED</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-bold tracking-widest uppercase text-white/90">
            <Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link>
            <Link to="/businesses" className="hover:text-brand-orange transition-colors">businesses</Link>
            <Link to="/#news" className="hover:text-brand-orange transition-colors">News</Link>
            <Link to="/#projects" className="hover:text-brand-orange transition-colors">projects</Link>
            <Link to="/careers" className="hover:text-brand-orange transition-colors">Careers</Link>
          </div>

          <div className="flex gap-6 mt-4">
            <Facebook size={18} className="text-white/60 hover:text-white cursor-pointer transition-colors" />
            <Twitter size={18} className="text-white/60 hover:text-white cursor-pointer transition-colors" />
            <Instagram size={18} className="text-white/60 hover:text-white cursor-pointer transition-colors" />
            <Linkedin size={18} className="text-white/60 hover:text-white cursor-pointer transition-colors" />
          </div>

          <div className="w-full h-[1px] bg-white/5 mt-8" />
          
          <p className="text-[10px] text-white/40 tracking-wider">
            Copyright © Expinno Ltd 2026 | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

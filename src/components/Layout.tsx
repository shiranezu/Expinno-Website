import { Mail, Phone, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const subsidiaries = [
  { name: "Topp IT Consulting Ltd", href: "/businesses/topp-it-consulting" },
  { name: "Expinno Ltd", href: "/businesses/expinno-ltd" },
  { name: "Expinno Oil & Gas", href: "/businesses/expinno-oil-gas" },
  { name: "Expinno Consulting Ltd", href: "/businesses/expinno-consulting" },
  { name: "Expinno Realty", href: "/businesses/expinno-realty" },
  { name: "Expinno Agro Ltd", href: "/businesses/expinno-agro" },
  { name: "Kay & Aai Ltd", href: "/businesses/kay-aai-ltd" },
  { name: "Kay & Aai Farm", href: "/businesses/kay-aai-farm" },
  { name: "The Adekolu’s Foundation", href: "/businesses/adekolus-foundation" }
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { hash, pathname } = location;
  const [headerLogoFailed, setHeaderLogoFailed] = React.useState(false);
  const [footerLogoFailed, setFooterLogoFailed] = React.useState(false);

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
  const isBusinesses = pathname.startsWith('/businesses');
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
      <nav className="absolute top-8 left-0 right-0 z-50 flex justify-between items-center py-2 px-4 md:px-8 xl:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {!headerLogoFailed ? (
            <img 
              src="/logo.png" 
              alt="Expinno Groups" 
              className="h-36 md:h-44 lg:h-48 w-auto object-contain transition-all -my-6 md:-my-9 lg:-my-12"
              onError={() => setHeaderLogoFailed(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-white font-bold text-xl flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-orange rounded-sm rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full -rotate-45" />
              </div>
              <span className="tracking-tighter uppercase whitespace-nowrap">EXP<span className="text-brand-orange">INNO</span> GROUPS</span>
            </div>
          )}
        </Link>

        {/* Navigation Links with Hover Dropdown */}
        <ul className="hidden md:flex items-center gap-8 text-white text-[12px] font-semibold tracking-widest">
          <li><Link to="/" className={`${isHome ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>HOME</Link></li>
          <li><Link to="/about" className={`${isAbout ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>ABOUT US</Link></li>
          
          {/* Subsidiaries Dropdown */}
          <li className="relative group py-2">
            <Link 
              to="/businesses" 
              className={`${isBusinesses ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors flex items-center gap-1.5`}
            >
              SUBSIDIARIES
              <svg 
                className="w-2.5 h-2.5 transition-transform duration-200 group-hover:rotate-180 opacity-70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {/* Dropdown Menu Container */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-76 bg-brand-dark/95 backdrop-blur-md border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden border-t-2 border-t-brand-orange">
              <div className="py-2.5 flex flex-col text-left">
                {subsidiaries.map((sub, i) => (
                  <Link
                    key={i}
                    to={sub.href}
                    className="px-6 py-3 text-[10px] font-bold tracking-wider text-white/80 hover:text-white hover:bg-brand-orange transition-all uppercase border-b border-white/5 last:border-0"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li><Link to="/careers" className={`${isCareers ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>CAREERS</Link></li>
          <li><Link to="/contact" className={`${isContact ? 'text-brand-orange' : ''} hover:text-brand-orange transition-colors`}>CONTACT</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer Info - Desktop Links */}
      <footer className="bg-brand-dark pt-12 pb-6 px-4 md:px-8 xl:px-16 text-white text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 px-4">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors hover:bg-brand-orange/20">
              <Mail size={14} className="text-white/80" />
            </div>
            <p className="font-bold text-[11px] uppercase tracking-wider text-white/90">Email Us</p>
            <p className="text-white/60 text-[11px]">info@expinno.ng</p>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors hover:bg-brand-orange/20">
              <Phone size={14} className="text-white/80" />
            </div>
            <p className="font-bold text-[11px] uppercase tracking-wider text-white/90">Call US</p>
            <p className="text-white/60 text-[11px]">+234 (0) 900 000 0000</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors hover:bg-brand-orange/20">
              <Globe size={14} className="text-white/80" />
            </div>
            <p className="font-bold text-[11px] uppercase tracking-wider text-white/90">Website</p>
            <p className="text-white/60 text-[11px]">expinno-ng.com</p>
          </div>
        </div>

        {/* 10. Footer Final Branding & Bottom Bar */}
        <div className="pt-8 border-t border-white/10 mt-8 flex flex-col items-center gap-6">
          {/* Logo in footer */}
          <div className="bg-white w-36 md:w-40 h-16 md:h-[72px] rounded-md shadow-sm flex items-center justify-center overflow-hidden">
            {!footerLogoFailed ? (
              <img 
                src="/logo.png" 
                alt="Expinno Groups Logo" 
                className="h-32 md:h-36 max-w-none object-contain transition-all"
                onError={() => setFooterLogoFailed(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="text-brand-dark font-bold text-xl flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-orange rounded-sm rotate-45 flex items-center justify-center">
                  <div className="w-4 h-4 bg-brand-dark rounded-full -rotate-45" />
                </div>
                <div className="flex flex-col items-start leading-none gap-0.5">
                  <span className="tracking-tighter text-lg -mb-1">EXP<span className="text-brand-orange">INNO</span></span>
                  <span className="text-[10px] tracking-[0.2em] font-bold">GROUPS</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-bold tracking-widest uppercase text-white/90">
            <Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link>
            <Link to="/businesses" className="hover:text-brand-orange transition-colors">subsidiaries</Link>
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

          <div className="w-full h-[1px] bg-white/5 mt-4" />
          
          <p className="text-[10px] text-white/40 tracking-wider">
            Copyright © Expinno Groups 2026 | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

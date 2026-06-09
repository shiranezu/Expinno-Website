import { motion } from 'motion/react';
import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Laptop, 
  Sparkles, 
  Fuel, 
  LineChart, 
  Building2, 
  Leaf, 
  Package, 
  Tractor, 
  Heart 
} from 'lucide-react';

const businesses = [
  { name: "TOPP IT CONSULTING", icon: Laptop, email: "topp@expinno.ng", phone: "+234 (0) 900 000 0001" },
  { name: "EXPINNO LTD", icon: Sparkles, email: "ltd@expinno.ng", phone: "+234 (0) 900 000 0002" },
  { name: "EXPINNO OIL & GAS", icon: Fuel, email: "oilandgas@expinno.ng", phone: "+234 (0) 900 000 0003" },
  { name: "EXPINNO CONSULTING", icon: LineChart, email: "consulting@expinno.ng", phone: "+234 (0) 900 000 0004" },
  { name: "EXPINNO REALTY", icon: Building2, email: "realty@expinno.ng", phone: "+234 (0) 900 000 0005" },
  { name: "EXPINNO AGRO", icon: Leaf, email: "agro@expinno.ng", phone: "+234 (0) 900 000 0006" },
  { name: "KAY & AAI LTD", icon: Package, email: "kayandaai@expinno.ng", phone: "+234 (0) 900 000 0007" },
  { name: "KAY & AAI FARM", icon: Tractor, email: "farm@expinno.ng", phone: "+234 (0) 900 000 0008" },
  { name: "THE ADEKOLU’S FOUNDATION", icon: Heart, email: "foundation@expinno.ng", phone: "+234 (0) 900 000 0009" },
];

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[650px] lg:min-h-[700px] flex flex-col justify-center bg-brand-dark overflow-hidden">
        {/* Background Layer with Gradient & Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Exact gradient from home and about pages */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/75 to-brand-dark/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80" 
            alt="Contact hero background" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 pt-48 pb-32 flex flex-col items-start text-left px-12 md:px-20 xl:px-24 max-w-7xl mx-auto w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg mt-4 max-w-2xl font-light"
          >
            Get in touch and power your next move by contacting our team.
          </motion.p>
        </div>
      </header>

      {/* Six Businesses Contact Cards Grid */}
      <section className="py-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto w-full border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-gray-100">
          {businesses.map((biz, idx) => {
            const Icon = biz.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-12 md:p-16 flex flex-col items-center text-center group border-r border-b border-gray-100 min-h-[360px] justify-center"
              >
                <div className="mb-10">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-[#184174]"
                  >
                    <Icon size={52} strokeWidth={1} />
                  </motion.div>
                </div>
                
                <h3 className="text-brand-dark text-lg font-bold mb-6 tracking-tight min-h-[56px] flex items-center justify-center">
                  {biz.name}
                </h3>
                
                <div className="space-y-1.5 mt-auto">
                  <p className="text-[#888] text-[13px] font-medium flex items-center justify-center gap-1.5">
                    phone: <span className="text-brand-dark">{biz.phone}</span>
                  </p>
                  <p className="text-[#888] text-[13px] font-medium flex items-center justify-center gap-1.5">
                    email: <span className="text-brand-dark">{biz.email}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 shadow-sm border border-black/5 overflow-hidden">
          {/* Left Side: Form */}
          <div className="bg-white p-10 md:p-16">
            <h2 className="text-brand-dark text-3xl font-bold mb-4 relative inline-block">
              Send a message
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand-orange" />
            </h2>
            <p className="text-[#666] text-[14px] mt-8 mb-12 max-w-md">
              Talk to us if you have any questions, interests and enquiries. We'll always be glad to respond.
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-[13px] font-bold text-brand-dark mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 p-3 h-11 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-brand-dark mb-2">E-mail</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 p-3 h-11 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-brand-dark mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="bg-brand-orange text-white px-12 py-3.5 rounded-full text-[13px] font-bold hover:bg-brand-orange/90 transition-colors uppercase tracking-wider"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side: Headquarters Info */}
          <div className="bg-brand-dark text-white p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-white text-3xl font-bold mb-16">Expinno Headquarters</h2>
            
            <div className="space-y-12 max-w-md">
              <div className="flex gap-4 items-start">
                <MapPin size={24} className="text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-white/60 text-[14px] leading-relaxed">
                    Yakubu Gowon Centre, 496 Abogo Largema Street, CBD, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail size={24} className="text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Mail</h3>
                  <p className="text-white/60 text-[14px]">info@expinno.ng</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone size={24} className="text-white shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-white/60 text-[14px]">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

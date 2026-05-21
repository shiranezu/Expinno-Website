import { motion } from 'motion/react';
import React from 'react';
import { Plus } from 'lucide-react';

const businessData = [
  {
    header: "Marine Support Services",
    subHeading: "Marine services",
    text: "At Expinno Oil & Gas, our Marine Support Services ensure that offshore operations run smoothly, safely, and efficiently. We offer a full spectrum of solutions covering vessel availability, crew readiness, system reliability, and marine compliance. By delivering rapid, responsive marine solutions, we minimize operational downtime and optimize maritime asset utilization.",
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=1000&auto=format&fit=crop"
  },
  {
    header: "Facility Maintenance",
    subHeading: "maintainance services",
    text: "Expinno provides specialized facility maintenance services designed to protect the operational integrity of critical energy infrastructure. From subsea assets to topside terminals, our comprehensive maintenance programs use predictive strategies, real-time diagnostics, and corrosion control to extend asset lifespan and safeguard system performance.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    header: "Integrity Testing",
    subHeading: "general",
    text: "Expinno offers precision-driven integrity testing services to ensure the safety, reliability, and compliance of energy systems. Our approach combines advanced leak detection, pressure testing, and material analysis techniques to proactively identify vulnerabilities, protect assets, and meet stringent global safety standards.",
    image: "https://images.unsplash.com/photo-1574689232449-396a461d71d8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    header: "Equipment & Material Supply",
    subHeading: "Supply services",
    text: "Expinno delivers reliable, traceable supply solutions for mission-critical components required across the energy and maritime industries. Through strategic partnerships with leading OEMs and rigorous quality control, we ensure that every piece of equipment meets or exceeds global performance and compliance standards.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
  },
  {
    header: "Shipping & Ship Management",
    subHeading: "Marine services",
    text: "Expinno Oil & Gas manages the complete lifecycle of vessel operations, ensuring safe, efficient, and compliant maritime logistics. From scheduling and crewing to maintenance oversight and cargo delivery, our ship management services integrate smart technologies and agile response protocols to optimize your fleet performance.",
    image: "https://images.unsplash.com/photo-1504439904031-93ded1f937c4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    header: "Engineering Services",
    subHeading: "engineering",
    text: "Expinno Oil & Gas delivers bespoke engineering solutions aligned to operational outcomes. From early-stage concept designs to detailed engineering and construction oversight, we deliver smart, resilient systems built to perform in the toughest energy and maritime environments.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Businesses() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="relative min-h-[650px] lg:min-h-[700px] flex flex-col justify-center bg-brand-dark overflow-hidden">
        {/* Background Layer with Gradient & Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Exact gradient from home and about pages */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/75 to-brand-dark/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80" 
            alt="Businesses hero background" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 pt-48 pb-32 flex flex-col items-start text-left px-12 md:px-20 xl:px-24 max-w-7xl mx-auto w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-6xl font-bold tracking-tight uppercase"
          >
            OUR BUSINESSES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl font-light"
          >
            We invest in sectors that optimize energy operations and enhance safety
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="w-24 h-1 bg-brand-orange mt-8 origin-left"
          />
        </div>
      </header>

      {/* Businesses Grid Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {businessData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4.5] overflow-hidden group cursor-pointer shadow-lg rounded-sm"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.header}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />

              {/* Default Title Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-white text-2xl font-bold uppercase tracking-tight">{item.header}</h3>
                <div className="w-12 h-1 bg-brand-orange mt-2" />
              </div>

              {/* Hover Deep Blue Overlay */}
              <div className="absolute inset-0 bg-[#184174]/95 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col p-8 justify-start pt-16">
                <h3 className="text-white text-2xl font-bold uppercase tracking-tight mb-2">
                  {item.header}
                </h3>
                <p className="text-white/80 text-sm italic mb-4">
                   {item.subHeading}
                </p>
                <div className="w-16 h-[2px] bg-white/40 mb-6" />
                <p className="text-white text-[15px] leading-relaxed font-light">
                  {item.text}
                </p>
                
                {/* Plus Icon at bottom right with animation */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#184174] shadow-xl group-hover:scale-125 group-hover:rotate-90 transition-all duration-500 transform">
                    <Plus size={20} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

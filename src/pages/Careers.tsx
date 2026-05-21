import { motion } from 'motion/react';
import React from 'react';
import { Ship, Settings, ShieldCheck, Box, Anchor, Hammer, Target, Briefcase, Cpu } from 'lucide-react';

const careerOpportunities = [
  { title: "Marine Support Services", icon: Ship },
  { title: "Facility Maintenance", icon: Settings },
  { title: "Integrity Testing", icon: ShieldCheck },
  { title: "Equipment & Material Supply", icon: Box },
  { title: "Shipping & Ship Management", icon: Anchor },
  { title: "Engineering Services", icon: Hammer },
];

export default function Careers() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[650px] lg:min-h-[700px] flex flex-col justify-center bg-brand-dark overflow-hidden">
        {/* Background Layer with Gradient & Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Exact gradient from home and about pages */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/75 to-brand-dark/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=2000&q=80" 
            alt="Careers hero background" 
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
            Careers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg mt-4 max-w-2xl font-light"
          >
            Be a part of a team that's shaping the future of energy operations.
          </motion.p>
        </div>
      </header>

      {/* Leadership & Culture Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="text-brand-dark text-3xl font-bold leading-tight max-w-md">
            Strong Leadership and A Supportive Team Culture
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-5 h-5 bg-brand-orange shrink-0 mt-1" />
              <p className="text-[14px] text-[#333] leading-relaxed">
                A welcoming and adaptable workplace that encourages independence, and meaningful contributions from every team member.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-5 h-5 bg-brand-orange shrink-0 mt-1" />
              <p className="text-[14px] text-[#333] leading-relaxed">
                Opportunities to contribute to impactful projects that promote industrial innovation and development across Africa.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-5 h-5 bg-brand-orange shrink-0 mt-1" />
              <p className="text-[14px] text-[#333] leading-relaxed">
                A strong commitment to continuous growth through learning opportunities and mentorship programs designed to help you succeed.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-5 h-5 bg-brand-orange shrink-0 mt-1" />
              <p className="text-[14px] text-[#333] leading-relaxed">
                A team of driven and talented professionals who enjoy growing together, and building a better future.
              </p>
            </div>
          </div>
        </div>
        
        <div className="aspect-[3/4] bg-brand-placeholder w-full max-w-lg ml-auto" />
      </section>

      {/* Career Opportunities Grid Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto w-full text-center">
        <h2 className="text-brand-dark text-4xl font-bold mb-4 uppercase tracking-tight inline-block relative">
          Career Opportunities
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-brand-orange" />
        </h2>
        
        <p className="text-[#555] text-[14px] mt-12 mb-16 max-w-3xl mx-auto">
          At Expinno, we invest in people ready to solve tomorrow's challenges. Discover opportunities to grow, lead, and innovate in a fast-paced, forward-thinking environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerOpportunities.map((opportunity, idx) => {
            const Icon = opportunity.icon;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white hover:bg-[#184174] transition-all duration-300 p-10 pt-16 pb-12 flex flex-col items-start text-left min-h-[400px] group cursor-pointer shadow-md rounded-sm border-2 border-gray-100"
              >
                <div className="mb-6">
                  <div className="text-[#184174] group-hover:text-brand-orange transition-colors duration-300">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-brand-dark group-hover:text-white text-2xl font-bold mb-auto leading-tight transition-colors duration-300">
                  {opportunity.title}
                </h3>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 border border-brand-dark/20 text-brand-dark group-hover:text-white group-hover:border-white/40 px-8 py-2.5 text-[11px] font-bold rounded-full hover:bg-white hover:text-brand-dark transition-all tracking-wider uppercase"
                >
                  Check Vacancies
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Values Animation Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[21/9] min-h-[500px] border-2 border-[#184174] rounded-3xl flex items-center justify-center p-8 md:p-20 overflow-hidden bg-white">
            {/* Inner Path Border Decal - Thin line like the image */}
            <div className="absolute inset-8 md:inset-16 border border-[#184174]/60 rounded-2xl pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1.5 bg-[#184174]/5 rounded-full"
              >
                <span className="text-[#184174] text-[10px] font-bold uppercase tracking-widest">What We Value</span>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-dark text-lg md:text-2xl lg:text-3xl font-medium text-center leading-tight tracking-tight"
              >
                Contribute to projects that directly impact the efficiency, safety, and sustainability of global energy operations.
              </motion.p>
              <div className="w-24 h-[1px] bg-[#184174]/40 mx-auto" />
            </div>
            
            {/* Moving Boxes - Rectangular but with look from image (Maroon background corrected to Navy) */}
            {[
              { text: "Impact", delay: 0, icon: "Target" },
              { text: "Hard work", delay: 4, icon: "Briefcase" },
              { text: "Innovation", delay: 8, icon: "Cpu" }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="absolute z-20"
                animate={{
                  left: ["4%", "96%", "96%", "4%", "4%"],
                  top: ["8%", "8%", "92%", "92%", "8%"],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                  delay: value.delay,
                }}
                style={{ x: "-50%", y: "-50%" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-[#184174] text-white px-6 py-4 rounded-xl cursor-pointer group transition-all duration-300 flex flex-col items-center gap-2 border border-white/20 min-w-[140px]"
                >
                  <div className="text-white transition-transform duration-300 group-hover:scale-110">
                    {value.icon === "Target" && <Target size={24} strokeWidth={1.5} />}
                    {value.icon === "Briefcase" && <Briefcase size={24} strokeWidth={1.5} />}
                    {value.icon === "Cpu" && <Cpu size={24} strokeWidth={1.5} />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300">
                    {value.text}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

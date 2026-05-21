import { motion } from 'motion/react';
import { Target, ShieldCheck, TrendingUp, Compass } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[650px] lg:min-h-[700px] flex flex-col justify-center bg-brand-dark overflow-hidden">
        {/* Background Layer with Gradient & Image Logic like Home */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Exact gradient from home page */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/75 to-brand-dark/30 z-10" />
          
          {/* Background image */}
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80" 
            alt="About hero background" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero Section Content */}
        <div className="relative z-20 pt-48 pb-32 flex flex-col items-start text-left px-12 md:px-20 xl:px-24 max-w-7xl mx-auto w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-6xl font-bold max-w-4xl tracking-tight"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg mt-4 max-w-2xl font-light"
          >
            Learn about what Expinno believes in and how we promote quality delivery.
          </motion.p>
        </div>
      </header>

      {/* Mission and Vision Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-white border border-gray-100/90 shadow-sm rounded-2xl py-20 px-8 md:px-16 xl:px-20">
          {/* Subtle global network background image */}
          <div className="absolute inset-0 z-0 opacity-[0.16] pointer-events-none select-none">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
              alt="Global map background pattern" 
              className="w-full h-full object-cover object-center" 
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-brand-dark text-4xl font-bold text-center mb-16 flex flex-col items-center gap-4 uppercase tracking-tight">
              Mission and Vision
              <span className="w-80 h-[2px] bg-brand-orange" />
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {/* Left Column - Mission */}
              <div className="space-y-6 flex flex-col justify-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-brand-dark text-2xl font-bold uppercase tracking-tight">
                    Our Mission
                  </h3>
                </div>
                <div className="space-y-6 text-[#333] text-[15px] leading-relaxed font-semibold">
                  <p>
                    Our mission is to curtail the dereliction in the project execution among Nigerian companies through the deployment of our professional, competent, and committed personnel in handling our client's projects.
                  </p>
                  <p>
                    EXPINNO LIMITED is committed to putting its Clients first and to promote long-term relationships within the Private and Public sectors.
                  </p>
                </div>
              </div>
              
              {/* Right Column - Vision */}
              <div className="space-y-6 flex flex-col justify-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Compass className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="text-brand-dark text-2xl font-bold uppercase tracking-tight">
                    Our Vision
                  </h3>
                </div>
                <div className="space-y-6 text-[#333] text-[15px] leading-relaxed font-semibold">
                  <p>
                    Expinno's objective is to deliver optimal cost-effective solutions that fulfill the Client's, Engineer's, and Local Authority's specifications and requirements expeditiously, and with complete legitimacy.
                  </p>
                  <p>
                    Our success greatly depends on our proven capability to adapt to the unique, changing, and challenging developmental needs of Nigeria and Africa at large.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="join-our-team" className="bg-[#184174] py-24 px-4 md:px-8 xl:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-white text-5xl font-bold mb-6 tracking-tight">
              Join Our Team
            </h2>
            <p className="text-white/90 text-xl font-light max-w-2xl leading-relaxed">
              Build a career that powers the future of energy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              id="cta-explore-careers"
              to="/careers" 
              className="bg-brand-orange text-white px-10 py-4 font-bold rounded-sm hover:brightness-110 transition-all shadow-2xl block text-center uppercase tracking-widest text-sm"
            >
              Explore Careers
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto text-center">
        <h2 className="text-brand-dark text-4xl font-bold mb-4 uppercase tracking-tight">Executive Leadership</h2>
        <p className="text-[#444] text-[16px] max-w-4xl mx-auto mb-10 leading-relaxed font-light">
          Our founding executives bring a wealth of experience, forward-thinking leadership, and a strong dedication to excellence, creativity, and innovation in the daily operations of the company.
        </p>
        
        {/* Custom underline with orange segment as in design */}
        <div className="w-full max-w-xl mx-auto h-[2px] bg-[#ddd] relative mb-20">
            <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-full bg-brand-orange" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[3/4] bg-brand-placeholder-alt" />
          ))}
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto text-center bg-gray-50/50">
        <h2 className="text-brand-dark text-4xl font-bold mb-16 flex flex-col items-center gap-4 uppercase tracking-tight">
          Our Difference
          <span className="w-64 h-[2px] bg-brand-orange" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="text-white w-8 h-8" />,
              text: "Tailored Solutions for Critical Energy Environments"
            },
            {
              icon: <ShieldCheck className="text-white w-8 h-8" />,
              text: "Deep Understanding of Local Content and Compliance"
            },
            {
              icon: <TrendingUp className="text-white w-8 h-8" />,
              text: "Future-Forward Thinking Rooted in Technical Discipline"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 border-2 border-gray-100 border-t-4 border-t-brand-orange flex flex-col items-center text-center group transition-all duration-300"
            >
              <div className="w-20 h-20 bg-brand-dark rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ring-4 ring-brand-orange/10">
                {item.icon}
              </div>
              <h3 className="text-brand-dark font-bold text-xl leading-snug uppercase tracking-tight">
                {item.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

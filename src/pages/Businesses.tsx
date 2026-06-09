import { motion } from 'motion/react';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface SubsidiaryDetails {
  header: string;
  subheader: string;
  bgImage: string;
  externalLink?: string;
}

const subsidiariesData: Record<string, SubsidiaryDetails> = {
  "topp-it-consulting": {
    header: "TOPP IT CONSULTING",
    subheader: "Empowering enterprises with cutting-edge software solutions, digital transformation, and strategic IT advice.",
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80",
    externalLink: "https://titcl.net"
  },
  "expinno-ltd": {
    header: "EXPINNO LTD",
    subheader: "Driving global innovation and technological advancement through pioneering research and development.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
  },
  "expinno-oil-gas": {
    header: "EXPINNO OIL & GAS",
    subheader: "Delivering sustainable, secure, and highly efficient energy solutions for global markets.",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80",
    externalLink: "https://expinno.ng"
  },
  "expinno-consulting": {
    header: "EXPINNO CONSULTING",
    subheader: "Catalyzing regional and corporate growth with expert business analysis and financial engineering.",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
  },
  "expinno-realty": {
    header: "EXPINNO REALTY",
    subheader: "Carving modern horizons with premium residential and commercial infrastructure developments.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
  },
  "expinno-agro": {
    header: "EXPINNO AGRO",
    subheader: "Nurturing the future of agricultural production and distribution with automated farming technology.",
    bgImage: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=2000&q=80"
  },
  "kay-aai-ltd": {
    header: "KAY & AAI LTD",
    subheader: "Pioneering world-class logistics, trading, and supply chain management services.",
    bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
  },
  "kay-aai-farm": {
    header: "KAY & AAI FARM",
    subheader: "Sustainably producing high-yield global organic produce and modern livestock operations.",
    bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80"
  },
  "adekolus-foundation": {
    header: "THE ADEKOLU’S FOUNDATION",
    subheader: "Nurturing social advancement, educational outreach, and empowerment initiatives for communities.",
    bgImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=80"
  }
};

export default function Businesses() {
  const { slug } = useParams<{ slug?: string }>();

  // Look up custom information or default to general subsidiaries page
  const currentDetails: SubsidiaryDetails = slug && subsidiariesData[slug] ? subsidiariesData[slug] : {
    header: "OUR SUBSIDIARIES",
    subheader: "We function in several diverse sectors that operate on a global scale.",
    bgImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-[650px] lg:min-h-[700px] flex flex-col justify-center bg-brand-dark overflow-hidden border-b border-white">
        {/* Background Layer with Gradient & Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Exact gradient from home and about pages */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/75 to-brand-dark/30 z-10" />
          <img 
            key={currentDetails.bgImage} // Re-trigger entry animation when changing route / image
            src={currentDetails.bgImage} 
            alt={`${currentDetails.header} hero background`} 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 pt-48 pb-32 flex flex-col items-start px-12 md:px-20 xl:px-24 max-w-7xl mx-auto w-full text-left">
          <motion.h1 
            key={`${currentDetails.header}-title`} // Animated transition on route swap
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-6xl font-bold tracking-tight uppercase"
          >
            {currentDetails.header}
          </motion.h1>
          <motion.p
            key={`${currentDetails.header}-desc`} // Animated transition on route swap
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl font-light font-sans"
          >
            {currentDetails.subheader}
          </motion.p>
          
          {/* Centered Learn More button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            {currentDetails.externalLink ? (
              <a 
                href={currentDetails.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-3.5 bg-brand-orange text-white text-[13px] font-bold rounded-md hover:bg-white hover:text-brand-dark transition-all uppercase tracking-wider shadow-lg shadow-brand-orange/20 cursor-pointer text-center"
                id="learn-more-btn"
              >
                <span>LEARN MORE</span>
              </a>
            ) : (
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-3.5 bg-brand-orange text-white text-[13px] font-bold rounded-md hover:bg-white hover:text-brand-dark transition-all uppercase tracking-wider shadow-lg shadow-brand-orange/20 cursor-pointer text-center"
                id="learn-more-btn"
              >
                <span>LEARN MORE</span>
              </Link>
            )}
          </motion.div>
        </div>
      </header>
    </div>
  );
}

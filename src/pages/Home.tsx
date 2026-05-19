import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Waves, 
  Wrench, 
  ShieldCheck, 
  Box, 
  Anchor, 
  Clock,
  ChevronRight as ChevronRightIcon 
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  category: string;
}

export default function Home() {
  const [news, setNews] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rss')
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setNews(data.items);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch news:', err);
        setLoading(false);
      });
  }, []);

  const businesses = [
    {
      title: "Marine Support Services",
      desc: "End-to-end marine services designed to ensure vessel readiness, crew efficiency, and system reliability.",
      icon: <Waves className="w-6 h-6 text-white" />,
      iconBg: "bg-[#F39200]" // Brand Orange
    },
    {
      title: "Facility Maintenance",
      desc: "Comprehensive facility maintenance programs to preserve performance, prevent corrosion, and extend asset life.",
      icon: <Wrench className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />,
      iconBg: "bg-blue-50" // Light Tint
    },
    {
      title: "Integrity Testing",
      desc: "Proactive assurance for vessels, tanks, and pipeline systems using advanced pressure testing and leak detection.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      iconBg: "bg-[#F39200]" // Brand Orange
    },
    {
      title: "Equipment & Material Supply",
      desc: "Procurement and supply of mission-critical components with full traceability, OEM certification, and quality assurance.",
      icon: <Box className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />,
      iconBg: "bg-blue-50" // Light Tint
    },
    {
      title: "Shipping & Ship Management",
      desc: "Full lifecycle vessel management covering scheduling, crewing, maintenance, compliance, and cargo delivery.",
      icon: <Anchor className="w-6 h-6 text-white" />,
      iconBg: "bg-[#F39200]" // Brand Orange
    },
    {
      title: "Engineering Services",
      desc: "Engineering solutions aligned to strategic business outcomes for pipelines, offshore structures, and energy systems.",
      icon: <Clock className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />,
      iconBg: "bg-blue-50" // Light Tint
    }
  ];

  const projects = [
    {
      title: "North Sea Platform Upgrade",
      desc: "Comprehensive integrity testing and maintenance program for a major North Sea oil platform, improving operational efficiency by 28%.",
      image: "https://images.unsplash.com/photo-1454165833741-3d96afca1f4e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Gulf Coast Pipeline Network",
      desc: "Smart monitoring system implementation for a 250-mile pipeline network along the Gulf Coast, reducing maintenance costs by 35%.",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "African Offshore Fleet Management",
      desc: "Comprehensive ship management services for an offshore supply fleet operating in West Africa, optimizing logistics and reducing fuel consumption.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Middle East Terminal Expansion",
      desc: "Engineering and facility maintenance for a major terminal expansion project in the Middle East, delivered on time and under budget.",
      image: "https://images.unsplash.com/photo-1441333332162-951972ca0012?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  const [projectIndex, setProjectIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxProjectIndex = Math.max(0, projects.length - visibleCount);

  const nextProject = () => {
    setProjectIndex(prev => Math.min(prev + 1, maxProjectIndex));
  };

  const prevProject = () => {
    setProjectIndex(prev => Math.max(prev - 1, 0));
  };

  // Reset index if it exceeds max after resize
  useEffect(() => {
    if (projectIndex > maxProjectIndex) {
      setProjectIndex(maxProjectIndex);
    }
  }, [maxProjectIndex, projectIndex]);

  const getTranslateX = () => {
    if (visibleCount === 3) return `calc(-${projectIndex * (100 / 3)}% - ${projectIndex * (32 / 3)}px)`;
    if (visibleCount === 2) return `calc(-${projectIndex * (100 / 2)}% - ${projectIndex * (32 / 2)}px)`;
    return `calc(-${projectIndex * 100}% - ${projectIndex * 32}px)`;
  };

  return (
    <>
      {/* 2. Main Navbar with Hero Background (Subtle Gradient) */}
      <header className="relative min-h-[600px] flex flex-col bg-brand-dark">
        {/* Background Layer with Gradient & Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Subtle Gradient Overlay - ensuring text remain readable and blend is smooth */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
          
          {/* Main Hero Background Image - Using a verified robust Unsplash URL */}
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=2000&q=80" 
            alt="Hero background beauty portrait" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* 3. Hero Section Content */}
        <div className="relative z-20 pt-48 pb-32 flex flex-col items-start text-left px-12 md:px-20 xl:px-24 max-w-7xl mx-auto w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-6xl font-bold max-w-4xl leading-[1.1] tracking-tight"
          >
            Lorem Ipsum Is Simply
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg mt-6 max-w-2xl font-light"
          >
            Lorem Ipsum is simply dummy text of the print
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 px-10 py-3.5 bg-brand-blue text-white text-[13px] font-bold rounded-md hover:bg-brand-blue/90 transition-all uppercase tracking-wider"
          >
            Somes Us
          </motion.button>

          {/* Hero Indicator/Slider Elements */}
          <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange/80 transition-colors focus:outline-none">
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-brand-orange/80 transition-colors focus:outline-none">
              <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="mt-28 w-32 h-[3.5px] bg-white/20 relative">
            <div className="absolute left-0 top-0 h-full w-12 bg-white" />
          </div>
        </div>
      </header>

      {/* 4. About Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-6">
          <p className="text-[#333] text-[14px] leading-relaxed">
            Expinno limited is a Nigerian Incorporated company and is locally owned. The company offers Engineering Construction and Construction, Project management. Expinno limited is dedicated to organizations, government agencies or Individuals seeking construction services.
          </p>
          <p className="text-[#333] text-[14px] leading-relaxed">
            We aim to drive the future of smarter, safer, and more resilient energy operations through a fusion of innovation, maritime excellence, and engineering leadership, we power the energy industry's next frontier.
          </p>
        </div>
        <div className="relative aspect-[4/3] bg-brand-placeholder overflow-hidden group">
          {/* Mimicking the skyscraper black and white image from the design */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125" />
        </div>
      </section>

      {/* 5. News and Events Section - Updated with RSS Feed */}
      <section id="news" className="bg-brand-dark py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-16">
          <h2 className="text-white text-4xl font-bold mb-16 flex flex-col items-center text-center">
            Latest News & Updates
            <span className="w-64 max-w-full h-[2px] bg-brand-orange mt-4" />
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-6 flex flex-col h-[400px] group hover:border-brand-orange transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-brand-orange text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </p>
                    <p className="text-white/40 text-[9px] uppercase tracking-wider">
                      {item.pubDate ? new Date(item.pubDate).toLocaleDateString() : 'Recent'}
                    </p>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-4 group-hover:text-brand-orange transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-4 overflow-hidden">
                    {item.contentSnippet}
                  </p>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-widest hover:text-brand-orange transition-colors border-t border-white/10 pt-4"
                  >
                    Read More <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <button className="px-10 py-3 bg-brand-orange text-white text-[13px] font-bold rounded-full hover:bg-brand-orange/90 transition-colors uppercase tracking-wider">
              See All Announcements
            </button>
          </div>
        </div>
      </section>

      {/* 6. Our Businesses Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto w-full bg-white">
        <h2 className="text-brand-dark text-4xl font-bold text-center mb-20 flex flex-col items-center gap-4 uppercase tracking-tight">
          Our Businesses
          <span className="w-48 max-w-full h-[2px] bg-brand-orange" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {businesses.map((biz, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 border-2 border-gray-100 border-t-4 border-t-brand-orange flex flex-col items-start text-left group transition-all duration-300 hover:border-[#184174]"
            >
              <div className={`w-14 h-14 ${biz.iconBg} rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#184174] transition-all duration-300`}>
                {biz.icon}
              </div>
              <h3 className="text-brand-dark font-extrabold text-xl leading-snug mb-4 uppercase tracking-tight">
                {biz.title}
              </h3>
              <p className="text-[#555] text-[14px] leading-relaxed mb-8 flex-grow">
                {biz.desc}
              </p>
              <Link 
                to="/businesses" 
                className="flex items-center gap-2 text-brand-blue font-bold text-[11px] uppercase tracking-widest hover:text-brand-orange transition-colors group-hover:gap-3"
              >
                Learn More <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="bg-brand-dark py-24 px-4 md:px-8 xl:px-16 text-center">
        <h2 className="text-white text-4xl font-bold mb-16 flex flex-col items-center gap-4">
          Why Choose Us?
          <span className="w-64 max-w-full h-[2px] bg-brand-orange" />
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16">
          <div className="flex items-center justify-center md:justify-start gap-4 text-white text-lg font-bold">
            <div className="w-6 h-6 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-brand-orange rounded-full" />
            </div>
            <span>Our 24/7 Marine Response</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 text-white text-lg font-bold">
            <div className="w-6 h-6 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-brand-orange rounded-full" />
            </div>
            <span>Local Market Expertise</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 text-white text-lg font-bold">
            <div className="w-6 h-6 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-brand-orange rounded-full" />
            </div>
            <span>99.9% Operational Uptime</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 text-white text-lg font-bold">
            <div className="w-6 h-6 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0">
              <div className="w-2.5 h-2.5 bg-brand-orange rounded-full" />
            </div>
            <span>Trusted by International OEM's</span>
          </div>
        </div>
      </section>

      {/* 8. Featured Projects Section */}
      <section id="projects" className="bg-brand-blue/5 py-24 px-4 md:px-8 xl:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-16 gap-6 text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-brand-dark text-4xl font-bold mb-6 tracking-tight flex flex-col items-center">
                <span className="border-b-[3px] border-brand-orange pb-2">
                  Featured Projects
                </span>
              </h2>
              <p className="text-[#444] text-[15px] max-w-4xl leading-relaxed">
                We are not only exceptional in our project executions; we are distinct in the level of commitment and honesty in all our dealings, ensuring success and cost-efficiency in every endeavor. We are committed to offering the best construction knowledge and service.
              </p>
            </div>
          </div>

          <div className="relative mb-8">
            <motion.div 
              className="flex gap-8"
              animate={{ x: getTranslateX() }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="min-w-full md:min-w-[calc((100%-32px)/2)] lg:min-w-[calc((100%-64px)/3)] flex flex-col bg-white rounded-xl shadow-lg border border-gray-50 overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8 flex flex-col items-start text-left flex-grow">
                    <h3 className="text-brand-blue font-bold text-xl leading-snug mb-4 group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed mb-8 flex-grow">
                      {project.desc}
                    </p>
                    <Link 
                      to="/projects" 
                      className="flex items-center gap-2 text-brand-orange font-bold text-[13px] hover:gap-3 transition-all"
                    >
                      View Project <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Buttons - placed bottom right as requested */}
          <div className="flex justify-end gap-3 px-4">
            <button 
              onClick={prevProject}
              disabled={projectIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue hover:bg-gray-50 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400 disabled:hover:bg-transparent transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextProject}
              disabled={projectIndex === maxProjectIndex}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue hover:bg-gray-50 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400 disabled:hover:bg-transparent transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

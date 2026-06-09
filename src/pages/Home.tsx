import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Sparkles,
  Cpu,
  X,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  ShieldCheck,
  RefreshCw,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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

  // Expinno Smart AI Market Analysis States
  interface AnalysisResult {
    summary: string;
    marketImpact: string;
    sentiment: "BULLISH" | "BEARISH" | "NEUTRAL" | string;
    affectedSectors: string[];
    keyTakeaways: string[];
    riskRating: "LOW" | "MEDIUM" | "HIGH" | string;
    strategicAdvisory: string;
    isDemo?: boolean;
    explanation?: string;
  }

  interface SummaryResult {
    bullets: string[];
    conclusion: string;
    isDemo?: boolean;
    explanation?: string;
  }

  const [analyzingItem, setAnalyzingItem] = useState<RSSItem | null>(null);
  const [modalMode, setModalMode] = useState<'analysis' | 'summary' | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [summary, setSummary] = useState<SummaryResult | null>(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const analysisSteps = [
    "Harvesting regulatory filings and media sentiment...",
    "Correlating index histories & asset liquidity...",
    "Assessing supply chain & operational micro-risks...",
    "Structuring strategic trade recommendations...",
    "Finalizing Expinno AI business intelligence report..."
  ];

  const summarySteps = [
    "Extracting key event milestones...",
    "Filtering narrative background vectors...",
    "Synthesizing descriptive bullet summaries...",
    "Formulating definitive strategic big-picture conclusion...",
    "Finalizing quick-read summary report..."
  ];

  const activeSteps = modalMode === 'summary' ? summarySteps : analysisSteps;

  useEffect(() => {
    let interval: any;
    if (analysisLoading) {
      interval = setInterval(() => {
        setLoadingStep(prev => (prev + 1) % activeSteps.length);
      }, 1500);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [analysisLoading, modalMode]);

  const handleAnalyze = async (item: RSSItem) => {
    setAnalyzingItem(item);
    setModalMode('analysis');
    setAnalysis(null);
    setSummary(null);
    setAnalysisLoading(true);
    setAnalysisError(null);

    try {
      const response = await fetch("/api/analyze-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: item.title,
          snippet: item.contentSnippet,
          link: item.link,
          category: item.category
        })
      });

      if (!response.ok) {
        throw new Error("Failed to generate AI analysis.");
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (err: any) {
      console.error(err);
      setAnalysisError("The Expinno AI core could not complete analysis at this time. Please ensure the GEMINI_API_KEY is properly set in Settings > Secrets.");
    } finally {
      setAnalysisLoading(false);
    }
  };

  const handleSummarize = async (item: RSSItem) => {
    setAnalyzingItem(item);
    setModalMode('summary');
    setAnalysis(null);
    setSummary(null);
    setAnalysisLoading(true);
    setAnalysisError(null);

    try {
      const response = await fetch("/api/summarize-news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: item.title,
          snippet: item.contentSnippet,
          link: item.link,
          category: item.category
        })
      });

      if (!response.ok) {
        throw new Error("Failed to generate quick summary.");
      }

      const data = await response.json();
      setSummary(data);
    } catch (err: any) {
      console.error(err);
      setAnalysisError("The Expinno AI quick summarizer could not complete the report at this time. Please ensure the GEMINI_API_KEY is properly set in Settings > Secrets.");
    } finally {
      setAnalysisLoading(false);
    }
  };

  const heroSlides = [
    {
      category: "TOPP IT CONSULTING",
      headline: "Engineering complex cloud architectures for enterprise clients to boost data transaction security by 45%.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/topp-it-consulting"
    },
    {
      category: "EXPINNO LTD",
      headline: "Pioneering industrial automation models that accelerated research and development cycle timelines by 40%.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/expinno-ltd"
    },
    {
      category: "EXPINNO OIL & GAS",
      headline: "Securing dual-pipeline integrity certification at key offshore terminals, eliminating pressure loss entirely.",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/expinno-oil-gas"
    },
    {
      category: "EXPINNO CONSULTING",
      headline: "Structuring regional investment capital strategies that secured major structural growth and liquidity.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/expinno-consulting"
    },
    {
      category: "EXPINNO REALTY",
      headline: "Delivering architectural commercial landmarks ahead of schedule, redefining urban infrastructure standards.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/expinno-realty"
    },
    {
      category: "EXPINNO AGRO",
      headline: "Deploying intelligent vertical farming technologies, expanding seasonal grain yield output by 35%.",
      image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/expinno-agro"
    },
    {
      category: "KAY & AAI LTD",
      headline: "Optimizing trans-continental freight networks to cut global supply chain delivery times by 25%.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/kay-aai-ltd"
    },
    {
      category: "KAY & AAI FARM",
      headline: "Scaling zero-carbon organic livestock methods to assure consistent, premium municipal food security.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/kay-aai-farm"
    },
    {
      category: "THE ADEKOLU’S FOUNDATION",
      headline: "Empowering regional communities by constructing solar-powered water grids and digital learning spaces.",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=80",
      buttonText: "Learn more",
      link: "/businesses/adekolus-foundation"
    }
  ];

  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex(prev => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextHeroSlide = () => {
    setActiveHeroIndex(prev => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setActiveHeroIndex(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

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

  const subsidiariesProjectsData: Record<string, { title: string; desc: string; image: string; }[]> = {
    "topp-it-consulting": [
      {
        title: "Unified Banking Cloud Migration",
        desc: "Successfully migrated core infrastructure containing over 5 million customer databases into a high-availability, hybrid AWS & Azure environment for a leading tier-1 financial institution.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Cyber Operations Center (SOC) Implementation",
        desc: "Deployed 24/7 security orchestration, anomaly detection, and endpoint protection across 50 international retail branch offices, minimizing threat vulnerability to zero.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Multi-National Manufacturing ERP Rollout",
        desc: "Built and scaled a bespoke ERP platform to integrate logistics, human resources, inventory management, and raw material tracking for a major glass bottle manufacturer.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Smart Conversational AI Telephony Integrations",
        desc: "Developed a deep learning-powered interactive voice responder and automated routing model for a telecommunications provider, driving resolution speeds up by 60%.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    "expinno-ltd": [
      {
        title: "Clean Tech Advanced Propulsion Prototypes",
        desc: "Engineered experimental alternative fuel system chambers under strict laboratory testing protocols, delivering high efficiency combustion results.",
        image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Next-Gen Semiconductor Pick-and-Place Automation",
        desc: "Programmed and deployed precise mechanical arm systems with state-of-the-art visual sensors, processing up to 10,000 sub-components per hour.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Smart City Environmental Network Deployments",
        desc: "Manufactured and distributed smart wireless nodes designed to continuously poll and transmit key atmospheric indicators back to regional processing centers.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Micro-Algae Industrial Sequestration Trials",
        desc: "Directed successful pilot installation of closed-loop modular bioreactors designed to securely filter carbon dioxide outputs from major refining facilities.",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    "expinno-oil-gas": [
      {
        title: "Subsea Pipeline Corrosion Protection Program",
        desc: "Conducted high-precision composite shell wraps and automatic sacrificial anode replacements along a 75-kilometer deepwater subsea pipeline.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "45-Day Scheduled Gas Refinery Overhaul",
        desc: "Re-engineered high-pressure compressor stages, safety instrumentation valves, and central processing manifolds with zero incidents.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Acoustic Sensing & Safe Shutdown Network Setup",
        desc: "Outfitted strategic sections of crude oil transmission structures with acoustic fiber-optic cables to sense micro-leaks within a 0.5-second threshold.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Offshore Supply Tanker Fueling Infrastructure",
        desc: "Established a highly reliable, high-volume marine bunkering station compliant with international environmental spill protection regulations.",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    "expinno-consulting": [
      {
        title: "West-African Capital Access & Restructuring Advisor",
        desc: "Guided regional infrastructure authorities on structuring critical municipal capital instruments, enabling billions in development capital.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "FMCG Manufacturing Supply Efficiency Modeling",
        desc: "Performed exhaustive lean audit, reducing assembly scrap rates by 18% and optimizing shipping schedules across major national distribution networks.",
        image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Fintech-Banking Acquisition Financial Due Diligence",
        desc: "Served as lead advisory team evaluating high-growth payment processor software assets, validating financial health and technology stack defensibility.",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Regional Electricity Grid Privatization Strategy",
        desc: "Drafted extensive regulatory compliance, pricing formulas, and expansion roadmap guidelines to optimize electrical power delivery.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    "expinno-realty": [
      {
        title: "Capital Tech Towers Marina Bayfront",
        desc: "Constructed a premium 24-story glass-walled office complex built with advanced energy conservation layouts, double-glazed windows, and smart elevators.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Eco-Haven Residential Estates Planning",
        desc: "Designed a 150-unit energy-independent smart village incorporating solar tiles, micro-grid water recycling pipelines, and massive public green belts.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Inland Container Terminal Warehouses",
        desc: "Constructed massive 400,000 square feet temperature-controlled facilities with high structural floor loads suited for automated heavy machinery.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Old Marina Mixed-Use Development Zone",
        desc: "Repurposed abandoned seaside shipping warehouses into upscale modern retail, housing, and dining hotspots while preserving heritage brickwork facades.",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    "expinno-agro": [
      {
        title: "Automated Leafy Green Production Chambers",
        desc: "Implemented sensor-driven liquid feeding formulas, spectrum-controlled LED growth arrays, and automated harvesting trays.",
        image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "50,000-Metric-Ton High-Capacity Smart Silos",
        desc: "Constructed modern grain reserves outfitted with advanced relative humidity sensors and automated nitrogen injection to prevent pest infestations.",
        image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Drip Irrigation & Solar Pump Network Setup",
        desc: "Installed vast solar arrays to drive subsurface drip lines over 2,000 hectares of arid agricultural plots, decreasing water loss by 45%.",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "National Mobile Soil Testing Laboratory Fleet",
        desc: "Launched a portable fleet of analytic testing vans equipped with spectro-chemical scanners to provide instant nitrogen, phosphorus, and potassium soil mapping.",
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    "kay-aai-ltd": [
      {
        title: "Intermodal Rail & Ocean Terminals Integration",
        desc: "Established streamlined tracking and customs clearances linking central railway links with major coastal container harbors for seamless transport.",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Dry Bulk Material Global Distribution Services",
        desc: "Coordinated safe, highly-efficient dispatch of raw minerals, metals, and construction aggregate products across dynamic international maritime lanes.",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Temperature-Sensitive Pharmaceutical Transport",
        desc: "Outfitted a modern fleet of freight trucks with continuous cold-monitoring systems and backup generators to ship life-saving medical supplies safely.",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Single-Window Simplified Import Clearance Protocol",
        desc: "Developed automated tariff assessment software interfaces and dedicated clearing agents to expedite ocean freight customs times down to 24 hours.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    "kay-aai-farm": [
      {
        title: "Fully Regenerative Free-Range Aviaries",
        desc: "Configured advanced circular ecosystems transforming biomass agricultural waste directly into nutrient-dense local chicken feed formulations.",
        image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "GPS-Fenced Grass-Fed Cattle Grazing Management",
        desc: "Deployed modern virtual livestock collars and automated gates to partition pastures, raising forage yield and optimizing soil health.",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Bio-Dynamic Compost Processing Operations",
        desc: "Manufactured and packaged highly concentrated, chemical-free compost products derived from organic livestock matter for nationwide agricultural markets.",
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Co-op Tilapia & Floating Salad Rafts Setup",
        desc: "Engineered premium land-based marine systems recirculating fish effluents to fertilize diverse water-grown leafy greens with zero chemical additives.",
        image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    "adekolus-foundation": [
      {
        title: "Off-Grid Community Water Filtration Kiosks",
        desc: "Erected 15 automated solar-pumping wells and reverse-osmosis filtration setups, delivering potable water to over 30,000 rural residents.",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Tech-Empower Community Computer Laboratories",
        desc: "Funded and built 5 modern educational facilities fully equipped with high-speed satellite internet, hardware, and complete coding curriculums.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Solar-Backed Village Emergency Health Centers",
        desc: "Supplied critical pediatric medical equipment, essential pharmaceuticals, and robust solar battery storage systems to rural general clinics.",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop"
      },
      {
        title: "Agricultural & Retail Women Cooperative Seed Capital",
        desc: "Distributed interest-free capital and financial management mentorship sessions, fostering sustainable local commerce and crop trading lines.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop"
      }
    ]
  };

  const subsidiariesList = [
    { key: "topp-it-consulting", name: "TOPP IT CONSULTING" },
    { key: "expinno-ltd", name: "EXPINNO LTD" },
    { key: "expinno-oil-gas", name: "EXPINNO OIL & GAS" },
    { key: "expinno-consulting", name: "EXPINNO CONSULTING" },
    { key: "expinno-realty", name: "EXPINNO REALTY" },
    { key: "expinno-agro", name: "EXPINNO AGRO" },
    { key: "kay-aai-ltd", name: "KAY & AAI LTD" },
    { key: "kay-aai-farm", name: "KAY & AAI FARM" },
    { key: "adekolus-foundation", name: "THE ADEKOLU’S FOUNDATION" }
  ];

  const [activeSub, setActiveSub] = useState("topp-it-consulting");
  const currentProjects = subsidiariesProjectsData[activeSub] || [];

  const [projectIndex, setProjectIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setProjectIndex(0);
  }, [activeSub]);

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

  const maxProjectIndex = Math.max(0, currentProjects.length - visibleCount);

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
      <header className="relative min-h-[650px] lg:min-h-[700px] flex flex-col justify-center bg-brand-dark overflow-hidden">
        {/* Background Layer with Gradient & Crossfading Hero Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Subtle Gradient Overlay - ensuring text remains readable and blend is smooth */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/75 to-brand-dark/30 z-10" />
          
          {heroSlides.map((slide, idx) => (
            <motion.img 
              key={idx}
              src={slide.image} 
              alt={slide.category} 
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: idx === activeHeroIndex ? 1 : 0,
                scale: idx === activeHeroIndex ? 1 : 1.05
              }}
              transition={{ duration: 1.2 }}
            />
          ))}
        </div>

        {/* 3. Hero Section Content */}
        <div className="relative z-20 pt-48 pb-32 flex flex-col items-start text-left px-12 md:px-20 xl:px-24 max-w-7xl mx-auto w-full">
          <div className="min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col items-start justify-center">
            <motion.div
              key={`cat-${activeHeroIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-3 py-1 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange rounded text-[10px] md:text-[11px] font-extrabold uppercase tracking-widest mb-6 inline-block"
            >
              {heroSlides[activeHeroIndex].category}
            </motion.div>
            <motion.h1 
              key={`hl-${activeHeroIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl leading-[1.25] tracking-tight"
            >
              {heroSlides[activeHeroIndex].headline}
            </motion.h1>
          </div>
          
          <motion.div
            key={`btn-${activeHeroIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8"
          >
            <Link 
              to={heroSlides[activeHeroIndex].link}
              className="inline-block px-10 py-3.5 bg-brand-blue text-white text-[13px] font-bold rounded-md hover:bg-brand-orange transition-all uppercase tracking-wider shadow-lg hover:shadow-brand-orange/20"
            >
              {heroSlides[activeHeroIndex].buttonText}
            </Link>
          </motion.div>

          {/* Hero Navigation Buttons */}
          <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
            <button 
              onClick={prevHeroSlide}
              className="w-10 h-10 rounded-full bg-brand-dark/50 border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all focus:outline-none backdrop-blur-sm cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
            <button 
              onClick={nextHeroSlide}
              className="w-10 h-10 rounded-full bg-brand-dark/50 border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all focus:outline-none backdrop-blur-sm cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Custom Horizontal Segmented Progress Indicator */}
          <div className="mt-16 flex gap-2 h-[3px] w-full max-w-sm bg-white/10 rounded-full overflow-hidden">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveHeroIndex(idx)}
                className={`flex-grow h-full transition-all duration-500 cursor-pointer ${
                  idx === activeHeroIndex ? 'bg-brand-orange' : 'bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* 4. About Section */}
      <section className="py-24 px-4 md:px-8 xl:px-16 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-6">
          <p className="text-[#333] text-[14px] leading-relaxed">
            Expinno Groups is a Nigerian Incorporated company and is locally owned. The company offers Engineering Construction and Construction, Project management. Expinno Groups is dedicated to organizations, government agencies or Individuals seeking construction services.
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

      {/* 5. News and Events Section - Updated with RSS Feed & AI Analyst Core */}
      <section id="news" className="bg-brand-dark py-24 border-b-[3px] border-white/30 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-16">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-white text-4xl font-bold flex flex-col items-center">
              News Hub
              <span className="w-64 max-w-full h-[2px] bg-brand-orange mt-4" />
            </h2>
            <p className="text-white/50 text-xs tracking-wider uppercase font-mono flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Real-Time Technology, Trade, Stock, Economy & Agriculture Insights
            </p>
          </div>
          
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
                    {item.contentSnippet || "No description provided."}
                  </p>
                                 <div className="mt-auto border-t border-white/10 pt-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAnalyze(item)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange text-white font-bold text-[10px] uppercase tracking-wider hover:bg-brand-orange/80 transition-all cursor-pointer shadow-sm shadow-brand-orange/20"
                        >
                          <Sparkles size={11} className="text-white animate-pulse" />
                          Analyze Impact
                        </button>
                        <button
                          onClick={() => handleSummarize(item)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white font-bold text-[10px] uppercase tracking-wider hover:bg-white/20 hover:border-brand-orange hover:text-brand-orange transition-all cursor-pointer"
                        >
                          Summarize
                        </button>
                      </div>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/50 hover:text-white font-semibold text-[10px] uppercase tracking-wider transition-colors ml-auto"
                      >
                        Source <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <button className="px-10 py-3 bg-[#1e293b] border border-white/10 text-white text-[13px] font-bold rounded-full hover:bg-white/5 transition-colors uppercase tracking-wider flex items-center gap-2 mx-auto">
              <Globe size={14} className="text-brand-orange animate-pulse" /> Feed Supervised by Expinno Advisors
            </button>
          </div>
        </div>
      </section>

      {/* 5.1 AI Analysis Modal */}
      <AnimatePresence>
        {analyzingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!analysisLoading) setAnalyzingItem(null);
              }}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121824] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative z-10 text-left shadow-2xl overflow-hidden"
            >
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-brand-orange/20 to-brand-blue/20 border-b border-white/10 p-6 md:p-8 pr-16 md:pr-20 flex justify-between items-start gap-4 flex-shrink-0 relative">
                <div className="space-y-2 flex-grow">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-[10px] font-bold tracking-widest uppercase flex items-center gap-1">
                      <Cpu size={12} className="animate-pulse" />
                      {((modalMode === 'analysis' && analysis?.isDemo) || (modalMode === 'summary' && summary?.isDemo)) ? "Expinno Smart Fallback" : "Expinno Intelligence Core"}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] uppercase font-semibold">
                      {analyzingItem.category}
                    </span>
                  </div>
                  <h3 className="text-white font-extrabold text-xl md:text-2xl leading-snug tracking-tight">
                    {analyzingItem.title}
                  </h3>
                  {((modalMode === 'analysis' && analysis?.isDemo && analysis?.explanation) || 
                    (modalMode === 'summary' && summary?.isDemo && summary?.explanation)) && (
                    <p className="text-xs text-brand-orange/95 bg-brand-orange/5 border border-brand-orange/20 px-3 py-2 rounded-lg font-mono leading-relaxed mt-3 flex items-start gap-1.5 shadow-sm">
                      <span className="text-base leading-none">💡</span>
                      <span>{modalMode === 'analysis' ? analysis?.explanation : summary?.explanation}</span>
                    </p>
                  )}
                </div>
                <button 
                  onClick={() => setAnalyzingItem(null)}
                  className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer z-20 flex-shrink-0"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-grow">
                {analysisLoading ? (
                  /* Loading State */
                  <div className="py-16 flex flex-col items-center justify-center space-y-8 text-center max-w-lg mx-auto">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-4 border-brand-orange/20 border-t-brand-orange animate-spin" />
                      <Cpu size={24} className="text-brand-orange absolute inset-0 m-auto animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-lg">
                        {modalMode === 'summary' ? "Synthesizing News Summary" : "Financing & Market Deep Analysis"}
                      </h4>
                      <p className="text-brand-orange/80 font-mono text-xs tracking-wide h-8">
                        {activeSteps[loadingStep]}
                      </p>
                      <p className="text-white/40 text-[11px]">
                        {modalMode === 'summary' 
                          ? "Distilling event narrative and writing professional event outlines with Gemini 3.5..."
                          : "Correlating real-time sector indices, macro headlines, and sentiment vectors using Gemini 3.5..."}
                      </p>
                    </div>
                  </div>
                ) : analysisError ? (
                  /* Error State */
                  <div className="py-12 flex flex-col items-center text-center space-y-6 max-w-md mx-auto">
                    <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500">
                      <AlertTriangle size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white font-bold text-lg">Analysis Intimacy Interrupted</h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {analysisError}
                      </p>
                    </div>
                    <button 
                      onClick={() => modalMode === 'summary' ? handleSummarize(analyzingItem) : handleAnalyze(analyzingItem)}
                      className="px-6 py-2.5 rounded-full bg-brand-orange text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-orange/90 transition-colors flex items-center gap-2 cursor-pointer shadow-md mx-auto"
                    >
                      <RefreshCw size={14} /> Retry Query
                    </button>
                  </div>
                ) : modalMode === 'summary' && summary ? (
                  /* Summary Loaded State */
                  <div className="space-y-8 max-w-3xl mx-auto">
                    <div className="border-b border-white/5 pb-4">
                      <h4 className="text-brand-orange font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                        <span>■</span> Brief Event Summary Bulletins
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {summary.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">
                          <span className="w-6 h-6 rounded-md bg-brand-orange/10 text-brand-orange border border-brand-orange/20 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0 font-mono">
                            {bIdx + 1}
                          </span>
                          <p className="text-white/90 text-sm md:text-base leading-relaxed font-sans">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Dedicated Conclusion Block requested by user */}
                    <div className="mt-8 bg-gradient-to-br from-brand-orange/10 to-brand-blue/10 border border-brand-orange/30 rounded-xl p-6 md:p-8 space-y-3 relative overflow-hidden shadow-lg shadow-brand-orange/5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
                      <h5 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                        Executive Conclusion
                      </h5>
                      <p className="text-white text-sm md:text-[15px] leading-relaxed font-serif italic text-white/90 pr-4">
                        "{summary.conclusion}"
                      </p>
                    </div>
                  </div>
                ) : modalMode === 'analysis' && analysis ? (
                  /* Success/Loaded State */
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left & Center Main Section */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Executive Summary */}
                      <div className="space-y-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider text-brand-orange flex items-center gap-2">
                          <span className="text-xs">■</span> Executive Summary
                        </h4>
                        <p className="text-white/90 text-[15px] leading-relaxed bg-white/[0.02] border border-white/5 rounded-xl p-5 italic">
                          "{analysis.summary}"
                        </p>
                      </div>

                      {/* Technical Situation & Impact */}
                      <div className="space-y-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider text-brand-orange flex items-center gap-2">
                          <span className="text-xs">■</span> Financial Situation & Market Impact
                        </h4>
                        <div className="text-white/70 text-[14px] leading-relaxed space-y-4 font-sans">
                          {analysis.marketImpact.split('\n').map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>
                      </div>

                      {/* Key Takeaways */}
                      <div className="space-y-4 bg-white/[0.02] border border-white/5 rounded-xl p-6">
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider text-brand-orange">
                          Key Takeaways
                        </h4>
                        <ul className="space-y-3 text-white/80 text-[13px]">
                          {analysis.keyTakeaways.map((takeaway, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0">
                                {tIdx + 1}
                              </span>
                              <span className="leading-relaxed">{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Info Panel */}
                    <div className="space-y-6">
                      
                      {/* Sentiment Panel */}
                      <div className="border border-white/10 rounded-xl p-5 bg-[#171f2f] flex flex-col items-center text-center space-y-3">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Macro Trading Sentiment</span>
                        {analysis.sentiment.toUpperCase() === "BULLISH" ? (
                          <div className="space-y-2 flex flex-col items-center">
                            <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold text-xs tracking-widest uppercase flex items-center gap-2 shadow-sm shadow-emerald-500/10">
                              <TrendingUp size={14} /> Bullish Stance
                            </span>
                            <p className="text-white/50 text-[11px] leading-relaxed">
                              Reflects potential trade accretion, strong buyer volume, and high sector liquidity.
                            </p>
                          </div>
                        ) : analysis.sentiment.toUpperCase() === "BEARISH" ? (
                          <div className="space-y-2 flex flex-col items-center">
                            <span className="px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-extrabold text-xs tracking-widest uppercase flex items-center gap-2 shadow-sm shadow-rose-500/10">
                              <TrendingDown size={14} /> Bearish Stance
                            </span>
                            <p className="text-white/50 text-[11px] leading-relaxed">
                              Signifies profit consolidation limits, localized asset contraction, or macro risk premium.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2 flex flex-col items-center">
                            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-extrabold text-xs tracking-widest uppercase flex items-center gap-2">
                              <RefreshCw size={12} className="animate-spin-slow" /> Neutral Stance
                            </span>
                            <p className="text-white/50 text-[11px] leading-relaxed">
                              Indicates price stabilization, balanced trading buy/sell pressure, and consolidated expectations.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Risk Rating Indicator */}
                      <div className="border border-white/10 rounded-xl p-5 bg-[#171f2f] text-left space-y-3">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block">Operational Volatility Rating</span>
                        <div className="flex items-center gap-3">
                          <span className={`px-2.5 py-0.5 text-[10px] font-black uppercase rounded ${
                            analysis.riskRating.toUpperCase() === 'HIGH' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            analysis.riskRating.toUpperCase() === 'MEDIUM' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                            'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          }`}>
                            {analysis.riskRating} RISK
                          </span>
                        </div>
                        {/* Custom gauge meters */}
                        <div className="grid grid-cols-3 gap-1 h-1 w-full bg-white/5 rounded overflow-hidden">
                          <div className={`h-full rounded ${analysis.riskRating.toUpperCase() === 'LOW' || analysis.riskRating.toUpperCase() === 'MEDIUM' || analysis.riskRating.toUpperCase() === 'HIGH' ? 'bg-emerald-500' : 'bg-white/10'}`} />
                          <div className={`h-full rounded ${analysis.riskRating.toUpperCase() === 'MEDIUM' || analysis.riskRating.toUpperCase() === 'HIGH' ? 'bg-amber-400' : 'bg-white/10'}`} />
                          <div className={`h-full rounded ${analysis.riskRating.toUpperCase() === 'HIGH' ? 'bg-red-500' : 'bg-white/10'}`} />
                        </div>
                      </div>

                      {/* Affected Sectors */}
                      <div className="border border-white/10 rounded-xl p-5 bg-[#171f2f] text-left space-y-3">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block">Linked Entities & Sectors</span>
                        <div className="flex flex-wrap gap-1.5">
                          {analysis.affectedSectors.map((sector, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/80 rounded text-[11px] font-mono"
                            >
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Strategic Advisory */}
                      <div className="border border-white/10 rounded-xl p-5 bg-brand-orange/5 border-brand-orange/20 text-left space-y-3">
                        <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest block flex items-center gap-1.5">
                          <ShieldCheck size={12} /> Expinno Advisory
                        </span>
                        <p className="text-white/80 text-[11px] leading-relaxed">
                          {analysis.strategicAdvisory}
                        </p>
                      </div>

                    </div>

                  </div>
                ) : null}
              </div>

              {/* Drawer Footer Disclaimer */}
              <div className="border-t border-white/10 px-6 py-4 bg-[#0e131d] flex flex-col sm:flex-row justify-between items-center gap-4 flex-shrink-0 rounded-b-2xl">
                <p className="text-white/30 font-mono text-[9px] text-center sm:text-left leading-relaxed max-w-2xl">
                  DISCLAIMER: AI-derived reports are models based on live feeds. These insights do not constitute formal fiduciary or legal stock investment recommendations.
                </p>
                <button
                  onClick={() => setAnalyzingItem(null)}
                  className="px-6 py-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer shadow-md shadow-brand-orange/10 flex-shrink-0"
                >
                  Close Analysis
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
              <p className="text-[#444] text-[15px] max-w-4xl leading-relaxed mb-4">
                We are not only exceptional in our project executions; we are distinct in the level of commitment and honesty in all our dealings, ensuring success and cost-efficiency in every endeavor. We are committed to offering the best construction knowledge and service.
              </p>
            </div>
          </div>

          {/* Subsidiary Filter Controls */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 max-w-5xl mx-auto">
            {subsidiariesList.map((sub) => {
              const isActive = activeSub === sub.key;
              return (
                <button
                  key={sub.key}
                  onClick={() => setActiveSub(sub.key)}
                  className={`px-4 md:px-5 py-2.5 rounded-full border text-[11px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-brand-orange text-white border-brand-orange shadow-md shadow-brand-orange/20" 
                      : "bg-white text-slate-600 border-gray-200 hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5"
                  }`}
                >
                  {sub.name}
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <motion.div 
              className="flex gap-8"
              animate={{ x: getTranslateX() }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {currentProjects.map((project, idx) => (
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
                    <h3 className="text-brand-blue font-bold text-xl leading-snug mb-4 group-hover:text-brand-orange transition-colors min-h-[56px] flex items-center">
                      {project.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed mb-8 flex-grow line-clamp-4">
                      {project.desc}
                    </p>
                    <Link 
                      to={`/businesses/${activeSub}`} 
                      className="flex items-center gap-2 text-brand-orange font-bold text-[13px] hover:gap-3 transition-all mt-auto"
                    >
                      Learn More <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Buttons - placed bottom right as requested */}
          <div className="flex justify-end gap-3 px-4">
            <button 
              onClick={prevProject}
              disabled={projectIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue hover:bg-gray-50 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400 disabled:hover:bg-transparent transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextProject}
              disabled={projectIndex === maxProjectIndex}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue hover:bg-gray-50 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-400 disabled:hover:bg-transparent transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Moon, Shield, DollarSign, Globe, Menu, X } from 'lucide-react';
import logo from './assets/moonex-logo.png'
import text from './assets/moonex-text.png'
import reddit from './assets/reddit-icon.jpeg'
import telegram from './assets/telegram-icon.png'
import twitter from './assets/twitter-icon.png'
import uniswapLogo from './assets/uniswap-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SpaceBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#040714]">
    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#040714] via-[#061024] to-[#040714] opacity-95"></div>
    
    {/* Orbital lines - updated with white color and more curves */}
    <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {/* Upper orbit */}
      <path
        d="M-10,30 C30,10 70,50 110,30"
        className="text-white/10 stroke-current"
        fill="none"
        strokeWidth="0.3"
      />
      {/* Middle orbit */}
      <path
        d="M-10,50 C20,20 80,80 110,50"
        className="text-white/10 stroke-current"
        fill="none"
        strokeWidth="0.3"
      />
      {/* Lower orbit */}
      <path
        d="M-10,70 C40,30 60,80 110,60"
        className="text-white/10 stroke-current"
        fill="none"
        strokeWidth="0.3"
      />
      {/* Additional curved orbits */}
      <path
        d="M-10,40 C35,15 65,85 110,40"
        className="text-white/5 stroke-current"
        fill="none"
        strokeWidth="0.2"
      />
      <path
        d="M-10,60 C45,25 55,75 110,55"
        className="text-white/5 stroke-current"
        fill="none"
        strokeWidth="0.2"
      />
      {/* New orbital lines around Hero */}
      <path
        d="M-10,90 C30,70 70,110 110,90"
        className="text-white/12 stroke-current"
        fill="none"
        strokeWidth="0.3"
      />
      <path
        d="M-10,100 C40,80 60,120 110,100"
        className="text-white/10 stroke-current"
        fill="none"
        strokeWidth="0.3"
      />
      <path
        d="M0,85 C25,65 75,105 100,85"
        className="text-white/8 stroke-current"
        fill="none"
        strokeWidth="0.25"
      />
      {/* Curved orbits around Hero text */}
      <path
        d="M20,65 C40,55 60,75 80,65"
        className="text-white/15 stroke-current"
        fill="none"
        strokeWidth="0.2"
      />
      <path
        d="M10,75 C35,65 65,85 90,75"
        className="text-white/12 stroke-current"
        fill="none"
        strokeWidth="0.2"
      />
    </svg>

    {/* Stars */}
    <div className="absolute inset-0">
      {/* Stars around the yellow orb - adjusted positions */}
      <div className="absolute top-[18%] right-[15%] animate-pulse" style={{ animationDelay: '0.3s' }}>
        <FontAwesomeIcon 
          icon={faStar} 
          className="text-white h-5 w-5"
          style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))' }}
        />
      </div>
      <div className="absolute top-[38%] right-[15%] animate-pulse" style={{ animationDelay: '0.7s' }}>
        <FontAwesomeIcon 
          icon={faStar} 
          className="text-white h-5 w-5"
          style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))' }}
        />
      </div>
      
      {/* Additional stars around orb - adjusted positions */}
      <div className="absolute top-[25%] right-[25%] animate-pulse" style={{ animationDelay: '1.2s' }}>
        <FontAwesomeIcon 
          icon={faStar} 
          className="text-white h-3 w-3"
          style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))' }}
        />
      </div>
      <div className="absolute top-[30%] right-[8%] animate-pulse" style={{ animationDelay: '1.4s' }}>
        <FontAwesomeIcon 
          icon={faStar} 
          className="text-white h-3 w-3"
          style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))' }}
        />
      </div>
      {/* New stars around and below Hero */}
      {[
        // Stars below Hero title
        { top: '65%', left: '20%', size: 'h-4 w-4', delay: '0.3s' },
        { top: '70%', left: '40%', size: 'h-3 w-3', delay: '0.8s' },
        { top: '75%', left: '60%', size: 'h-4 w-4', delay: '1.2s' },
        { top: '80%', left: '30%', size: 'h-3 w-3', delay: '0.5s' },
        { top: '85%', left: '50%', size: 'h-2 w-2', delay: '1.5s' },
        { top: '90%', left: '70%', size: 'h-3 w-3', delay: '0.9s' },
        
        // Stars around Hero text
        { top: '55%', left: '25%', size: 'h-2 w-2', delay: '1.1s' },
        { top: '58%', left: '45%', size: 'h-3 w-3', delay: '0.6s' },
        { top: '62%', left: '65%', size: 'h-2 w-2', delay: '1.4s' },
        { top: '52%', left: '75%', size: 'h-4 w-4', delay: '0.7s' },
        
        // Additional scattered stars
        { top: '68%', left: '10%', size: 'h-2 w-2', delay: '1.0s' },
        { top: '72%', left: '85%', size: 'h-3 w-3', delay: '0.4s' },
        { top: '78%', left: '35%', size: 'h-2 w-2', delay: '1.3s' },
      ].map((star, i) => (
        <div key={i} className={`absolute ${star.top} ${star.left} animate-pulse`} style={{ animationDelay: star.delay }}>
          <FontAwesomeIcon 
            icon={faStar} 
            className={`text-white ${star.size}`}
            style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))' }}
          />
        </div>
      ))}
    </div>

    {/* Yellow glowing orb - moved higher */}
    <div className="absolute top-[8%] right-[8%] w-40 h-40">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 opacity-20 blur-[100px]"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 opacity-40 blur-[50px]"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400 opacity-70"></div>
    </div>

    {/* Additional scattered stars throughout */}
    {[
      // Top section stars
      { top: '5%', left: '10%', size: 'h-3 w-3', delay: '0.2s' },
      { top: '8%', left: '25%', size: 'h-2 w-2', delay: '0.7s' },
      { top: '12%', left: '45%', size: 'h-4 w-4', delay: '1.1s' },
      { top: '15%', left: '65%', size: 'h-2 w-2', delay: '0.4s' },
      { top: '18%', left: '85%', size: 'h-3 w-3', delay: '0.9s' },
      
      // Middle section stars
      { top: '35%', left: '15%', size: 'h-4 w-4', delay: '0.6s' },
      { top: '38%', left: '35%', size: 'h-2 w-2', delay: '1.2s' },
      { top: '42%', left: '55%', size: 'h-3 w-3', delay: '0.3s' },
      { top: '45%', left: '75%', size: 'h-2 w-2', delay: '0.8s' },
      { top: '48%', left: '95%', size: 'h-4 w-4', delay: '1.4s' },
      
      // Bottom section stars
      { top: '65%', left: '5%', size: 'h-3 w-3', delay: '0.5s' },
      { top: '68%', left: '25%', size: 'h-2 w-2', delay: '1.0s' },
      { top: '72%', left: '45%', size: 'h-4 w-4', delay: '1.5s' },
      { top: '75%', left: '65%', size: 'h-2 w-2', delay: '0.7s' },
      { top: '78%', left: '85%', size: 'h-3 w-3', delay: '1.3s' },
      
      // Extra scattered stars
      { top: '22%', left: '18%', size: 'h-2 w-2', delay: '1.6s' },
      { top: '28%', left: '38%', size: 'h-3 w-3', delay: '0.4s' },
      { top: '52%', left: '62%', size: 'h-2 w-2', delay: '0.9s' },
      { top: '58%', left: '82%', size: 'h-4 w-4', delay: '1.2s' },
      { top: '82%', left: '42%', size: 'h-3 w-3', delay: '0.6s' }
    ].map((star, index) => (
      <div 
        key={index}
        className="absolute animate-pulse"
        style={{ 
          top: star.top, 
          left: star.left, 
          animationDelay: star.delay 
        }}
      >
        <FontAwesomeIcon 
          icon={faStar} 
          className={`text-white ${star.size}`}
          style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.6))' }}
        />
      </div>
    ))}
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <nav className="relative z-50 font-raleway">
      {/* Main navbar */}
      <div className="flex justify-between items-center p-4 md:px-12 lg:px-16 bg-transparent">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="MoonEX Logo" 
            className="h-12 w-auto object-contain"
          />
          <img 
            src={text}
            alt="MoonEX" 
            className="h-2 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Roadmap</a>
              <a href="#" className="hover:text-white transition-colors">FAQs</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors md:px-8">
              Connect Wallet
            </button>
          </>
        )}

        {/* Mobile Navigation Button */}
        {isMobile && (
          <div className="flex items-center gap-4">
            <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors md:px-8" onClick={() => setIsMenuOpen(true)}>
              Connect Wallet
            </button>
            <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors md:px-8" onClick={() => setIsMenuOpen(true)}>
              Menu
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-0 bg-white p-8">
            <div className="flex flex-col gap-8">
              <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors md:px-8" onClick={() => setIsMenuOpen(false)}>
                Connect Wallet
              </button>
              <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-medium hover:bg-yellow-300 transition-colors md:px-8" onClick={() => setIsMenuOpen(false)}>
                Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="relative text-center py-20 md:py-24 lg:py-32">
    <h1 className="font-neue-machina text-4xl font-bold text-white mb-4 md:text-5xl lg:text-6xl">
      Trusted Multi-Chain
      <span className="text-yellow-400 block mt-2">DEX Platform</span>
    </h1>
    <p className="font-raleway text-gray-400 mb-8 text-lg md:text-xl">
      Trade, earn, and own crypto on the all-in-one multi-chain DEX
    </p>
    <div className="flex gap-4 justify-center">
      <button className="font-raleway bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors md:px-8 md:py-3">
        Connect Wallet
      </button>
      <button className="font-raleway border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg font-medium hover:bg-yellow-400/10 transition-colors md:px-8 md:py-3">
        Trade Crypto
      </button>
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="relative py-16 md:py-20 lg:py-24">
    <h2 className="font-neue-machina text-3xl font-bold mb-12 text-left px-8 md:px-12 lg:px-16">
      <span className="text-white">Why</span>{" "}
      <span className="text-yellow-400">MoonEX</span>{" "}
      <span className="text-white">?</span>
    </h2>
    <div className="font-raleway bg-[#0A0E1F]/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 border border-gray-800/20">
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="col-span-1">
          <span className="text-yellow-400 font-medium">Comparison</span>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="MoonEX Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className="text-white">Moonex</span>
          </div>
        </div>
        <div className="text-center">
          <img 
            src={uniswapLogo} 
            alt="Uniswap Logo" 
            className="h-8 w-auto mx-auto"
          />
        </div>
      </div>
      {/* Comparison rows with white blur effect */}
      {[
        "Point no one",
        "Point no two this",
        "Point no two this",
        "Point no two this",
        "Point no two this"
      ].map((point, i) => (
        <div key={i} className="grid grid-cols-3 gap-8 py-4 border-b border-gray-800/20 hover:bg-white/5 transition-colors backdrop-blur-sm">
          <div className="text-gray-300">{point}</div>
          <div className="text-center text-green-400">✓</div>
          <div className="text-center text-red-400">✗</div>
        </div>
      ))}
    </div>
  </div>
);

const Features = () => (
  <div className="relative py-16 md:py-20 lg:py-24">
    <h2 className="font-neue-machina text-3xl font-bold text-white mb-12 text-center">
      Our <span className="text-yellow-400">Features</span>
    </h2>
    <div className="font-raleway grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        {
          icon: <DollarSign className="text-yellow-400" size={32} />,
          title: "Cheapest TXs",
          description: "Exchange tokens rapidly regardless of the attached possible transaction price"
        },
        {
          icon: <Shield className="text-yellow-400" size={32} />,
          title: "CerTik",
          description: "We are audited by CerTik, ranked as the leading security focused platform"
        },
        {
          icon: <Moon className="text-yellow-400" size={32} />,
          title: "No Contract Sells",
          description: "No contract sells to fund the marketing wallet"
        },
        {
          icon: <Globe className="text-yellow-400" size={32} />,
          title: "CrossDex Support",
          description: "Exchange tokens chain agnostic on the cheapest possible transaction price"
        }
      ].map((feature, i) => (
        <div 
          key={i} 
          className="group relative bg-[#0A0E1F]/30 backdrop-blur-sm p-6 rounded-2xl text-center 
                     border border-gray-800/20 hover:bg-white/5 transition-all duration-300
                     hover:border-gray-700/30"
        >
          {/* Blur effect overlay */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl backdrop-blur-[2px]"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-4 flex justify-center">
              <div className="p-3 rounded-full bg-[#0A0E1F]/50 backdrop-blur-sm">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-white font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Stars around features */}
    {[
      { top: '0', left: '20%', size: 'h-3 w-3', delay: '0.4s' },
      { top: '10%', right: '25%', size: 'h-2 w-2', delay: '0.9s' },
      { top: '50%', left: '8%', size: 'h-4 w-4', delay: '1.3s' },
      { top: '80%', right: '12%', size: 'h-3 w-3', delay: '0.6s' }
    ].map((star, index) => (
      <div 
        key={index}
        className="absolute animate-pulse"
        style={{ 
          top: star.top, 
          left: star.left, 
          right: star.right
        }}
      >
        <FontAwesomeIcon 
          icon={faStar} 
          className={`text-white ${star.size}`}
          style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.6))' }}
        />
      </div>
    ))}
  </div>
);

const FAQs = () => (
  <div className="relative py-16 md:py-20 lg:py-24">
    <h2 className="font-neue-machina text-3xl font-bold mb-12 text-center">
      <span className="text-yellow-400">FAQs</span>
    </h2>
    <div className="font-raleway space-y-4 max-w-3xl mx-auto">
      {[
        {
          question: "How do I get a Referral Code?",
          answer: "You can get a referral code by..."
        },
        {
          question: "Do I get rewarded in tokens & ETH when I refer buyers?",
          answer: "Yes, you receive rewards in both tokens and ETH..."
        },
        {
          question: "How do I get a Referral Code?",
          answer: "Another way to get a referral code..."
        }
      ].map((faq, i) => (
        <div key={i} className="bg-[#0A0E1F]/30 backdrop-blur-sm rounded-xl border border-gray-800/20">
          <button className="w-full px-6 py-4 flex justify-between items-center text-left">
            <span className="text-gray-300 hover:text-white transition-colors">
              {faq.question}
            </span>
            <span className="text-yellow-400 text-2xl ml-4">
              {/* Plus icon */}
              +
            </span>
          </button>
          {/* Add conditional rendering for answer */}
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="relative py-8 border-t border-gray-800/30 md:py-12 lg:py-16">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left Column - Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="MoonEX Logo" 
            className="h-12 w-auto object-contain"
          />
          <img 
            src={text}
            alt="MoonEX" 
            className="h-2 w-auto object-contain"
          />
        </div>

        {/* Middle Column - Links */}
        <div className="flex gap-8 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">About Us</a>
          <a href="#" className="hover:text-white transition-colors">Roadmap</a>
          <a href="#" className="hover:text-white transition-colors">FAQs</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>

        {/* Right Column - Social */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-medium">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={twitter} alt="Twitter" className="h-8 w-8" />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={telegram} alt="Telegram" className="h-8 w-8" />
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={reddit} alt="Reddit" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Stars around footer */}
    {[
      { top: '10%', left: '10%', size: 'h-2 w-2', delay: '0.4s' },
      { top: '30%', right: '20%', size: 'h-3 w-3', delay: '0.9s' },
      { top: '70%', left: '25%', size: 'h-2 w-2', delay: '1.2s' },
      { top: '85%', right: '15%', size: 'h-3 w-3', delay: '0.6s' }
    ].map((star, index) => (
      <div 
        key={index}
        className="absolute animate-pulse"
        style={{ 
          top: star.top, 
          left: star.left, 
          right: star.right,
          animationDelay: star.delay 
        }}
      >
        <FontAwesomeIcon 
          icon={faStar} 
          className={`text-white ${star.size}`}
          style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.6))' }}
        />
      </div>
    ))}
  </footer>
);

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#040714] overflow-hidden">
      <SpaceBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <Navbar />
        <Hero />
        <ComparisonTable />
        <Features />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
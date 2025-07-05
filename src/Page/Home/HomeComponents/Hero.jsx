import React, { useState, useEffect, useRef, useMemo } from "react";

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    satisfaction: 0,
    years: 0,
    experts: 0
  });
  
  const statsRef = useRef({
    projects: 0,
    satisfaction: 0,
    years: 0,
    experts: 0
  });
  
  const animationRef = useRef(null);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40;
      const y = (e.clientY - innerHeight / 2) / 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Stats counting animation
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // ms
    const startTime = performance.now();
    const targets = { projects: 250, satisfaction: 98, years: 15, experts: 50 };
    
    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic easing function for smooth animation
      const easeProgress = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      const newStats = {
        projects: Math.floor(easeProgress * targets.projects),
        satisfaction: Math.floor(easeProgress * targets.satisfaction),
        years: Math.floor(easeProgress * targets.years),
        experts: Math.floor(easeProgress * targets.experts)
      };
      
      setStats(newStats);
      statsRef.current = newStats;
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateCount);
      } else {
        // Ensure final values are exact
        setStats(targets);
        statsRef.current = targets;
      }
    };
    
    animationRef.current = requestAnimationFrame(animateCount);
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  // Layer data with your images
  const layers = useMemo(() => [
    {
      src: "https://muffingroup.com/betheme/assets/images/bebuilder-topbar.svg",
      style: "top-[15%] left-[8%] w-40",
      speed: 3,
      floatClass: "animate-float-slow",
    },
    {
      src: "https://muffingroup.com/betheme/assets/images/bebuilder-content-stores.webp",
      style: "top-[20%] right-[12%] w-48",
      speed: 3,
      floatClass: "animate-float-medium",
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      style: "bottom-[20%] left-[12%] w-44 rounded-xl",
      speed: 3,
      floatClass: "animate-float-fast",
    },
    {
      src: "https://muffingroup.com/betheme/assets/images/bebuilder-items-woo.svg",
      style: "bottom-[15%] right-[8%] w-44",
      speed: 3,
      floatClass: "animate-float-slowest",
    }
  ], []);

  // Precomputed particles data
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 8 + 2,
      duration: Math.random() * 4 + 2,
      xFactor: Math.random() * 2 - 1,
      yFactor: Math.random() * 2 - 1
    }))
  , []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
      
      {/* Floating gradient blobs */}
      <div 
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-r from-blue-700/15 to-indigo-700/15 blur-3xl animate-pulse-slow"
        style={{
          transform: `translate(${offset.x * -0.15}px, ${offset.y * -0.15}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-teal-600/10 to-emerald-600/10 blur-3xl animate-pulse-medium"
        style={{
          transform: `translate(${offset.x * 0.2}px, ${offset.y * 0.2}px)`
        }}
      ></div>
      
      {/* Layer images with parallax effect */}
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`absolute z-0 hidden md:block pointer-events-none transition-transform duration-[600ms] ease-out ${layer.style} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `translate(${offset.x * layer.speed}px, ${offset.y * layer.speed}px) rotateX(${offset.y * 0.5}deg) rotateY(${offset.x * 0.5}deg)`,
          }}
        >
          <div className={`${layer.floatClass} transition-all duration-[1000ms] ease-out`}>
            <img
              src={layer.src}
              alt={`layer-${index}`}
              className="rounded-lg border border-white/10 shadow-xl"
              style={{
                transform: "perspective(800px) translateZ(30px)",
              }}
            />
          </div>
        </div>
      ))}
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`inline-block px-5 py-2 bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
          >
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase font-sans">Premium Digital Solutions</span>
          </div>
          
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="block font-light tracking-tight">Elevate Your Digital</span>
            <span className="block mt-3 font-medium">
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Presence</span> with Excellence
            </span>
          </h1>
          
          <p 
            className={`text-lg text-gray-300 max-w-2xl mx-auto mb-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Professional web development and software solutions crafted to transform your business and deliver exceptional digital experiences.
          </p>
          
          <div 
            className={`flex flex-wrap justify-center gap-5 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <button className="px-8 py-3.5 bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-800 hover:to-cyan-800 text-white font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center group cursor-pointer">
              <span className="transition-all duration-300 group-hover:tracking-wider">Start a Project</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-all duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button className="px-8 py-3.5 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center group cursor-pointer">
              <span className="transition-all duration-300 group-hover:tracking-wider">View Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-all duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Stats section */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">{stats.projects}+</div>
              <div className="text-gray-400 text-sm tracking-wider">PROJECTS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">{stats.satisfaction}%</div>
              <div className="text-gray-400 text-sm tracking-wider">SATISFACTION</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">{stats.years}+</div>
              <div className="text-gray-400 text-sm tracking-wider">YEARS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">{stats.experts}+</div>
              <div className="text-gray-400 text-sm tracking-wider">EXPERTS</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-950 to-transparent z-20"></div>
      
      {/* Animated floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/10 animate-pulse"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: `translate(${offset.x * particle.xFactor}px, ${offset.y * particle.yFactor}px)`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default Hero;
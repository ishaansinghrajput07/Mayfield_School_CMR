import { useState } from "react";
import { ChevronDown } from "lucide-react";
import HeroSlider from "./HeroSlider";
import HeroContent from "./HeroContent";
import HeroParticles from "./HeroParticles";
import "./hero.css";
// NOTE: I completely removed the 'import HeroStats from "./HeroStats";' line here

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="top" className="hero-section relative w-full overflow-hidden bg-navy-900">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <HeroSlider setActiveSlide={setActiveSlide} />
        <HeroParticles />
      </div>
      <div className="hero-copy-panel" aria-hidden="true" />

      {/* 2. LAYOUT WRAPPER */}
      <div className="relative z-10 mx-auto flex h-full min-h-[640px] w-full max-w-[1440px] flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:justify-center lg:px-8 lg:pb-20 lg:pt-32 xl:px-10">
        
        {/* TOP HALF: Text & Buttons */}
        <div className="flex w-full flex-col justify-center text-left md:max-w-[34rem] lg:max-w-[37rem]">
          <HeroContent activeSlide={activeSlide} />
        </div>

        {/* BOTTOM HALF: Scroll Indicator Only */}
        <div className="flex w-full flex-col items-center justify-end">
          
          {/* <HeroStats /> HAS BEEN COMPLETELY REMOVED FROM HERE */}

          {/* Scroll indicator */}
          <a
            href="/?section=about"
            aria-label="Scroll to learn more"
            className="scroll-indicator mt-6 hidden lg:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:-translate-y-1">
              <ChevronDown size={16} />
            </span>
          </a>
        </div>
        
      </div>
    </section>
  );
}
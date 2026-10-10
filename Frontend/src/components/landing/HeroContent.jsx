import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { heroSlides } from "./HeroData";

export default function HeroContent({ activeSlide }) {
  const slide = heroSlides[activeSlide];

  return (
    <div className="hero-home-copy w-full max-w-[38rem]">
      <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:mb-5 sm:text-sm">
        <GraduationCap size={18} className="text-school-red" />
        CBSE Affiliated School <span className="text-white/60">•</span> Indore
      </div>

      <h1 className="hero-school-title">
        St. Thomas Convent School
      </h1>

      <p className="hero-school-motto">
        Learning with purpose. Growing with confidence.
      </p>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/95 sm:mt-6 sm:text-lg sm:leading-8">
        A welcoming school community where strong academics, caring guidance,
        and opportunities beyond the classroom help every learner thrive.
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="mt-5 max-w-xl border-l-2 border-school-red pl-4 sm:mt-6"
          aria-live="polite"
        >
          <p className="text-sm font-semibold text-white sm:text-base">{slide.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-white/80">{slide.subtitle}</p>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-6 flex flex-wrap gap-3 sm:mt-7"
      >
        <Link
          to="/?section=contact"
          className="hero-btn inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-school-red px-5 py-3 text-sm font-semibold text-white hover:bg-school-red-dark sm:px-6"
        >
          Contact the School
          <ArrowRight size={18} />
        </Link>

        <Link
          to="/?section=admissions"
          className="hero-btn inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/50 bg-navy-800/40 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md sm:px-6"
        >
          <BookOpen size={18} />
          Admissions
        </Link>
      </motion.div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-wide text-white/90 sm:mt-6 sm:text-sm">
        <span>Since 2010</span>
        <span>Nursery to Class XII</span>
        <span>CBSE Curriculum</span>
      </div>
    </div>
  );
}

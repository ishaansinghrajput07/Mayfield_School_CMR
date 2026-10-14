import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ChevronDown, GraduationCap } from "lucide-react";
import { photos } from "../../assets/school";
import { SCHOOL } from "../../config/school";

// Full-bleed photo slides from the school's own photographs.
const SLIDES = [
  { src: photos.flagAssembly, alt: "Students in house colours holding flags at the Independence Day assembly" },
  { src: photos.scienceLab, alt: "The school science laboratory with blue workbenches" },
  { src: photos.classroomPrimary, alt: "Primary students at their desks with their teacher" },
  { src: photos.sportsLineup, alt: "Students lined up by house colour on the sports field" },
  { src: photos.annualFunction, alt: "Parents, guests and students at the annual function" },
  { src: photos.nurseryClass, alt: "Nursery students and teachers in front of a decorated board" },
  { src: photos.physicsLab, alt: "Senior students at a physics practical" },
  { src: photos.morningPrayer, alt: "Students in rows for morning prayer" },
];

const CRIMSON = "bg-[#b4202f] hover:bg-[#961927]";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-navy-900 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Photo slides */}
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
              i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-navy-900/25" />
      </div>
      <p className="sr-only" aria-live="polite">{SLIDES[index].alt}</p>

      {/* Navy diagonal panel behind the text */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/90 to-navy-700/70 lg:[clip-path:polygon(0_0,62%_0,50%_100%,0_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-site flex-col justify-center px-5 pb-24 pt-[7rem] sm:px-8 lg:min-h-[min(46rem,calc(100svh-1rem))] lg:px-10 lg:pt-[7.5rem]">
        <div className="max-w-[44rem]">
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-base sm:tracking-[0.16em]">
            <GraduationCap size={20} className="text-[#e0485a]" aria-hidden="true" />
            CBSE affiliated school
            <span className="text-white/60" aria-hidden="true">&bull;</span>
            {SCHOOL.city}
          </p>

          <h1 className="mt-4 inline-block border-b-4 border-[#b4202f] bg-navy-500 py-4 pl-6 pr-14 font-serif text-[clamp(2.5rem,6.2vw,4.75rem)] font-extrabold leading-[1.02] text-white [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]">
            Mayfield Global
            <br />
            School
          </h1>

          <p className="mt-5 max-w-xl border-l-4 border-[#b4202f] bg-white/95 px-5 py-3 font-serif text-xl font-bold leading-snug text-navy-900 sm:text-2xl">
            {SCHOOL.motto}. Learning together, every day.
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            A co-educational school at Neora, Patna, teaching {SCHOOL.classes} on the CBSE curriculum.
            Managed by the {SCHOOL.trust}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/?section=contact"
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-bold text-white shadow-lg transition-colors ${CRIMSON}`}
            >
              Contact the School
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/?section=admissions"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-white/80 bg-navy-900/20 px-6 py-3 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy-900"
            >
              <BookOpen size={18} />
              Admissions
            </Link>
          </div>

          <p className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm font-bold uppercase tracking-wider text-white/90">
            <span>Since {SCHOOL.established}</span>
            <span>Nursery to Class XII</span>
            <span>CBSE curriculum</span>
          </p>
        </div>
      </div>

      {/* Scroll cue + slide dots */}
      <a
        href="#about"
        aria-label="Scroll to the about section"
        className="absolute bottom-14 left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/50 bg-navy-900/40 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy-900 sm:flex"
      >
        <ChevronDown size={20} />
      </a>
      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1} of ${SLIDES.length}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-[#d4283a]" : "w-2.5 bg-white/55 hover:bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}

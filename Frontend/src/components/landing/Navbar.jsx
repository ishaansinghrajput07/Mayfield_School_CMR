import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const LINKS = [
  { label: "About Our School", section: "about", group: "about" },
  { label: "Academics & Syllabus", section: "academics", group: "about" },
  { label: "Facilities", section: "facilities", group: "about" },
  { label: "Programs", section: "programs", group: "about" },
  { label: "Our Story", section: "story", group: "about" },
  { label: "School Values", section: "values", group: "about" },
  { label: "Achievements & Toppers", section: "achievements", group: "about" },
  { label: "Gallery", section: "gallery", group: "media" },
  { label: "Notices", section: "notices", group: "media" },
  { label: "Latest News", section: "news", group: "media" },
  { label: "Events", section: "events", group: "media" },
  { label: "Parents Say", section: "reviews", group: "media" },
  { label: "FAQs", section: "faq", group: "media" },
  { label: "Contact", section: "contact", group: "media" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const { user } = useAuth();
  const location = useLocation();
  const active = location.pathname === "/" ? new URLSearchParams(location.search).get("section") || "" : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openDropdown && !mobileOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpenDropdown("");
        setMobileOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown("");
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openDropdown, mobileOpen]);

  useEffect(() => {
    setOpenDropdown("");
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const closeMenus = () => {
    setOpenDropdown("");
    setMobileOpen(false);
  };

  const sectionPath = (section) => `/?section=${section}`;

  const renderLinks = (links) =>
    links.map((link) => {
      const isActive = active === link.section;
      return (
        <Link
          key={link.section}
          to={sectionPath(link.section)}
          onClick={closeMenus}
          aria-current={isActive ? "page" : undefined}
          className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
            isActive ? "bg-navy-50 text-navy-700" : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
          }`}
        >
          {link.label}
          {isActive && <span className="h-1.5 w-1.5 rounded-full bg-school-red" />}
        </Link>
      );
    });

  const renderDropdown = (name, label, links) => (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpenDropdown((value) => value === name ? "" : name)}
        aria-expanded={openDropdown === name}
        aria-controls={`landing-${name}-menu`}
        className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-white sm:text-sm"
      >
        {label}
        <ChevronDown size={15} className={`transition-transform duration-200 ${openDropdown === name ? "rotate-180" : ""}`} />
      </button>
      {openDropdown === name && (
        <div
          id={`landing-${name}-menu`}
          className="absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-lg border border-slate-200 bg-white p-2 text-slate-800 shadow-[0_18px_40px_-16px_rgba(8,24,32,0.55)]"
        >
          {renderLinks(links)}
        </div>
      )}
    </div>
  );

  return (
    <header
      className={`relative z-50 border-b-[3px] border-school-red bg-navy-900 text-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_12px_32px_-14px_rgba(8,24,32,0.55)]" : "shadow-[0_6px_22px_-14px_rgba(8,24,32,0.35)]"
      }`}
    >
      <nav ref={navRef} className="relative mx-auto flex max-w-site items-center justify-between gap-3 px-5 py-3.5 sm:px-8 lg:px-10">
        <Link to="/" onClick={closeMenus} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white shadow-sm">
            <GraduationCap size={19} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold text-white sm:text-base">St. Thomas Convent</span>
            <span className="mt-0.5 block text-[10px] font-medium tracking-wide text-white/65 sm:text-[11px]">HR. SEC. SCHOOL · INDORE</span>
          </span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/"
            onClick={closeMenus}
            aria-current={!active && location.pathname === "/" ? "page" : undefined}
            className={`rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10 hover:text-white ${
              !active && location.pathname === "/" ? "bg-white/10" : ""
            }`}
          >
            Home
          </Link>
          {renderDropdown("about", "About Us", LINKS.filter((link) => link.group === "about"))}
          {renderDropdown("media", "Media", LINKS.filter((link) => link.group === "media"))}
          <Link
            to={sectionPath("admissions")}
            onClick={closeMenus}
            aria-current={active === "admissions" ? "page" : undefined}
            className={`rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10 hover:text-white ${
              active === "admissions" ? "bg-white/10" : ""
            }`}
          >
            Admission
          </Link>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          {user ? (
            <Link
              to={`/${user.role}`}
              className="rounded-lg border border-white/35 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Go to portal
            </Link>
          ) : (
            <>
              <Link to="/login" className="rounded-lg px-3 py-2 text-sm font-semibold text-white/95 transition-colors hover:bg-white/10 hover:text-white">
                Portal Login
              </Link>
              <Link
                to="/apply"
                className="rounded-lg bg-school-red px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-school-red-dark"
              >
                Apply Now
              </Link>
            </>
          )}
        </div>

        <div className="relative lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="landing-mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-white lg:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          {mobileOpen && (
            <div
              id="landing-mobile-menu"
              className="absolute right-0 top-full z-50 mt-3 max-h-[min(80vh,36rem)] w-[min(19rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-slate-200 bg-white p-3 text-slate-800 shadow-[0_18px_40px_-16px_rgba(8,24,32,0.55)]"
            >
              <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Navigation</p>
              <Link to="/" onClick={closeMenus} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Home</Link>
              <p className="px-3 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">About Us</p>
              {renderLinks(LINKS.filter((link) => link.group === "about"))}
              <p className="px-3 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Media</p>
              {renderLinks(LINKS.filter((link) => link.group === "media"))}
              <Link to={sectionPath("admissions")} onClick={closeMenus} className="mt-1 block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Admission</Link>
              <div className="my-2 border-t border-slate-200" />
              <div className="flex flex-col gap-1">
                {user ? (
                  <Link
                    to={`/${user.role}`}
                    onClick={closeMenus}
                    className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Go to portal 
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={closeMenus}
                      className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Portal Login
                    </Link>
                    <Link
                      to="/apply"
                      onClick={closeMenus}
                      className="rounded-lg bg-school-red px-3 py-2.5 text-center text-sm font-bold text-white hover:bg-school-red-dark"
                    >
                      Apply Now
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
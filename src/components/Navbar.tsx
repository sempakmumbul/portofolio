'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const spring = {
  type: 'spring' as const,
  stiffness: 240,
  damping: 26,
};

const smoothSpring = {
  type: 'spring' as const,
  stiffness: 220,
  damping: 24,
  mass: 0.9,
};

const menuWrap: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const menuItem: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type ActiveSection =
  | 'home'
  | 'about'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'contact';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const activeLabel =
    activeSection === 'home'
      ? 'Portfolio'
      : navItems.find((item) => item.id === activeSection)?.label ?? 'Portfolio';

  const goToTop = () => {
    setIsMenuOpen(false);
    setActiveSection('home');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    setIsMenuOpen(false);
  };

  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 24);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;

      if (currentScrollY < 120) {
        setActiveSection('home');
        return;
      }

      const current = navItems.find((item) => {
        const section = document.getElementById(item.id);
        if (!section) return false;

        const rect = section.getBoundingClientRect();
        return rect.top <= 170 && rect.bottom >= 170;
      });

      if (current) {
        setActiveSection(current.id as ActiveSection);
      }
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          updateNavbar();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    updateNavbar();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.985 }}
              transition={smoothSpring}
              className="
                fixed inset-x-4 top-20 z-50 md:hidden
                overflow-hidden rounded-3xl border border-slate-200
                bg-white/95 shadow-2xl backdrop-blur-2xl
              "
            >
              <motion.div variants={menuWrap} initial="hidden" animate="show" className="p-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      variants={menuItem}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        flex min-h-[48px] w-full items-center justify-between rounded-2xl px-4
                        text-left text-sm font-medium transition-all duration-200
                        ${
                          isActive
                            ? 'bg-slate-950 text-white'
                            : 'text-slate-700 hover:bg-slate-100'
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="h-2 w-2 rounded-full bg-white" />}
                    </motion.button>
                  );
                })}
              </motion.div>

              <motion.div variants={menuItem} initial="hidden" animate="show" className="border-t border-slate-100 p-2">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  href="https://avid-maulana.github.io/portfolio/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex min-h-[48px] items-center justify-between rounded-2xl
                    px-4 text-sm font-semibold text-blue-600 transition-all duration-200
                    hover:bg-slate-950 hover:text-white
                  "
                >
                  Resume
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H8M17 7V16"
                    />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNavbar && (
          <motion.header
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-[60]"
          >
            <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
              {/* MOBILE */}
              <div className="flex items-center justify-between gap-2 md:hidden">
                <motion.div
                  layout
                  transition={spring}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="shrink-0"
                >
                  <button
                    onClick={goToTop}
                    className={`
                      flex h-11 items-center rounded-full border px-4
                      text-sm font-semibold tracking-tight transition-all duration-300
                      ${
                        isScrolled
                          ? 'border-slate-200 bg-white/90 text-slate-950 shadow-lg backdrop-blur-xl'
                          : 'border-transparent bg-white/70 text-slate-950 backdrop-blur-md'
                      }
                    `}
                  >
                    Avid.
                  </button>
                </motion.div>

                <div className="flex min-w-0 flex-1 justify-center px-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isMenuOpen ? 'menu-open' : activeLabel}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="
                        max-w-[140px] rounded-full
                        border border-slate-200/80
                        bg-white/85 px-3 py-1.5
                        shadow-sm backdrop-blur-md
                      "
                    >
                      <p
                        className="
                          truncate text-center text-[11px] font-medium uppercase
                          tracking-[0.14em] text-slate-600
                        "
                      >
                        {isMenuOpen ? 'Menu' : activeLabel}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <motion.div
                  layout
                  transition={smoothSpring}
                  whileHover={{ y: -1 }}
                  className={`
                    relative z-[70]
                    flex shrink-0 items-center rounded-full border px-2 py-2
                    transition-all duration-300
                    ${
                      isScrolled
                        ? 'border-slate-200 bg-white/90 shadow-lg backdrop-blur-xl'
                        : 'border-transparent bg-white/70 backdrop-blur-md'
                    }
                  `}
                >
                  <motion.div
                    animate={{
                      width: isMenuOpen ? 0 : 36,
                      opacity: isMenuOpen ? 0 : 1,
                      marginRight: isMenuOpen ? 0 : 8,
                    }}
                    transition={smoothSpring}
                    className="overflow-hidden"
                  >
                    <motion.a
                      href="https://github.com/avid-maulana"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      animate={{
                        x: isMenuOpen ? 8 : 0,
                        scale: isMenuOpen ? 0.92 : 1,
                        opacity: isMenuOpen ? 0 : 1,
                      }}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="
                        flex h-9 w-9 items-center justify-center rounded-full
                        text-slate-700 transition-colors
                        hover:bg-slate-100 hover:text-slate-950
                      "
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.01.069-.01 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </motion.a>
                  </motion.div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={isMenuOpen}
                    className="
                      relative z-[80]
                      flex h-9 w-9 items-center justify-center rounded-full
                      text-slate-700 transition-all
                      hover:bg-slate-100 hover:text-slate-950
                    "
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={isMenuOpen ? 'close' : 'menu'}
                        initial={{ opacity: 0, rotate: -90, scale: 0.82 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.82 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg leading-none"
                      >
                        {isMenuOpen ? '✕' : '☰'}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </div>

              {/* DESKTOP */}
              <div className="hidden justify-center md:flex">
                <motion.div
                  layout
                  transition={spring}
                  animate={{
                    y: isScrolled ? 0 : 4,
                    scale: isScrolled ? 0.985 : 1,
                  }}
                  className={`
                    flex h-16 items-center gap-3 rounded-full border px-3
                    transition-all duration-300
                    ${
                      isScrolled
                        ? 'border-slate-200 bg-white/80 shadow-xl shadow-slate-200/40 backdrop-blur-2xl'
                        : 'border-slate-200/70 bg-white/60 backdrop-blur-xl'
                    }
                  `}
                >
                  <motion.button
                    whileHover={{ y: -1, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={goToTop}
                    className="flex h-10 items-center rounded-full px-4 text-base font-black tracking-tight text-slate-950"
                  >
                    Avid.
                  </motion.button>

                  <nav className="flex items-center gap-1">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.id;

                      return (
                        <motion.button
                          key={item.id}
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => scrollToSection(item.id)}
                          className={`
                            relative flex h-10 items-center rounded-full px-4
                            text-sm font-medium transition-colors
                            ${
                              isActive
                                ? 'text-slate-950'
                                : 'text-slate-500 hover:text-slate-900'
                            }
                          `}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="desktop-active-pill"
                              className="absolute inset-0 rounded-full bg-slate-950/6"
                              transition={{
                                type: 'spring',
                                stiffness: 320,
                                damping: 28,
                              }}
                            />
                          )}

                          {!isActive && (
                            <motion.span
                              initial={{ scaleX: 0, opacity: 0 }}
                              whileHover={{ scaleX: 1, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="absolute inset-x-3 bottom-1 h-px origin-left bg-slate-300"
                            />
                          )}

                          <span className="relative z-10">{item.label}</span>
                        </motion.button>
                      );
                    })}
                  </nav>

                  <motion.a
                    whileHover={{ y: -1, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://avid-maulana.github.io/portfolio/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      ml-1 inline-flex h-10 items-center rounded-full
                      bg-slate-950 px-5 text-sm font-semibold text-white
                      transition-transform duration-200
                    "
                  >
                    Resume
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}
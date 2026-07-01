'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { RevealSection } from '@/components/motion';

export default function HomePage() {
  const [enablePointerGlow, setEnablePointerGlow] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 20,
    mass: 0.4,
  });

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hoverFineQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const updatePointerMode = () => {
      const allow = !reduceMotionQuery.matches && hoverFineQuery.matches;
      setEnablePointerGlow(allow);

      if (!allow) {
        mouseX.set(-200);
        mouseY.set(-200);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!hoverFineQuery.matches) return;
      if (e.pointerType && e.pointerType !== 'mouse') return;

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handlePointerLeave = () => {
      mouseX.set(-200);
      mouseY.set(-200);
    };

    updatePointerMode();

    hoverFineQuery.addEventListener('change', updatePointerMode);
    reduceMotionQuery.addEventListener('change', updatePointerMode);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerLeave);

    return () => {
      hoverFineQuery.removeEventListener('change', updatePointerMode);
      reduceMotionQuery.removeEventListener('change', updatePointerMode);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      {enablePointerGlow && (
        <>
          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none fixed left-0 top-0 z-0 hidden
              h-72 w-72 rounded-full
              bg-blue-200/30 blur-3xl mix-blend-multiply
              lg:block
            "
            style={{
              x: smoothX,
              y: smoothY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none fixed left-0 top-0 z-0 hidden
              h-96 w-96 rounded-full
              bg-sky-100/25 blur-[120px]
              lg:block
            "
            style={{
              x: smoothX,
              y: smoothY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        </>
      )}

      <div className="relative z-10">
        <Hero />

        <section className="w-full">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="space-y-20 pb-20 sm:space-y-24 sm:pb-24">
              <RevealSection>
                <About />
              </RevealSection>
              <RevealSection>
                <Experience />
              </RevealSection>
              <RevealSection>
                <Skills />
              </RevealSection>
              <RevealSection>
                <Achievements />
              </RevealSection>
            </div>
          </div>
        </section>

        <RevealSection>
          <Projects />
        </RevealSection>

        <section className="w-full">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="space-y-20 pb-16 pt-6 sm:space-y-24 sm:pb-20 sm:pt-8">
              <RevealSection>
                <Contact />
              </RevealSection>
              <RevealSection>
                <Footer />
              </RevealSection>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
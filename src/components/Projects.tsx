'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { projectsData } from '@/data/projects';

const sectionEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const contentStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const actionStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.22,
    },
  },
};

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const goToSlide = (index: number) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x < -80) nextSlide();
    if (info.offset.x > 80) prevSlide();
  };

  if (projectsData.length === 0) {
    return (
      <motion.section
        id="projects"
        className="scroll-mt-24 border-t border-slate-200 pt-20 sm:pt-24"
        variants={sectionEnter}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <motion.div variants={reveal} className="mb-12 max-w-3xl sm:mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Portfolio
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Selected Projects.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Beberapa proyek pengembangan aplikasi, UI/UX Design, dan penelitian
              yang pernah saya kerjakan.
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            className="rounded-[24px] border-2 border-dashed border-slate-300 px-5 py-12 text-center sm:rounded-[30px] sm:px-10 sm:py-16"
          >
            <h3 className="text-2xl font-bold text-slate-950">
              Projects Coming Soon
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Saya sedang menyiapkan dokumentasi dan studi kasus untuk beberapa
              proyek yang pernah saya kerjakan. Nantikan pembaruan selanjutnya.
            </p>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  const project = projectsData[current];

  return (
    <motion.section
      id="projects"
      className="scroll-mt-24 border-t border-slate-200 pt-20 sm:pt-24"
      variants={sectionEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={reveal} className="mb-10 max-w-3xl sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Portfolio
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Selected Projects.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Beberapa proyek pengembangan aplikasi, UI/UX Design, dan penelitian
            yang pernah saya kerjakan.
          </p>
        </motion.div>

        {/* Slide */}
        <motion.div
          variants={reveal}
          className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white sm:rounded-[30px] lg:rounded-[32px]"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={project.id}
              custom={direction}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={handleDragEnd}
              initial={{
                opacity: 0,
                x: direction > 0 ? 40 : -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -40 : 40,
                transition: {
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              className="grid lg:grid-cols-[1fr_0.95fr]"
            >
              {/* Image */}
              <div className="group relative aspect-[16/11] overflow-hidden bg-slate-100 sm:aspect-[16/9] lg:min-h-[540px] lg:aspect-auto">
                {project.image ? (
                  <motion.div
                    initial={{ scale: 1.08, opacity: 0.85 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 3.5rem), 50vw"
                      priority={current === 0}
                    />
                  </motion.div>
                ) : null}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/12 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-12">
                <motion.div initial="hidden" animate="show" variants={contentStagger}>
                  <motion.p
                    variants={reveal}
                    className="text-sm font-semibold uppercase tracking-wider text-blue-600"
                  >
                    Project {String(current + 1).padStart(2, '0')}
                  </motion.p>

                  <motion.h3
                    variants={reveal}
                    className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:mt-4 sm:text-3xl"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    variants={reveal}
                    className="mt-4 text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    variants={reveal}
                    className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5"
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={actionStagger}
                  className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
                >
                  {project.demoUrl && (
                    <motion.div variants={reveal}>
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex h-11 w-full items-center justify-center rounded-xl
                          bg-slate-950 px-5 text-sm font-semibold text-white
                          transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800
                          sm:w-auto
                        "
                      >
                        Live Demo
                      </Link>
                    </motion.div>
                  )}

                  {project.githubUrl && (
                    <motion.div variants={reveal}>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex h-11 w-full items-center justify-center rounded-xl
                          border border-slate-200 px-5 text-sm font-semibold text-slate-800
                          transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50
                          sm:w-auto
                        "
                      >
                        GitHub
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Controls */}
          <div className="border-t border-slate-200 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="order-2 flex items-center gap-2 sm:order-1">
                {projectsData.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to project ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      current === index
                        ? 'w-8 bg-slate-950'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <div className="order-1 flex items-center justify-between sm:order-2 sm:justify-end sm:gap-3">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-medium text-slate-500"
                >
                  {String(current + 1).padStart(2, '0')} /{' '}
                  {String(projectsData.length).padStart(2, '0')}
                </motion.p>

                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={prevSlide}
                    className="
                      flex h-10 w-10 items-center justify-center rounded-full
                      border border-slate-200 text-slate-700
                      transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50
                    "
                    aria-label="Previous project"
                  >
                    ←
                  </button>

                  <button
                    onClick={nextSlide}
                    className="
                      flex h-10 w-10 items-center justify-center rounded-full
                      border border-slate-200 text-slate-700
                      transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50
                    "
                    aria-label="Next project"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
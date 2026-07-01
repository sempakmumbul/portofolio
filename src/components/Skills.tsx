'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'UI/UX Design',
    score: '7/10',
    backColor: 'bg-blue-600',
    textColor: 'text-white',
    skills: [
      'Figma',
      'Wireframing',
      'Prototyping',
      'User Flow',
      'Design System',
      'User Research',
    ],
  },
  {
    title: 'Front-End Development',
    score: '6/10',
    backColor: 'bg-slate-900',
    textColor: 'text-white',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Mobile Development',
    score: '6/10',
    backColor: 'bg-emerald-600',
    textColor: 'text-white',
    skills: ['Flutter', 'Dart', 'Responsive Design', 'Firebase', 'Supabase'],
  },
  {
    title: 'Backend & Database',
    score: '6/10',
    backColor: 'bg-amber-500',
    textColor: 'text-slate-950',
    skills: ['PHP', 'Laravel', 'MySQL', 'MariaDB', 'REST API'],
  },
  {
    title: 'Design & Productivity',
    score: '8/10',
    backColor: 'bg-rose-500',
    textColor: 'text-white',
    skills: ['Canva', 'Adobe Illustrator', 'Microsoft Office', 'Google Workspace'],
  },
  {
    title: 'Soft Skills',
    score: '7/10',
    backColor: 'bg-violet-600',
    textColor: 'text-white',
    skills: [
      'Leadership',
      'Communication',
      'Teamwork',
      'Problem Solving',
      'Project Management',
    ],
  },
];

type TiltState = Record<number, { rotateX: number; rotateY: number }>;

export default function Skills() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tiltMap, setTiltMap] = useState<TiltState>({});
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (isDesktop) return;

      const gamma = event.gamma ?? 0;
      const beta = event.beta ?? 0;

      const rotateY = Math.max(-8, Math.min(8, gamma * 0.35));
      const rotateX = Math.max(-8, Math.min(8, (beta - 45) * -0.12));

      const next: TiltState = {};
      skillCategories.forEach((_, index) => {
        next[index] = { rotateX, rotateY };
      });

      setTiltMap(next);
    };

    if ('DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [isDesktop]);

  const toggleCard = (index: number) => {
    if (isDesktop) return;
    setFlippedCards((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const handleMouseMove = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!isDesktop) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 12;

    setTiltMap((prev) => ({
      ...prev,
      [index]: { rotateX, rotateY },
    }));
  };

  const resetTilt = (index: number) => {
    setTiltMap((prev) => ({
      ...prev,
      [index]: { rotateX: 0, rotateY: 0 },
    }));
    setHoveredIndex((prev) => (prev === index ? null : prev));
  };

  const flippedSet = useMemo(() => new Set(flippedCards), [flippedCards]);

  return (
    <section
      id="skills"
      className="scroll-mt-32 border-t border-slate-200 pt-20 sm:pt-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Technologies, Tools,
            <br className="hidden sm:block" />
            and Capabilities.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Kombinasi kemampuan teknis dan non-teknis yang saya gunakan dalam
            proses desain, pengembangan, serta kolaborasi tim.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const tilt = tiltMap[index] || { rotateX: 0, rotateY: 0 };
            const isFlipped = isDesktop
              ? hoveredIndex === index
              : flippedSet.has(index);

            return (
              <button
                key={category.title}
                type="button"
                onClick={() => toggleCard(index)}
                onMouseEnter={() => isDesktop && setHoveredIndex(index)}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => resetTilt(index)}
                onFocus={() => isDesktop && setHoveredIndex(index)}
                onBlur={() => resetTilt(index)}
                className="block w-full text-left [perspective:1400px]"
                aria-label={`${category.title} skill card`}
              >
                {/* Tilt */}
                <motion.div
                  animate={{
                    rotateX: tilt.rotateX,
                    rotateY: tilt.rotateY,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 160,
                    damping: 16,
                    mass: 0.6,
                  }}
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Flip */}
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      relative h-[280px] w-full rounded-[28px]
                      sm:h-[300px] lg:h-[320px]
                    "
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front */}
                    <div
                      className="
                        absolute inset-0 rounded-[28px]
                        border border-slate-200 bg-white
                        p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)]
                        sm:p-6 lg:p-7
                      "
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="flex h-full flex-col">
                        <div>
                          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                            0{index + 1}/0{skillCategories.length}
                          </p>

                          <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                            {category.title}
                          </h3>
                        </div>

                        <div className="mt-5 h-px w-full bg-slate-200" />

                        <div className="mt-5 flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="
                                inline-flex items-center rounded-full
                                border border-slate-200 bg-slate-50
                                px-3 py-1.5 text-sm font-medium text-slate-700
                              "
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto pt-5">
                          <p className="text-xs font-medium text-slate-400 lg:hidden">
                            Tap to flip
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Back */}
                    <div
                      className={`
                        absolute inset-0 rounded-[28px] p-5
                        shadow-[0_18px_36px_rgba(15,23,42,0.10)]
                        sm:p-6 lg:p-7
                        ${category.backColor} ${category.textColor}
                      `}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="flex h-full flex-col justify-between">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] opacity-80">
                          Skill Score
                        </p>

                        <div className="flex flex-1 items-center justify-center">
                          <p className="text-5xl font-black tracking-tight sm:text-6xl">
                            {category.score}
                          </p>
                        </div>

                        <p className="text-center text-sm font-medium opacity-80">
                          Estimated proficiency
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
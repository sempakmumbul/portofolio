'use client';

import { motion, Variants } from 'framer-motion';

const achievements = [
  {
    title: 'Silver Medal',
    subtitle: 'IDEA FEST Universitas Negeri Malang 2024',
    category: 'Competition',
  },
  {
    title: 'Finalist',
    subtitle: 'Hackathon SDGs Universitas Negeri Malang 2024',
    category: 'Hackathon',
  },
  {
    title: '1st Place',
    subtitle: 'TET Poster Competition',
    category: 'Achievement',
  },
  {
    title: '2nd Place',
    subtitle: 'FESMARO 2024',
    category: 'Achievement',
  },
  {
    title: 'Awardee',
    subtitle: 'Beasiswa BAZNAS Universitas Negeri Malang',
    category: 'Scholarship',
  },
];

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
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const listWrap: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="scroll-mt-24 border-t border-slate-200 pt-20 sm:pt-24"
      variants={sectionEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div variants={reveal} className="mb-12 max-w-3xl sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Achievements
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Achievements &
            <br className="hidden sm:block" />
            Certifications.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Beberapa penghargaan, kompetisi, dan pencapaian yang saya raih
            selama perjalanan akademik dan organisasi.
          </p>
        </motion.div>

        {/* List */}
        <motion.div variants={listWrap} className="relative space-y-4">
          <div className="absolute bottom-0 left-[20px] top-0 hidden w-px bg-slate-200 sm:block" />

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={reveal}
              layout
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative rounded-[28px] border border-slate-200 bg-white
                px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)]
                transition-colors duration-300
                hover:border-slate-300
                sm:px-6 sm:py-6
              "
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                {/* Left */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="relative min-w-[42px] pt-0.5 text-sm font-semibold text-slate-300 sm:min-w-[48px]">
                    <span className="relative z-10">0{index + 1}</span>
                    <span className="absolute left-[7px] top-[8px] hidden h-2.5 w-2.5 rounded-full bg-blue-600 sm:block" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                      {achievement.title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-7 text-slate-600 sm:text-base">
                      {achievement.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="sm:pl-6">
                  <motion.span
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="
                      inline-flex rounded-full bg-blue-50 px-3 py-1
                      text-xs font-semibold text-blue-700
                    "
                  >
                    {achievement.category}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
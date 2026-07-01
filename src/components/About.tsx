'use client';

import { motion, Variants } from 'framer-motion';

const sectionEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24 border-t border-slate-200/80 pt-20 sm:pt-24"
      variants={sectionEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
        >
          {/* Left */}
          <div>
            <motion.div variants={reveal} className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-xs">
                About Me
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[3rem]">
                Building thoughtful
                <br />
                digital experiences
                <br />
                through design and technology.
              </h2>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-8 max-w-3xl space-y-5 text-[15px] leading-8 text-slate-600 sm:mt-10 sm:text-[17px]"
            >
              <p>
                Saya merupakan mahasiswa aktif Program Studi S1 Pendidikan
                Teknik Informatika Universitas Negeri Malang yang memiliki minat
                pada teknologi, desain grafis, UI/UX Design, dan pengembangan web.
              </p>

              <p>
                Melalui pengalaman akademik maupun organisasi, saya terbiasa
                bekerja secara disiplin, kreatif, dan mampu beradaptasi baik
                dalam tim maupun secara individu.
              </p>

              <p>
                Bagi saya, merancang produk digital bukan hanya tentang tampilan
                akhir, tetapi juga tentang memahami kebutuhan pengguna dan
                menghadirkan solusi yang benar-benar relevan.
              </p>
            </motion.div>
          </div>

          {/* Right */}
          <motion.aside variants={reveal}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <motion.div
                variants={reveal}
                className="rounded-[24px] bg-slate-950 px-5 py-6 text-white sm:rounded-[28px] sm:px-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                  Education
                </p>
                <h3 className="mt-3 text-xl font-black tracking-tight sm:text-[1.45rem]">
                  S1 Pendidikan Teknik Informatika
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Universitas Negeri Malang
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-6 sm:rounded-[28px] sm:px-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Based In
                </p>
                <p className="mt-3 text-base font-medium leading-7 text-slate-800">
                  Malang, East Java, Indonesia
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 sm:col-span-2 sm:rounded-[28px] sm:px-6 lg:col-span-1"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Focus Area
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    UI/UX Design
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                    Front-End Development
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 sm:rounded-[28px] sm:px-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Working Style
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Structured thinking, visual clarity, collaborative process, and
                  user-centered problem solving.
                </p>
              </motion.div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </motion.section>
  );
}
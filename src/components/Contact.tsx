'use client';

import { motion, Variants } from 'framer-motion';

const contacts = [
  {
    label: 'GitHub',
    value: '@sempakmumbul',
    href: 'https://github.com/sempakmumbul',
    cta: 'Visit Profile',
  },
  {
    label: 'LinkedIn',
    value: 'Muhammad Avid Maulana',
    href: 'https://www.linkedin.com/in/muhammad-avid-maulana-b63228216/',
    cta: 'Connect',
  },
  {
    label: 'Instagram',
    value: '@avdmaulanaa',
    href: 'https://instagram.com/avdmaulanaa',
    cta: 'Follow',
  },
];

const sectionEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
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

const panelReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
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

const cardItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const primaryCard: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.045,
    },
  },
};

const primaryGlowTop: Variants = {
  rest: { opacity: 0.18, scale: 0.92, x: 0, y: 0 },
  hover: {
    opacity: 0.42,
    scale: 1.08,
    x: -6,
    y: 6,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const primaryGlowBottom: Variants = {
  rest: { opacity: 0.14, scale: 0.9, x: 0, y: 0 },
  hover: {
    opacity: 0.3,
    scale: 1.05,
    x: 8,
    y: -4,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const primaryText: Variants = {
  rest: { opacity: 1, y: 0 },
  hover: {
    opacity: 1,
    y: -2,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const primaryLine: Variants = {
  rest: { scaleX: 0.22, opacity: 0.45 },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.36,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const primaryArrow: Variants = {
  rest: { x: 0, y: 0, rotate: 0, scale: 1 },
  hover: {
    x: 5,
    y: -4,
    rotate: -8,
    scale: 1.06,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 pt-20 sm:pt-24"
      variants={sectionEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto max-w-6xl px-0">
        <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
          <motion.div
            variants={panelReveal}
            className="
              relative overflow-hidden rounded-[32px] border border-slate-200
              bg-slate-50 p-6 sm:p-8 lg:p-10
            "
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.06),transparent_28%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <motion.p
                  variants={panelReveal}
                  className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600"
                >
                  Contact
                </motion.p>

                <motion.h2
                  variants={panelReveal}
                  className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-[2.85rem]"
                >
                  Let&apos;s build
                  <br className="hidden sm:block" />
                  something meaningful.
                </motion.h2>

                <motion.p
                  variants={panelReveal}
                  className="mt-5 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base"
                >
                  Saya terbuka untuk peluang magang, kolaborasi proyek,
                  pengembangan website, UI/UX Design, maupun diskusi seputar
                  teknologi, pendidikan, dan pengembangan produk digital.
                </motion.p>
              </div>

              <motion.a
                variants={primaryCard}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.985, y: -1 }}
                href="mailto:avidmuhammad128@gmail.com"
                className="
                  group relative mt-8 block overflow-hidden rounded-[28px]
                  bg-slate-950 p-6 text-white
                "
              >
                <motion.div
                  variants={primaryGlowTop}
                  className="
                    pointer-events-none absolute -right-10 -top-10
                    h-36 w-36 rounded-full bg-blue-400/25 blur-3xl
                  "
                />

                <motion.div
                  variants={primaryGlowBottom}
                  className="
                    pointer-events-none absolute -bottom-10 left-0
                    h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl
                  "
                />

                <div className="relative z-10">
                  <motion.p
                    variants={primaryText}
                    className="text-sm uppercase tracking-[0.16em] text-white/60"
                  >
                    Primary Contact
                  </motion.p>

                  <motion.h3
                    variants={primaryText}
                    className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
                  >
                    <span className="inline-block">avidmuhammad128</span>
                    <span className="inline-block text-blue-300">@gmail.com</span>
                  </motion.h3>

                  <motion.div
                    variants={primaryLine}
                    className="mt-4 h-px origin-left bg-gradient-to-r from-blue-300 via-cyan-300 to-transparent"
                  />

                  <div className="mt-6 flex items-center justify-between">
                    <motion.p
                      variants={primaryText}
                      className="text-sm font-medium text-blue-300"
                    >
                      Send Message
                    </motion.p>

                    <motion.span
                      variants={primaryArrow}
                      className="
                        inline-flex h-10 w-10 items-center justify-center rounded-full
                        bg-white/10 text-lg text-white/90
                      "
                    >
                      ↗
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={listWrap}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {contacts.map((item) => (
              <motion.a
                key={item.label}
                variants={cardItem}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative overflow-hidden
                  rounded-[28px] border border-slate-200 bg-white
                  p-5 sm:p-6
                "
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-slate-950" />

                <div className="relative z-10 flex min-h-[140px] flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-white/65">
                        {item.label}
                      </p>

                      <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-white">
                        {item.value}
                      </h3>
                    </div>

                    <span
                      className="
                        text-lg text-slate-400 transition-all duration-300
                        group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/70
                      "
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-6 text-sm font-medium text-blue-600 transition-colors duration-300 group-hover:text-blue-300">
                    {item.cta}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
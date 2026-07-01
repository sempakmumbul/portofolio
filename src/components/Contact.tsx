'use client';

import type { ComponentType } from 'react';
import { motion, Variants } from 'framer-motion';

type IconProps = {
  className?: string;
};

const GitHubIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.49 11.49 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.652.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.624-5.48 5.922.43.372.814 1.103.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
  </svg>
);

const LinkedInIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.447 20.452H16.89v-5.57c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.269 2.372 4.269 5.456v6.285ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.556V9H7.12v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729V22.27C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
);

const InstagramIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.125 2A3.625 3.625 0 0 0 4 7.625v8.75A3.625 3.625 0 0 0 7.625 20h8.75A3.625 3.625 0 0 0 20 16.375v-8.75A3.625 3.625 0 0 0 16.375 4h-8.75ZM17 6.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  </svg>
);

type ContactItem = {
  label: string;
  value: string;
  href: string;
  cta: string;
  icon: ComponentType<IconProps>;
};

const contacts: ContactItem[] = [
  {
    label: 'GitHub',
    value: '@avid-maulana',
    href: 'https://github.com/avid-maulana',
    cta: 'Visit Profile',
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'Muhammad Avid Maulana',
    href: 'https://www.linkedin.com/in/muhammad-avid-maulana-b63228216/',
    cta: 'Connect',
    icon: LinkedInIcon,
  },
  {
    label: 'Instagram',
    value: '@avdmaulanaa',
    href: 'https://instagram.com/avdmaulanaa',
    cta: 'Follow',
    icon: InstagramIcon,
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

const socialCard: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -5,
    scale: 1.01,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.03,
    },
  },
};

const socialOverlay: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.26,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const socialIconWrap: Variants = {
  rest: {
    backgroundColor: 'rgba(248,250,252,1)',
    borderColor: 'rgba(226,232,240,1)',
    color: 'rgba(51,65,85,1)',
    y: 0,
  },
  hover: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.12)',
    color: 'rgba(255,255,255,1)',
    y: -1,
    transition: {
      duration: 0.26,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const socialLabel: Variants = {
  rest: { color: 'rgba(100,116,139,1)' },
  hover: {
    color: 'rgba(255,255,255,0.65)',
    transition: {
      duration: 0.24,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const socialValue: Variants = {
  rest: { color: 'rgba(15,23,42,1)', y: 0 },
  hover: {
    color: 'rgba(255,255,255,1)',
    y: -1,
    transition: {
      duration: 0.26,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const socialCta: Variants = {
  rest: { color: 'rgba(37,99,235,1)', y: 0 },
  hover: {
    color: 'rgba(147,197,253,1)',
    y: -1,
    transition: {
      duration: 0.26,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const socialArrow: Variants = {
  rest: {
    color: 'rgba(148,163,184,1)',
    x: 0,
    y: 0,
  },
  hover: {
    color: 'rgba(255,255,255,0.7)',
    x: 4,
    y: -4,
    transition: {
      duration: 0.26,
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
      <div className="mx-auto max-w-6xl">
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

          <motion.div variants={listWrap} className="flex flex-col gap-4 sm:gap-5">
            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  variants={cardItem}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.985, y: -1 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative overflow-hidden rounded-[28px]
                    border border-slate-200 bg-white p-5
                    sm:p-6 [WebkitTapHighlightColor:transparent]
                  "
                >
                  <motion.div
                    variants={socialOverlay}
                    className="pointer-events-none absolute inset-0 bg-slate-950"
                  />

                  <motion.div
                    variants={socialCard}
                    className="relative z-10 flex min-h-[140px] flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <motion.div
                          variants={socialIconWrap}
                          className="
                            flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl
                            border
                          "
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>

                        <div>
                          <motion.p variants={socialLabel} className="text-sm">
                            {item.label}
                          </motion.p>

                          <motion.h3
                            variants={socialValue}
                            className="mt-2 text-xl font-bold tracking-tight"
                          >
                            {item.value}
                          </motion.h3>
                        </div>
                      </div>

                      <motion.span variants={socialArrow} className="text-lg">
                        ↗
                      </motion.span>
                    </div>

                    <motion.p variants={socialCta} className="mt-6 text-sm font-medium">
                      {item.cta}
                    </motion.p>
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
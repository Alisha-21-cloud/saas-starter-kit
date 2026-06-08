// HeroSection component with main headline and call to action
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BadgeCheck, ArrowRight } from 'lucide-react';
import { githubUrl } from '@/lib/constants';
import { staggerReveal, cardReveal } from '@/lib/motion';

const MotionLink = motion(Link);

export default function HeroSection() {
  return (
    <motion.div
      variants={staggerReveal}
      initial="hidden"
      animate="show"
      className="flex flex-col items-start"
    >
      <motion.div variants={cardReveal}>
        <span
          className="inline-flex items-center gap-2 rounded-full border border-theme-border bg-theme-bg-secondary px-3 py-1.5 text-xs font-medium text-theme-text-secondary shadow-sm backdrop-blur"
        >
          <BadgeCheck className="h-4 w-4 text-theme-accent" aria-hidden="true" />
          Production-Ready
        </span>
      </motion.div>
      <motion.h1
        variants={cardReveal}
        className="mt-6 text-4xl font-semibold tracking-tight text-theme-text-primary sm:text-6xl lg:text-7xl"
      >
        Your Next SaaS
        <br />
        <span className="text-theme-text-muted">Built in Minutes.</span>
      </motion.h1>
      <motion.p
        variants={cardReveal}
        className="mt-6 max-w-2xl text-lg leading-8 text-theme-text-secondary"
      >
        A free, open-source boilerplate for building enterprise-grade SaaS
        applications. Includes Authentication, Billing, Teams, Webhooks, and
        Admin dashboards out of the box.
      </motion.p>
      <motion.div
        variants={cardReveal}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <MotionLink
          href="/auth/join"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-theme-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-theme-accent transition-colors hover:opacity-90"
        >
          Get Started
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </MotionLink>
        <MotionLink
          href={githubUrl}
          target="_blank"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-theme-border bg-theme-bg-primary px-6 py-3.5 text-sm font-semibold text-theme-text-primary shadow-sm transition-colors hover:bg-theme-bg-tertiary"
        >
          View on GitHub
        </MotionLink>
      </motion.div>

      <motion.div
        variants={cardReveal}
        className="mt-12 flex items-center gap-4 text-sm font-medium text-theme-text-muted"
      >
        <p>Trusted by developers at</p>
        <ul className="flex items-center gap-3">
          {['Vercel', 'Stripe', 'Supabase'].map((tag) => (
            <li key={tag} className="rounded-full border border-theme-border bg-theme-bg-secondary px-3 py-1.5 backdrop-blur">
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PackageCheck, CheckCircle2 } from 'lucide-react';

const featureHighlights = [
  'Authentication',
  'Teams',
  'Billing',
  'Webhooks',
  'Audit logs',
  'Dark mode',
  'E2E tests',
  'Docker compose',
  'Prisma Studio',
  'Security Headers',
];

export default function FeatureCalloutSection() {
  const highlightRef = useRef<HTMLElement | null>(null);
  const highlightInView = useInView(highlightRef, {
    once: true,
    margin: '-80px',
  });

  return (
    <section id="feature-callout" ref={highlightRef} className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 px-6 py-10 text-white shadow-2xl shadow-zinc-950/10 dark:border-theme-border dark:bg-theme-bg-secondary dark:text-theme-text-primary transition-colors"
        >
          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${highlightInView ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
          >
            <div className="absolute left-[-6rem] top-[-4rem] h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl dark:bg-[var(--accent-glow)]" />
            <div className="absolute bottom-[-5rem] right-[-4rem] h-56 w-56 rounded-full bg-sky-500/15 blur-3xl dark:bg-[var(--accent-glow)]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/70 dark:border-theme-border dark:bg-theme-bg-primary dark:text-theme-text-muted">
                <PackageCheck className="h-4 w-4" aria-hidden="true" />
                Production defaults
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl dark:text-theme-text-primary">
                Built to cover the boring parts
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/72 dark:text-theme-text-secondary">
                The README does not list pricing tiers, so this section highlights the product defaults that matter most: auth, teams, billing, webhooks, audit logs, dark mode, E2E tests, Docker compose, Prisma Studio, and security headers.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {featureHighlights.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/88 backdrop-blur dark:border-theme-border dark:bg-theme-bg-primary dark:text-theme-text-secondary"
                >
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 dark:text-theme-accent" aria-hidden="true" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

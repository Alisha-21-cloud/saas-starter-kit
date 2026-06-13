import { motion } from 'framer-motion';
import {
  Database,
  FileCode2,
  Sparkles,
  PanelTop,
  CheckCircle2,
  KeyRound,
  CreditCard,
  Webhook,
  ShieldAlert,
  TestTube2,
  Cloud,
  Workflow,
} from 'lucide-react';
import { staggerReveal, cardReveal } from '@/lib/motion';

const techStack = [
  { label: 'Next.js', icon: FileCode2 },
  { label: 'Tailwind CSS', icon: Sparkles },
  { label: 'Postgres', icon: Database },
  { label: 'React', icon: PanelTop },
  { label: 'Prisma', icon: FileCode2 },
  { label: 'TypeScript', icon: CheckCircle2 },
  { label: 'NextAuth.js', icon: KeyRound },
  { label: 'Stripe', icon: CreditCard },
  { label: 'Svix', icon: Webhook },
  { label: 'Retraced', icon: ShieldAlert },
  { label: 'Playwright', icon: TestTube2 },
  { label: 'Docker', icon: Cloud },
  { label: 'SAML Jackson', icon: Workflow },
];

export default function TechStackSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex flex-col gap-4 border-y border-theme-border py-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-theme-text-muted">
              Built with trusted, production-grade tools
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-theme-text-primary">
              The stack the README already ships with.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-theme-text-secondary">
            Next.js, Tailwind CSS, Postgres, React, Prisma, TypeScript, SAML
            Jackson, Svix, Retraced, Stripe, Playwright, Docker, and NextAuth.js
            are all called out in the project README.
          </p>
        </motion.div>

        <motion.div
          variants={staggerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {techStack.map((tool) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.label}
                variants={cardReveal}
                className="flex items-center gap-3 rounded-2xl border border-theme-border bg-theme-bg-secondary px-4 py-3 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-theme-text-primary text-theme-bg-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-theme-text-secondary">
                  {tool.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

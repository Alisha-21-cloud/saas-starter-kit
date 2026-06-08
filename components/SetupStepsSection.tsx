import { motion } from 'framer-motion';
import { GitBranchPlus, Settings2, PlayCircle } from 'lucide-react';
import { staggerReveal, cardReveal } from '@/lib/motion';

const setupSteps = [
  {
    icon: GitBranchPlus,
    step: '01',
    title: 'Clone',
    description:
      'Fork the repository or clone it locally, then move into the project folder and install dependencies.',
  },
  {
    icon: Settings2,
    step: '02',
    title: 'Configure',
    description:
      'Copy .env.example to .env, start Postgres with Docker compose if needed, and push the Prisma schema to the database.',
  },
  {
    icon: PlayCircle,
    step: '03',
    title: 'Deploy',
    description:
      'Run the dev server locally, then use the README deployment links for Vercel, Heroku, or DigitalOcean.',
  },
];

export default function SetupStepsSection() {
  return (
    <section id="getting-started" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-theme-accent">
            Getting started
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-theme-text-primary sm:text-4xl">
            From zero to production in minutes
          </h2>
          <p className="mt-4 text-base leading-7 text-theme-text-secondary">
            The setup flow in the README breaks naturally into three steps: clone, configure, and deploy.
          </p>
        </motion.div>

        <motion.div
          variants={staggerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {setupSteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.step}
                variants={cardReveal}
                className="rounded-[1.75rem] border border-theme-border bg-theme-bg-secondary p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-theme-text-primary text-theme-bg-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-theme-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-theme-text-muted">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-theme-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-theme-text-secondary">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

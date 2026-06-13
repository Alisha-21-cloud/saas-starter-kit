// The right-side floating card showing Starter Kit coverage features
import { motion } from 'framer-motion';
import {
  LockKeyhole,
  Users,
  Webhook,
  Rocket,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import FeatureTile from './FeatureTile';

const features = [
  {
    icon: LockKeyhole,
    title: 'Authentication',
    description: 'Email, magic link, SAML, Google, GitHub',
    iconBg: 'bg-theme-text-primary text-theme-bg-primary',
  },
  {
    icon: Users,
    title: 'Team workflows',
    description: 'Invites, roles, settings, avatars',
    iconBg: 'bg-indigo-600 text-white',
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description: 'Events, delivery, notifications',
    iconBg: 'bg-sky-500 text-white',
  },
  {
    icon: Rocket,
    title: 'Production ready',
    description: 'Docker, tests, Prisma Studio, security',
    iconBg: 'bg-violet-600 text-white',
  },
];

export default function StarterKitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className="relative"
    >
      <div className="float-wrapper">
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--accent-glow)] via-transparent to-violet-600/10 blur-2xl" />
        <div className="float-card relative overflow-hidden rounded-[2rem] border border-theme-border bg-theme-bg-primary/85 p-5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--accent-glow),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_32%)]" />
          <div className="relative grid gap-4">
            <div className="flex items-center justify-between rounded-3xl border border-theme-border bg-theme-bg-secondary px-4 py-3 shadow-sm">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-theme-text-muted">
                  Starter kit coverage
                </p>
                <p className="mt-1 text-sm font-semibold text-theme-text-primary">
                  Auth, teams, billing, events
                </p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-theme-accent text-white shadow-lg shadow-theme-accent">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <FeatureTile key={idx} {...feature} />
              ))}
            </div>

            <div className="rounded-3xl border border-theme-border bg-theme-bg-secondary p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-theme-text-muted">
                    Ready to extend
                  </p>
                  <p className="mt-1 text-sm text-theme-text-secondary">
                    The boring parts are already wired so the product can start
                    at the interesting part.
                  </p>
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-theme-border bg-theme-bg-primary px-3 py-2 text-xs font-semibold text-theme-text-secondary sm:flex">
                  <ShieldCheck
                    className="h-4 w-4 text-theme-accent"
                    aria-hidden="true"
                  />
                  Enterprise defaults
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

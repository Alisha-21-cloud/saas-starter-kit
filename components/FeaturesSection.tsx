import { motion } from 'framer-motion';
import { LockKeyhole, Users, Workflow, Webhook, BadgeCheck, Rocket } from 'lucide-react';
import { staggerReveal, cardReveal } from '@/lib/motion';

const featureCards = [
  {
    icon: LockKeyhole,
    title: 'Authentication',
    description:
      'Create accounts and support sign in with email and password, magic link, SAML SSO, Google, and GitHub.',
  },
  {
    icon: Users,
    title: 'Teams and profiles',
    description:
      'Update account details, create and delete teams, invite users, manage members, update team settings, change member roles, and upload avatars.',
  },
  {
    icon: Workflow,
    title: 'Directory sync',
    description:
      'Directory Sync (SCIM) and Directory Sync Events keep enterprise identity workflows connected and visible.',
  },
  {
    icon: Webhook,
    title: 'Events and notifications',
    description:
      'Webhooks & Events, webhook delivery, and email notifications are built into the starter so product events can flow outward.',
  },
  {
    icon: BadgeCheck,
    title: 'Governance and UX',
    description:
      'Roles and permissions, audit logs, internationalization, dark mode, and security headers are covered from day one.',
  },
  {
    icon: Rocket,
    title: 'Delivery and operations',
    description:
      'Payments, E2E tests, Docker compose, and Prisma Studio are included so the stack feels production-ready, not stitched together.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-theme-accent">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-theme-text-primary sm:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="mt-4 text-base leading-7 text-theme-text-secondary">
            The README’s capabilities are grouped below so the homepage can tell the full product story without inventing anything new.
          </p>
        </motion.div>

        <motion.div
          variants={staggerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={cardReveal}
                className="group rounded-[1.75rem] border border-theme-border bg-theme-bg-secondary p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-theme-bg-tertiary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-theme-accent text-white shadow-lg shadow-theme-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-theme-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-theme-text-secondary">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

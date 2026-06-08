import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const MotionLink = motion(Link);

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="rounded-[2rem] border border-theme-border bg-theme-accent px-6 py-10 text-white shadow-2xl shadow-theme-accent/20"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/70">
                Ready to build something great?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
                Get your SaaS up and running today.
              </h2>
            </div>
            <MotionLink
              href="/auth/join"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-theme-accent shadow-lg shadow-black/10 transition-colors hover:bg-white/90"
            >
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

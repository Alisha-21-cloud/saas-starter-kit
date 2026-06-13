import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import {
  githubUrl,
  contributingUrl,
  licenseUrl,
  codeOfConductUrl,
  vercelUrl,
  herokuUrl,
  digitalOceanUrl,
} from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-theme-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-text-primary text-theme-bg-primary">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold tracking-tight text-theme-text-primary">
                Enterprise SaaS Starter Kit
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-theme-text-secondary">
              The Open Source Next.js SaaS boilerplate for Enterprise SaaS app
              development.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-theme-text-muted">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-theme-text-secondary">
              <li>
                <Link
                  href="#features"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#getting-started"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  Getting started
                </Link>
              </li>
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-theme-text-muted">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-theme-text-secondary">
              <li>
                <a
                  href={vercelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  Vercel deploy
                </a>
              </li>
              <li>
                <a
                  href={herokuUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  Heroku deploy
                </a>
              </li>
              <li>
                <a
                  href={digitalOceanUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  DigitalOcean deploy
                </a>
              </li>
              <li>
                <a
                  href={contributingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  Contributing guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-theme-text-muted">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-theme-text-secondary">
              <li>
                <a
                  href={licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href={codeOfConductUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-theme-text-primary transition-colors"
                >
                  Code of conduct
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-theme-border pt-6 text-sm text-theme-text-muted">
          © {new Date().getFullYear()} Enterprise SaaS Starter Kit. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

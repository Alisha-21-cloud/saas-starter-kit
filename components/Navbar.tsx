// Navbar component with logo, navigation links, and action buttons
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '@/lib/constants';
import { useTheme } from 'next-themes';

const MotionLink = motion(Link);

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-theme-border text-theme-text-secondary transition-colors hover:bg-theme-bg-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent"
      aria-label="Toggle theme"
    >
      <Sun
        className={`absolute h-[1.1rem] w-[1.1rem] transition-all duration-300 ${
          resolvedTheme === 'dark' ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'
        }`}
      />
      <Moon
        className={`absolute h-[1.1rem] w-[1.1rem] transition-all duration-300 ${
          resolvedTheme === 'dark' ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-90'
        }`}
      />
    </button>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && resolvedTheme === 'dark';

  const navbarBackground = useTransform(
    scrollY,
    [0, 72],
    [
      isDarkMode ? 'rgba(11, 15, 25, 0)' : 'rgba(255, 255, 255, 0)',
      isDarkMode ? 'rgba(11, 15, 25, 0.88)' : 'rgba(255, 255, 255, 0.88)',
    ]
  );

  const navbarBorder = useTransform(
    scrollY,
    [0, 72],
    [
      isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.04)',
      isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.12)',
    ]
  );

  const navbarShadow = useTransform(
    scrollY,
    [0, 72],
    [
      '0 0 0 rgba(0, 0, 0, 0)',
      isDarkMode
        ? '0 12px 48px rgba(0, 0, 0, 0.4)'
        : '0 12px 48px rgba(15, 23, 42, 0.08)',
    ]
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        backgroundColor: navbarBackground,
        borderColor: navbarBorder,
        boxShadow: navbarShadow,
      }}
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-primary"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-text-primary text-theme-bg-primary shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-theme-text-primary sm:text-base">
            Enterprise SaaS Starter Kit
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.href.startsWith('http') ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-theme-text-secondary transition-colors duration-200 hover:text-theme-text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-theme-text-secondary transition-colors duration-200 hover:text-theme-text-primary"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <MotionLink
            href="/auth/login"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full border border-transparent px-4 py-2 text-sm font-medium text-theme-text-primary transition-colors hover:bg-theme-bg-tertiary"
          >
            Sign in
          </MotionLink>
          <MotionLink
            href="/auth/join"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-theme-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-theme-accent transition-colors hover:opacity-90"
          >
            Get Started
          </MotionLink>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-theme-border bg-theme-bg-primary text-theme-text-secondary shadow-sm transition-colors hover:bg-theme-bg-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-primary"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-theme-border bg-theme-bg-primary/95 px-6 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <nav className="grid gap-3" aria-label="Mobile primary">
                {navLinks.map((link) =>
                  link.href.startsWith('http') ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-theme-border px-4 py-3 text-sm font-medium text-theme-text-primary transition-colors hover:bg-theme-bg-tertiary"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="h-4 w-4 rotate-[-90deg] opacity-70" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-theme-border px-4 py-3 text-sm font-medium text-theme-text-primary transition-colors hover:bg-theme-bg-tertiary"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="h-4 w-4 rotate-[-90deg] opacity-70" aria-hidden="true" />
                    </Link>
                  )
                )}
              </nav>
              <div className="grid grid-cols-2 gap-3">
                <MotionLink
                  href="/auth/login"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-theme-border px-4 py-3 text-sm font-medium text-theme-text-primary transition-colors hover:bg-theme-bg-tertiary"
                >
                  Sign in
                </MotionLink>
                <MotionLink
                  href="/auth/join"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-theme-accent px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-theme-accent transition-colors hover:opacity-90"
                >
                  Get Started
                </MotionLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

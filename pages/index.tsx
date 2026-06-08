import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { type ReactElement } from 'react';

import env from '@/lib/env';
import type { NextPageWithLayout } from 'types';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StarterKitCard from '@/components/StarterKitCard';
import TechStackSection from '@/components/TechStackSection';
import FeaturesSection from '@/components/FeaturesSection';
import SetupStepsSection from '@/components/SetupStepsSection';
import FeatureCalloutSection from '@/components/FeatureCalloutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Enterprise SaaS Starter Kit</title>
        <meta
          name="description"
          content="The Open Source Next.js SaaS boilerplate for Enterprise SaaS app development."
        />
      </Head>

      <main className="relative min-h-screen overflow-hidden bg-theme-bg-primary text-theme-text-primary antialiased">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-12%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-[var(--accent-glow)] blur-3xl" />
          <div className="absolute right-[-8%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />
          <div className="absolute bottom-[-12%] left-[20%] h-[26rem] w-[26rem] rounded-full bg-[var(--accent-glow)] blur-3xl" />
        </div>

        <Navbar />

        <section className="relative isolate overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-24">
            <HeroSection />
            <StarterKitCard />
          </div>
        </section>

        <TechStackSection />
        <FeaturesSection />
        <SetupStepsSection />
        <FeatureCalloutSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (env.hideLandingPage) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      },
    };
  }

  const { locale } = context;

  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Home;

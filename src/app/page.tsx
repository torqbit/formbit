'use client';

import Head from 'next/head';
import React, { FC, useEffect, useState } from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Brands from '@/components/Brands/Brands';
import Create from '@/components/Create/Create';
import Steps from '@/components/Steps/Steps';
import Pricing from '@/components/Pricing/Pricing';
import Footer from '@/components/Footer/Footer';

import { animated, useSpring, useSpringRef, useTrail } from '@react-spring/web';

export const SideNav: FC<{ isOpen: boolean; onAnchorClick: () => void }> = ({
  isOpen,
  onAnchorClick,
}) => {
  const api = useSpringRef();

  const springs = useSpring({
    ref: api,
    from: { width: '0%' },
    config: { duration: 400 },
  });

  const items = [' Product', 'Solutions', 'Pricing'];

  const trail = useTrail(3, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 450,
    opacity: isOpen ? 1 : 0,
    x: isOpen ? 0 : 20,
    height: isOpen ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  useEffect(() => {
    api.start({
      to: {
        width: isOpen ? '80%' : '0%',
      },
    });
  }, [isOpen]);

  return (
    <animated.div
      style={{
        backgroundColor: '#000',
        position: 'absolute',
        height: '100vh',
        zIndex: 1000,
        ...springs,
      }}
    >
      <div className='flex h-[60px] w-full items-center justify-start bg-white '>
        <img
          height={40}
          style={{ padding: 20 }}
          src='/images/formbit-logo.png'
          alt='Torqbit logo'
        />
      </div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div
          key={index}
          className='relative top-[25%] z-[200] h-[80px] w-full overflow-hidden pl-10 text-[3em] font-[700] leading-[80px] tracking-[-0.05em] text-white will-change-[transform,opacity]'
          style={style}
        >
          <animated.a
            onClick={onAnchorClick}
            href={`#${items[index]}`}
            style={{ height }}
          >
            {items[index]}
          </animated.a>
        </animated.div>
      ))}
    </animated.div>
  );
};

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className='bg-gray-200'>
      <Head>
        <title>Hi</title>
      </Head>
      <section className={`bg-gray-200}`}>
        <Header />

        <div>
          <Hero />
          <Brands />
          <Steps />
          <Create />
          <Pricing />
          <Footer />
        </div>
      </section>
    </main>
  );
}

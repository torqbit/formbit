'use client';

import Head from 'next/head';
import React, { useState } from 'react';

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
import Testimonial from '@/components/Testimonial/Testimonial';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };
  return (
    <main className='bg-gray-200'>
      <Head>
        <title>Hi</title>
      </Head>
      <section className={`bg-gray-200}`}>
        <Header menuActive={menuActive} onMenuActive={onMenuActive} />

        <div
          onClick={() => {
            setMenuActive({ active: false, menu: '' });
          }}
        >
          <Hero />
          <Brands />
          <Create />
          <Steps />
          <Testimonial />
          <Pricing />
          <Footer />
        </div>
      </section>
    </main>
  );
}

'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroPrice from '@/components/Pricing/page/HeroPrice';
import { useState } from 'react';

const PricingPage = () => {
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };
  return (
    <section
      onClick={() => {
        setMenuActive({ active: false, menu: '' });
      }}
    >
      <Header menuActive={menuActive} onMenuActive={onMenuActive} />
      <HeroPrice />
      <Footer />
    </section>
  );
};

export default PricingPage;

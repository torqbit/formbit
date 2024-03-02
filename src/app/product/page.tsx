'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroProduct from '@/components/Menu/Product/HeroProduct';
import { useState } from 'react';

const ProductPage = () => {
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
        menuActive.active && setMenuActive({ active: false, menu: '' });
      }}
    >
      <Header menuActive={menuActive} onMenuActive={onMenuActive} />
      <HeroProduct
        label={'For Marketing Teams'}
        title={'Know your customer, hit your goals'}
        description={
          '1st party data reduces Customer Acquisition Cost, and increases Return on Ad Spend by enabling better targeting and omnichannel engagement.'
        }
        img=''
      />
      <Footer />
    </section>
  );
};

export default ProductPage;

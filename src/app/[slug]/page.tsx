'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Bussiness from '@/components/Menu/Solution/Bussiness';
import HeroSolution from '@/components/Menu/Solution/HeroSolution';
import TabItem from '@/components/Menu/Solution/tab';
import { useState } from 'react';

const viewData = [
  {
    icon: <img src='images/logos/asana.png' alt='' />,
    title: 'Bank',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam ',
  },
  {
    icon: <img src='images/logos/asana.png' alt='' />,
    title: 'Hotel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam ',
  },
  {
    icon: <img src='images/logos/asana.png' alt='' />,

    title: 'Shop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam ',
  },
];

const SolutionPage = ({ params }: { params: { slug: string } }) => {
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
      <HeroSolution
        title={`This page show ${params.slug} contents`}
        description={
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos, beatae iste autem debitis, ducimus illo dolor eaque non?          '
        }
        img='https://placehold.co/600x400'
      />
      <Bussiness
        title='Build Your Business'
        description='Quality never goes out of style'
        viewData={viewData}
      />
      <TabItem />

      <Footer />
    </section>
  );
};

export default SolutionPage;

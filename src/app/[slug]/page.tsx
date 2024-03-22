'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import TabItem from '@/components/Menu/Solution/tab';
import { useState } from 'react';
import HeroSolution from '@/components/Menu/Solution/HeroSolution';
import Blue from '@/components/logo/Blue';
import Mi from '@/components/logo/Mi';
import Petropol from '@/components/logo/Petropol';
import Bussiness from '@/components/Menu/Solution/Bussiness';
import Quality from '@/components/logo/Quality';
import Apple from '@/components/logo/Apple';
import Dell from '@/components/logo/Dell';

const viewData = [
  {
    name1: 'BLUE',
    name2: 'PETROPOL',
    name3: 'QUALITY',
    icon1: <Blue />,
    icon2: <Petropol />,
    icon3: <Quality />,
    title: 'Hotel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore',
  },
  {
    name1: 'DELL',
    name2: 'I-TECH',
    name3: 'MI',
    icon1: <Dell />,
    icon2: <Apple />,
    icon3: <Mi />,
    title: 'Retail Shop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore',
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
        title={`${params.slug}`}
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

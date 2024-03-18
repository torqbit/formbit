'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Bussiness from '@/components/Menu/Solution/Bussiness';
import HeroSolution from '@/components/Menu/Solution/HeroSolution';
import TabItem from '@/components/Menu/Solution/tab';
import Sbi from '@/components/logo/Sbi';

import { useState } from 'react';
import Un from '@/components/logo/Un';
import Atlas from '@/components/logo/Atlas';
import Oberoi from '@/components/logo/Oberoi';
import Taj from '@/components/logo/Taj';
import Royal from '@/components/logo/Royal';
import Kfc from '@/components/logo/Kfc';
import Hfc from '@/components/logo/Hfc';

const viewData = [
  {
    icon1: <Sbi />,
    name1: 'Sbi',
    icon2: <Un />,
    name2: 'UB',
    icon3: <img src='images/logos/cb.svg' alt='' />,
    name3: 'CB',

    title: 'Bank',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam ',
  },
  {
    name1: 'ATLAS',
    name2: 'TAJ',
    name3: 'Oberoi',
    icon1: <Atlas />,
    icon2: <Taj />,
    icon3: <Oberoi />,
    title: 'Hotel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam ',
  },
  {
    name1: 'KFC',
    name2: 'HFC',
    name3: 'ROYAL',
    icon1: <Kfc />,
    icon2: <Hfc />,
    icon3: <Royal />,
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

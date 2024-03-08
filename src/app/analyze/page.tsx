'use client';
import { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroProduct from '@/components/Menu/Product/HeroProduct';
import RealTime from '@/components/Menu/Product/RealTime';
import View from '@/components/Menu/Product/View';
import {
  faEnvelope,
  faHamburger,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const viewData = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: 'Personalized Messages',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam ',
  },
  {
    icon: <FontAwesomeIcon icon={faWrench} />,

    title: 'Truly Omni Omni-channel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    icon: <FontAwesomeIcon icon={faHamburger} />,

    title: 'Propensity modeling',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sed quae laborum asperiores dicta numquam quam ',
  },
];

const realtime = [
  {
    title: 'Real-time audiences',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos',
    img: 'https://placehold.co/600x700',
    flex: 'lg:flex-row',
    link: 'Explore Formbit Engage',
    array: viewData,
  },
  {
    title: 'Deliver unified, personalized customer experiences',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos,',
    img: 'https://placehold.co/600x800',
    flex: 'lg:flex-row-reverse',
    link: 'Explore Formbit Engage',
    array: viewData,
  },
  {
    title: 'Robust marketing appstore',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam ',
    img: 'https://placehold.co/600x700',
    flex: 'lg:flex-row',
    link: 'Explore Formbit Connections',
    array: viewData,
  },
];

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
        label={'For Analyzing Teams'}
        title={'Analyze the usage of your forms'}
        description={
          ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem nemo amet dolore, sequi eos, beatae iste autem debitis, ducimus illo dolor eaque non?          '
        }
        img='https://placehold.co/600x500'
      />
      <View
        title='Complete view of the customer'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae laborum asperiores dicta numquam quam quidem'
        viewData={viewData}
      />
      {realtime.map((content, i) => {
        return (
          <div key={i}>
            <RealTime
              title={content.title}
              description={content.description}
              link={content.link}
              array={content.array}
              img={content.img}
              flex={content.flex}
            />
          </div>
        );
      })}

      <Footer />
    </section>
  );
};

export default ProductPage;

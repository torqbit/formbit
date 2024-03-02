'use client';

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
import { useState } from 'react';

const viewData = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    title: 'Personalized Messages',
    description:
      'Deliver a message that’s audience-, time-, channel-, and behavior-specific.',
  },
  {
    icon: <FontAwesomeIcon icon={faWrench} />,

    title: 'Truly Omni Omni-channel',
    description:
      'Real-time customer profiles power rich audiences, which mean journeys can span native and external channels, whether paid or owned.',
  },
  {
    icon: <FontAwesomeIcon icon={faHamburger} />,

    title: 'Propensity modeling',
    description:
      'Optimize your offers by predicting the likelihood someone will buy.',
  },
];

const realtime = [
  {
    title: 'Real-time audiences',
    description:
      'Target the right customer with the right message at the right time. Build audiences and create real-time campaigns, without relying on other teams.',
    img: '/images/hero-image.png',
    flex: 'lg:flex-row',
    link: 'Explore Twilio Engage',
    array: viewData,
  },
  {
    title: 'Deliver unified, personalized customer experiences',
    description:
      'Build and activate data-driven, personalized campaigns across every customer channel from a centralized platform without relying on other teams.',
    img: '/images/hero-image.png',
    flex: 'lg:flex-row-reverse',
    link: 'Explore Twilio Engage',
    array: viewData,
  },
  {
    title: 'Robust marketing appstore',
    description: 'Activate audiences in 450+ marketing tools, in real-time.',
    img: '/images/hero-image.png',
    flex: 'lg:flex-row',
    link: 'Explore Segment Connections',
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
        label={'For Marketing Teams'}
        title={'Know your customer, hit your goals'}
        description={
          '1st party data reduces Customer Acquisition Cost, and increases Return on Ad Spend by enabling better targeting and omnichannel engagement.'
        }
        img='/images/tools-illustration.svg'
      />
      <View
        title='Complete view of the customer'
        description='Unify your customer touch points across all platforms and channels. Understand your customer journey.'
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

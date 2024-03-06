'use client';

import ChangelogCard from '@/components/ChangeLog/ChangelogCard';
import HeroChangelog from '@/components/ChangeLog/HeroChangelog';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { useState } from 'react';

const ChangelogPage = () => {
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };

  const changelogData = [
    {
      date: 'February 22, 2024',
      title: 'Lorem ipsum dolor sit amet consectetur',
      img: 'https://placehold.co/600x300',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, voluptas neque temporibus exercitationem ad doloremque est sed impedit ab tempore aspernatur fugit delectus animi, pariatur dolores eius? Eaque, minus ab?',
      href: '',
      link: 'New & Improved   ',
    },
    {
      date: 'February 29, 2024',
      title: 'Lorem ipsum dolor sit amet consectetur',
      img: 'https://placehold.co/600x300',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, voluptas neque temporibus exercitationem ad doloremque est sed impedit ab tempore aspernatur fugit delectus animi, pariatur dolores eius? Eaque, minus ab?',
      href: '',
      link: 'New & Improved   ',
    },
    {
      date: 'February 16, 2024',
      title: 'Lorem ipsum dolor sit amet consectetur',
      img: 'https://placehold.co/600x300',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, voluptas neque temporibus exercitationem ad doloremque est sed impedit ab tempore aspernatur fugit delectus animi, pariatur dolores eius? Eaque, minus ab?',
      href: '',
      link: 'New & Improved   ',
    },
  ];
  return (
    <section
      onClick={() => {
        menuActive.active && setMenuActive({ active: false, menu: '' });
      }}
    >
      <Header menuActive={menuActive} onMenuActive={onMenuActive} />
      <HeroChangelog />
      {changelogData.map((data, i) => {
        return (
          <div key={i}>
            <ChangelogCard
              index={i}
              lastIndex={changelogData.length - 1}
              date={data.date}
              title={data.title}
              img={data.img}
              description={data.description}
              href={data.href}
              link={data.link}
            />
          </div>
        );
      })}
      <Footer />
    </section>
  );
};

export default ChangelogPage;

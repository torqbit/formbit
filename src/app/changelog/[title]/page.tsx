'use client';

import ChangelogCard from '@/components/ChangeLog/ChangelogCard';
import HeroChangelog from '@/components/ChangeLog/HeroChangelog';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Params } from '@fortawesome/fontawesome-svg-core';
import { FC, useState } from 'react';

const ChangelogPost: FC<{ params: Params }> = ({ params }) => {
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };

  const changelogData: {
    date: string;
    title: string;
    img: string;
    description: string;
    href: string;
    link: string;
  }[] = [
    {
      date: 'February 22, 2024',
      title: 'Lorem ipsum dolor sit amet ',
      img: 'https://placehold.co/600x300',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, voluptas neque temporibus exercitationem ad doloremque est sed impedit ab tempore aspernatur fugit delectus animi, pariatur dolores eius? Eaque, minus ab?',
      href: '',
      link: 'New & Improved   ',
    },
    {
      date: 'February 29, 2024',
      title: 'Lorem ipsum dolor sit  consectetur',
      img: 'https://placehold.co/600x300',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, voluptas neque temporibus exercitationem ad doloremque est sed impedit ab tempore aspernatur fugit delectus animi, pariatur dolores eius? Eaque, minus ab?',
      href: '',
      link: 'New & Improved   ',
    },
    {
      date: 'February 16, 2024',
      title: 'Lorem ipsum dolor amet consectetur',
      img: 'https://placehold.co/600x300',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, voluptas neque temporibus exercitationem ad doloremque est sed impedit ab tempore aspernatur fugit delectus animi, pariatur dolores eius? Eaque, minus ab?',
      href: '',
      link: 'New & Improved   ',
    },
  ];

  const slug = params.title?.replace(/\s+/g, '-');
  const data = changelogData.find(
    (log) => log.title.replace(/\s+/g, '-') === slug
  );

  return (
    <section
      onClick={() => {
        menuActive.active && setMenuActive({ active: false, menu: '' });
      }}
    >
      <Header menuActive={menuActive} onMenuActive={onMenuActive} />
      <HeroChangelog />

      {data && (
        <div>
          <ChangelogCard
            index={0}
            lastIndex={0}
            date={data.date}
            title={data.title}
            img={data.img}
            description={data.description}
            href={data.href}
            link={data.link}
            post={true}
          />
        </div>
      )}

      <Footer />
    </section>
  );
};

export default ChangelogPost;

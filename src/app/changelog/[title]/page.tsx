'use client';

import ChangelogCard from '@/components/ChangeLog/ChangelogCard';
import HeroChangelog from '@/components/ChangeLog/HeroChangelog';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Params } from '@fortawesome/fontawesome-svg-core';
import { FC, useEffect, useState } from 'react';

const ChangelogPost: FC<{ params: Params }> = ({ params }) => {
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };

  const slug = params.title?.replace(/\s+/g, '-');

  const [changelogPost, setchangelogPost] = useState<any>();
  const [content, setContent] = useState();

  const post = () => {
    if (slug) {
      fetch(`/api/slug?slug=${slug}&dir=_changelog`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }).then((res) =>
        res.json().then((data) => {
          setchangelogPost(data.post);
          setContent(data.content);
        })
      );
    }
  };
  useEffect(() => {
    post();
  }, []);
  if (changelogPost) {
    return (
      <>
        <head>
          <title>{changelogPost.title}</title>
          <meta property='og:image' content={changelogPost.ogImage.url} />
        </head>
        <section
          onClick={() => {
            menuActive.active && setMenuActive({ active: false, menu: '' });
          }}
        >
          <Header menuActive={menuActive} onMenuActive={onMenuActive} />

          <HeroChangelog />
          <div>
            <ChangelogCard
              index={0}
              lastIndex={0}
              date={changelogPost.date}
              title={changelogPost.title}
              img={changelogPost.coverImage}
              description={changelogPost.excerpt}
              href={'/'}
              link={changelogPost.link}
              fileName=''
              post={true}
              content={content}
            />
          </div>
          <Footer />
        </section>
      </>
    );
  } else {
    return (
      <div className='flex h-[100vh] flex-col items-center justify-center'>
        <div className='mt-40 h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-black' />
      </div>
    );
  }
};

export default ChangelogPost;

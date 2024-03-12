'use client';
export const dynamic = 'force-dynamic';

import ChangelogCard from '@/components/ChangeLog/ChangelogCard';
import HeroChangelog from '@/components/ChangeLog/HeroChangelog';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Head from 'next/head';

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

  const post = async () => {
    try {
      if (slug) {
        const res = await fetch(`/api/slug?slug=${slug}&dir=changelog`, {
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
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    post();
  }, []);

  if (changelogPost) {
    return (
      <>
        <Head>
          <title>{changelogPost.title}</title>
          <meta property='og:image' content={changelogPost.ogImage.url} />
        </Head>
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
              href='/'
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
      <>
        <>
          <Header menuActive={menuActive} onMenuActive={onMenuActive} />
          <div className='flex h-[100vh] flex-col items-center justify-center gap-2'>
            <div className='mt-20 h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-black' />{' '}
            <h2>Loading...</h2>
          </div>
          <Footer />
        </>
      </>
    );
  }
};

export default ChangelogPost;

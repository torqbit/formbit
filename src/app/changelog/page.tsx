'use client';
export const dynamic = 'force-dynamic';

import ChangelogCard from '@/components/ChangeLog/ChangelogCard';
import HeroChangelog from '@/components/ChangeLog/HeroChangelog';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React, { useEffect } from 'react';
import { useState } from 'react';

const ChangelogPage = () => {
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };

  const [allPost, setPost] = useState<
    {
      coverImage: string;
      slug: string;
      title: string;
      fileName: string;
      date: string;
      link: string;
      excerpt: string;
      author: { picture: string; name: string };
    }[]
  >();

  const Post = async () => {
    try {
      const res = await fetch(`/api/allPosts?dir=changelog`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      const result = await res.json();

      setPost(result.post);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    Post();
  }, []);

  return (
    <section
      onClick={() => {
        menuActive.active && setMenuActive({ active: false, menu: '' });
      }}
    >
      <Header menuActive={menuActive} onMenuActive={onMenuActive} />
      {allPost ? (
        <div>
          <HeroChangelog />
          {allPost.map((data, i) => {
            return (
              <div key={i}>
                <ChangelogCard
                  index={i}
                  lastIndex={allPost.length - 1}
                  date={data.date}
                  title={data.title}
                  img={data.coverImage}
                  description={data.excerpt}
                  href='/'
                  fileName={data.fileName}
                  link={data.link}
                  post={false}
                  content={<div></div>}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <Header menuActive={menuActive} onMenuActive={onMenuActive} />
          <div className='flex h-[100vh] flex-col items-center justify-center gap-2'>
            <div className='mt-20 h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-black' />{' '}
            <h2>Loading...</h2>
          </div>
          <Footer />
        </>
      )}
      <Footer />
    </section>
  );
};

export default ChangelogPage;

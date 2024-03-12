import Avatar from './Avatar';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import DateFormater from './DateFormater';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const PostBody: FC<{ slug: string }> = ({ slug }) => {
  const [blogPost, setBlogPost] = useState<any>();
  const [content, setContent] = useState();
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };

  const post = () => {
    if (slug) {
      fetch(`/api/slug?slug=${slug}&dir=post`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }).then((res) =>
        res.json().then((data) => {
          setBlogPost(data.post);
          setContent(data.content);
        })
      );
    }
  };
  useEffect(() => {
    post();
  });

  if (blogPost) {
    return (
      <>
        <Head>
          <title>{blogPost.title}</title>
          <meta property='og:image' content={blogPost.ogImage.url} />
        </Head>
        <Header menuActive={menuActive} onMenuActive={onMenuActive} />
        <section
          className='m-auto bg-gray-50 md:w-[full] '
          onClick={() => {
            menuActive.active && setMenuActive({ active: false, menu: '' });
          }}
        >
          <div className=' flex  h-[250px] w-[full] items-end bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 align-baseline  md:h-[250px]'></div>
          <div className='m-auto mt-[-100px] flex w-[full] flex-col items-center  justify-center rounded-lg p-2  md:w-[1200px]  '>
            <img
              src={blogPost.coverImage}
              className='  h-[250px]  w-[full] rounded-lg  border-4 border-gray-400  object-cover p-1 md:h-[600px] md:w-[1200px]'
              alt=''
            />
          </div>

          <div className='items-left m-auto flex flex-col justify-between p-[20px] text-xl font-[400] text-[#666] md:max-w-[1200px]'>
            <div className='flex flex-col items-center '>
              <h1 className='w-[full]  pb-6 text-center text-[40px] font-light leading-tight text-black md:text-[55px] md:leading-[70px]  '>
                {blogPost.title}
              </h1>

              <h2 className='text-[30px] font-light text-[#666]'>
                <DateFormater dateString={blogPost.date} />
              </h2>
            </div>
            <hr className='m-[20px]' />
            <div className='flex flex-col md:flex-row'>
              <div className='flex flex-col  rounded border-2  p-6 md:w-[600px]  md:flex-col md:border-none md:p-0'>
                <Avatar picture={blogPost.author.picture} name={''} />
                <h1 className='text-left text-[15px]	 text-black '>
                  {blogPost.author.name}
                </h1>
              </div>
              <div>
                <div
                  className='flex flex-col gap-4 py-4'
                  dangerouslySetInnerHTML={{ __html: content as any }}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header menuActive={menuActive} onMenuActive={onMenuActive} />
        <div className='flex h-[100vh] flex-col items-center justify-center gap-2'>
          <div className='mt-20 h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-black' />{' '}
          <h2>Loading...</h2>
        </div>
        <Footer />
      </>
    );
  }
};

export default PostBody;

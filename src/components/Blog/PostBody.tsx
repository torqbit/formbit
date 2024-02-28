import Avatar from './Avatar';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import DateFormater from './DateFormater';
import Header from '@/components/Header/Header';

const PostBody: FC<{ slug: string }> = ({ slug }) => {
  const [blogPost, setBlogPost] = useState<any>();
  const [content, setContent] = useState();

  const post = () => {
    if (slug) {
      fetch(`/api/slug?slug=${slug}`, {
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
        <Header />
        <section className='m-auto bg-gray-50 md:w-[full] '>
          <div className='m-auto flex w-[1200px] flex-col  items-center justify-center rounded-lg  p-2 md:max-w-[1200px] '>
            <img
              src={blogPost.coverImage}
              className='  h-[250px]  w-[full]  rounded-lg border-4  border-gray-400 object-contain p-1 md:h-[500px]'
              alt=''
            />
          </div>

          <div className='items-left m-auto flex flex-col justify-between p-[20px] text-xl font-[400] text-[#666] md:max-w-[1000px]'>
            <h1 className='w-[full] pb-6 text-center text-[40px] font-light leading-tight text-black md:text-[55px] md:leading-[70px]  '>
              {blogPost.title}
            </h1>
            <DateFormater dateString={blogPost.date} />
            <Avatar
              picture={blogPost.author.picture}
              name={blogPost.author.name}
            />

            <div>
              <div
                className='py-4'
                dangerouslySetInnerHTML={{ __html: content as any }}
              />
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <h1>loading</h1>;
  }
};

export default PostBody;

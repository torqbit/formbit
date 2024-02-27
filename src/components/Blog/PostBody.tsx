import Avatar from './Avatar';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import DateFormater from './DateFormater';

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
        <section className='bg-black'>
          <div>
            <div className='flex h-[250px] items-end bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900 p-10 align-baseline '></div>

            <div className='flex flex-col items-center justify-center rounded-lg bg-black p-2 '>
              <img
                src={blogPost.coverImage}
                className='-mt-[100px]   w-[900px] rounded-lg  border-8 border-black object-contain'
                alt=''
              />
            </div>
            <div className='m-auto flex max-w-[1000px]	flex-col items-center justify-between'>
              <h1 className=' w-[700px] pb-6 text-center text-[55px] font-light leading-[70px] text-white '>
                {blogPost.title}
              </h1>
              <div className='text-xl font-[400] text-white'>
                <DateFormater dateString={blogPost.date} />
                <div>
                  <div>
                    <Avatar
                      picture={blogPost.author.picture}
                      name={blogPost.author.name}
                    />
                  </div>
                </div>

                <div>
                  <div
                    className='py-4'
                    dangerouslySetInnerHTML={{ __html: content as any }}
                  />
                </div>
              </div>
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

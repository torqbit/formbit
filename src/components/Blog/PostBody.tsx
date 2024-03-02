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
              <div className='flex flex-col rounded border-2 p-6 md:w-[600px]  md:flex-col md:border-none md:p-0'>
                <Avatar picture={blogPost.author.picture} name={''} />
                <h1 className='text-[15px] text-black'>
                  {blogPost.author.name}
                </h1>
              </div>
              <div>
                <div
                  className='py-4'
                  dangerouslySetInnerHTML={{ __html: content as any }}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <div
        className='mt-[50px]  flex h-[auto] w-[full]	items-center justify-center'
        role='status'
      >
        <svg
          aria-hidden='true'
          className='inline h-10 w-10 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentFill'
          />
        </svg>
        <h1 className='ml-[20px]'>Loading..</h1>
      </div>
    );
  }
};

export default PostBody;

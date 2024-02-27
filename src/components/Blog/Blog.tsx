import DateFormater from '@/components/Blog/DateFormater';
import { FC, useState } from 'react';

const Blog: FC<{
  morePost: [
    {
      coverImage: string;
      slug: string;
      title: string;
      date: string;
      excerpt: string;
      author: { picture: string; name: string };
    }
  ];
}> = ({ morePost }) => {
  const [active, setActive] = useState<string>('');

  return (
    <section id='blog'>
      <div className='flex items-end bg-gradient-to-b from-gray-400 via-gray-300 to-gray-100 p-2 align-baseline md:h-[250px] md:p-10 '>
        <p className=' text-left text-[30px] text-black md:text-[60px]'>BLOG</p>
      </div>
      <div className='z-40 bg-gray-100 p-2 md:p-10'>
        {morePost?.length > 2 && (
          <div className='flex flex-col gap-10 sm:flex-row md:items-center md:py-8 '>
            {morePost.slice(3, 6).map((blog, i) => {
              return (
                <div
                  key={i}
                  className='h-[auto] w-[350px] rounded border-2 border-gray-400 border-opacity-40 bg-white p-3  md:max-h-[600px] md:w-[400px]'
                >
                  <div>
                    <a href={`/blog/${blog.slug}`}>
                      <img
                        src={blog.coverImage}
                        alt=''
                        className='h-[300px] w-[340px] rounded rounded-b-[0px] object-cover object-center md:h-[250px] md:w-full'
                      />
                      <div className='pt-4'>
                        <h2 className='  text-2xl   font-[600] text-black transition-all  '>
                          <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                        </h2>
                        <hr className='mb-4 mt-4 bg-gray-400' />

                        <div className='flex w-full items-center  text-[15px]  md:w-[300px]'>
                          <div className='flex items-center gap-1  font-bold text-gray-700'>
                            <DateFormater dateString={blog.date} />
                          </div>
                          <div>
                            <img
                              src={blog.author.picture}
                              className='ml-4 mr-4 h-[30px] w-[30px] rounded-full object-cover '
                              alt=''
                            />
                          </div>
                          <div className='flex items-center gap-1  font-bold text-gray-700'>
                            {blog.author.name}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default Blog;

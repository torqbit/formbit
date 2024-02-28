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
    <section id='blog' className=' bg-gray-100 p-2 md:p-10 '>
      <div className='m-auto md:max-w-[1400px] '>
        <h1 className='mb-6 text-[50px] font-normal'>BLOG</h1>
        <div className='grid grid-rows-1 gap-1 sm:flex-row md:grid-cols-3 md:items-center md:gap-10 md:py-8 '>
          {morePost.map((blog, i) => {
            return (
              <div
                key={i}
                className='h-[auto]  w-[full] rounded  bg-white  md:max-h-[600px] md:w-[400px]'
              >
                <div
                  onMouseOver={() => {
                    setActive(blog.author.name);
                  }}
                  onMouseLeave={() => {
                    setActive('');
                  }}
                  className={`relative z-20 cursor-pointer rounded border-2 border-opacity-40 bg-white
                p-2 text-[#666]
              
                transition-all md:p-8 lg:m-0  `}
                >
                  <a href={`/blog/${blog.slug}`}>
                    <img
                      src={blog.coverImage}
                      alt=''
                      className='h-[300px] w-[352px]  rounded rounded-b-[0px] object-cover md:h-[250px] md:w-full'
                    />
                    <h2 className='h-[100px] pt-6   text-2xl   font-[600] text-black transition-all  '>
                      <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                    </h2>
                    <hr className='mb-4 mt-4 bg-gray-400' />

                    <div className='flex w-full items-center gap-1 text-[15px] font-bold  text-gray-700  md:w-[300px]'>
                      <DateFormater dateString={blog.date} />
                      <img
                        src={blog.author.picture}
                        className='ml-4 mr-4 h-[30px] w-[30px] rounded-full object-cover '
                        alt=''
                      />
                      <span className='flex items-center gap-1  font-bold text-gray-700'>
                        {blog.author.name}
                      </span>
                    </div>
                  </a>
                </div>
                {active === blog.author.name && (
                  <div className='relative z-0 -mt-[480px] h-[480px] w-full rounded-lg   bg-gradient-to-r  from-[#f2b5d4]  via-pink-200 to-[#7bdff2]   opacity-75 blur '></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;

import DateFormater from '@/components/Blog/DateFormater';
import { FC } from 'react';

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
  return (
    <section id='blog'>
      <div className='flex h-[250px] items-end bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900 p-10 align-baseline '>
        <p className='w-full text-left text-white md:text-[60px]'>BLOG</p>
      </div>
      <div className='bg-black p-10'>
        {morePost?.length > 2 && (
          <div className='flex flex-col items-center gap-10 py-8 sm:flex-row '>
            {morePost.slice(3, 6).map((blog, i) => {
              return (
                <div
                  key={i}
                  className='max-h-[600px] rounded	 border border-gray-400  p-3 shadow-xl  hover:bg-gray-900'
                >
                  <a href={`/blog/${blog.slug}`}>
                    <img
                      src={blog.coverImage}
                      alt=''
                      className='h-[250px] w-full rounded rounded-b-[0px] object-cover object-center'
                    />
                    <div className='pt-4'>
                      <h2 className='  text-2xl   font-[600] text-white transition-all  '>
                        <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                      </h2>
                      <hr className='mb-4 mt-4 bg-gray-400' />

                      <div className='flex w-full items-center  text-[15px]  md:w-[300px]'>
                        <div className='flex items-center gap-1  font-bold text-gray-400'>
                          <DateFormater dateString={blog.date} />
                        </div>
                        <div>
                          <img
                            src={blog.author.picture}
                            className='ml-4 mr-4 h-[30px] w-[30px] rounded-full object-cover '
                            alt=''
                          />
                        </div>
                        <div className='flex items-center gap-1  font-bold text-gray-400'>
                          {blog.author.name}
                        </div>
                      </div>
                    </div>
                  </a>
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
